import Image from "next/image";

export function Logo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/brand/selona-logo-official.svg"
      alt="Selona"
      width={162}
      height={33}
      className={className}
      priority
    />
  );
}
