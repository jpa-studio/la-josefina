import Image from "next/image";
import { siteConfig } from "@/content/config";
import { t, type Lang } from "@/content/translations";

type Props = { lang: Lang };

export function Hero({ lang }: Props) {
  const tr = t[lang].hero;

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-brand text-white"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 50% 40%, rgba(45,106,79,0.55) 0%, transparent 62%), " +
          "radial-gradient(rgba(255,255,255,0.055) 1px, transparent 1px)",
        backgroundSize: "100% 100%, 28px 28px",
      }}
    >
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-20 text-center sm:px-6 sm:py-28 lg:py-32">
        <Image
          src={siteConfig.logo}
          alt={siteConfig.name}
          width={140}
          height={140}
          priority
          className="h-28 w-28 sm:h-32 sm:w-32 rounded-full object-cover ring-4 ring-white/20 shadow-2xl"
        />

        <div className="flex flex-col items-center gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-brand-softer ring-1 ring-white/20 backdrop-blur-sm">
            {tr.badge}
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl drop-shadow-lg">
            {siteConfig.name}
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl font-light drop-shadow">
            {tr.tagline}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <a
            href="#menu"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand shadow-lg transition hover:bg-brand-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {tr.cta_menu}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </a>
          <a
            href={siteConfig.pedidosYa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand shadow-lg transition hover:bg-brand-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {tr.cta_order}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden
            >
              <path d="M7 17 17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
