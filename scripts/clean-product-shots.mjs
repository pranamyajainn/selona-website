import sharp from "sharp";
import { mkdirSync } from "fs";
import path from "path";

// Cleans raw screen-recording frames of the ThinkAIWork product: detects the
// black letterbox bars top/bottom algorithmically (row-mean-luminance
// threshold), then trims a bottom margin sized to clear the recorder's
// timer widget + watermark row. One source frame (Skills & Plugins) also
// carries a mid-frame narration callout ("2. Your Skills") baked in by the
// recording tool; its crop fraction is widened specifically for that file
// since the callout sits higher than the timer/watermark row (documented
// in the build report, not applied to the other five frames).
const srcDir = "/Users/pranamyajain/Desktop";
const outDir = path.join(process.cwd(), "public/product");
mkdirSync(outDir, { recursive: true });

// Note: 10.13.37 is a duplicate of the same six-stage overview screen as
// 10.12.31 (captured at two different moments in the recording); only the
// clearer one (10.12.31, no stray cursor in frame) is used, per the client's
// instruction to use the clearer of a duplicate pair rather than both.
const files = [
  { src: "Screenshot 2026-07-04 at 10.13.22.png", out: "skills-plugins.webp", extraBottomFrac: 0.34, rightCropPx: 50 },
  { src: "Screenshot 2026-07-04 at 10.13.15.png", out: "input-data.webp" },
  { src: "Screenshot 2026-07-04 at 10.13.07.png", out: "usecases.webp" },
  { src: "Screenshot 2026-07-04 at 10.12.51.png", out: "build-context.webp", extraTopPx: 140, rightCropPx: 60 },
  { src: "Screenshot 2026-07-04 at 10.12.31.png", out: "overview-a.webp" },
];

const LUMA_THRESHOLD = 18; // near-black row mean -> letterbox
const DEFAULT_BOTTOM_FRAC = 0.155; // clears timer widget + watermark row
const TOP_SAFETY_PX = 4; // clears a hairline anti-aliased edge left by letterbox detection

async function findLetterbox(raw, info) {
  const { width, height, channels } = info;
  const rowMean = (y) => {
    let sum = 0;
    const rowStart = y * width * channels;
    for (let x = 0; x < width; x++) {
      const idx = rowStart + x * channels;
      sum += (raw[idx] + raw[idx + 1] + raw[idx + 2]) / 3;
    }
    return sum / width;
  };

  let top = 0;
  while (top < height / 2 && rowMean(top) < LUMA_THRESHOLD) top++;
  let bottom = height - 1;
  while (bottom > height / 2 && rowMean(bottom) < LUMA_THRESHOLD) bottom--;

  return { top, bottom };
}

for (const f of files) {
  const srcPath = path.join(srcDir, f.src);
  const img = sharp(srcPath);
  const meta = await img.metadata();
  const { data, info } = await img
    .clone()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { top, bottom } = await findLetterbox(data, info);
  const canvasHeight = bottom - top + 1;
  const bottomFrac = f.extraBottomFrac ?? DEFAULT_BOTTOM_FRAC;
  const extraTop = (f.extraTopPx ?? 0) + TOP_SAFETY_PX;
  const finalTop = top + extraTop;
  const cropHeight = Math.round(canvasHeight * (1 - bottomFrac)) - extraTop;
  const rightCrop = f.rightCropPx ?? 0;
  const cropWidth = meta.width - rightCrop;

  await sharp(srcPath)
    .extract({ left: 0, top: finalTop, width: cropWidth, height: cropHeight })
    .webp({ quality: 88 })
    .toFile(path.join(outDir, f.out));

  console.log(
    `${f.src} -> ${f.out}: letterbox top=${top} bottom=${meta.height - 1 - bottom}, extraTopPx=${extraTop}, rightCropPx=${rightCrop}, canvas=${canvasHeight}px, kept=${cropWidth}x${cropHeight} (bottom trim ${(bottomFrac * 100).toFixed(1)}%)`,
  );
}
