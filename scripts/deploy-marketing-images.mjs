import sharp from "sharp";
import { mkdirSync } from "fs";
import path from "path";

const images = [
  {
    src: "/Users/pranamyajain/.gemini/antigravity/brain/7651a22e-9a03-4907-88d7-2dc92ec8a4bc/ai_consulting_1783150078887.jpg",
    destDir: "public/services",
    destName: "ai-consulting.webp"
  },
  {
    src: "/Users/pranamyajain/.gemini/antigravity/brain/7651a22e-9a03-4907-88d7-2dc92ec8a4bc/ai_agent_dev_1783150092241.jpg",
    destDir: "public/services",
    destName: "ai-agent-development.webp"
  },
  {
    src: "/Users/pranamyajain/.gemini/antigravity/brain/7651a22e-9a03-4907-88d7-2dc92ec8a4bc/ai_talent_1783150105407.jpg",
    destDir: "public/services",
    destName: "ai-talent.webp"
  },
  {
    src: "/Users/pranamyajain/.gemini/antigravity/brain/7651a22e-9a03-4907-88d7-2dc92ec8a4bc/promoted_stat_bg_1783150121310.jpg",
    destDir: "public/brand",
    destName: "promoted-stat-bg.webp"
  },
  {
    src: "/Users/pranamyajain/.gemini/antigravity/brain/7651a22e-9a03-4907-88d7-2dc92ec8a4bc/cred_cerebro_1783150140419.jpg",
    destDir: "public/credentials",
    destName: "cerebro.webp"
  },
  {
    src: "/Users/pranamyajain/.gemini/antigravity/brain/7651a22e-9a03-4907-88d7-2dc92ec8a4bc/cred_wyzr_1783150156526.jpg",
    destDir: "public/credentials",
    destName: "wyzr.webp"
  },
  {
    src: "/Users/pranamyajain/.gemini/antigravity/brain/7651a22e-9a03-4907-88d7-2dc92ec8a4bc/cred_sustaintel_1783150174261.jpg",
    destDir: "public/credentials",
    destName: "sustaintel.webp"
  },
  {
    src: "/Users/pranamyajain/.gemini/antigravity/brain/7651a22e-9a03-4907-88d7-2dc92ec8a4bc/trust_placeholder_1783150190461.jpg",
    destDir: "public/brand",
    destName: "trust-placeholder.webp"
  }
];

const basePath = "/Users/pranamyajain/Selona Website Redesign/selona";

async function processImages() {
  for (const img of images) {
    const fullDestDir = path.join(basePath, img.destDir);
    mkdirSync(fullDestDir, { recursive: true });
    
    const fullDestPath = path.join(fullDestDir, img.destName);
    
    console.log(`Processing: ${img.src} -> ${fullDestPath}`);
    await sharp(img.src)
      .webp({ quality: 90 })
      .toFile(fullDestPath);
  }
  console.log("All marketing images successfully deployed!");
}

processImages().catch((err) => {
  console.error("Error processing images:", err);
  process.exit(1);
});
