import Link from "next/link";
import { PrimaryButton } from "@/components/Buttons";

export default function NotFound() {
  return (
    <section className="gutter flex min-h-[70vh] flex-col items-center justify-center gap-6 pt-28 text-center">
      <p className="type-eyebrow text-ink">404</p>
      <h1 className="type-display max-w-xl">
        This page seems to have automated itself away.
      </h1>
      <p className="type-lead max-w-md text-body-60">
        The page you are looking for does not exist or has moved.
      </p>
      <div className="flex items-center gap-4">
        <PrimaryButton href="/">Back to home</PrimaryButton>
        <Link
          href="/contact"
          className="text-sm font-medium text-action hover:text-sky"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
