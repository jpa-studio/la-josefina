import { siteConfig } from "@/content/config";
import { t, type Lang } from "@/content/translations";

type Props = { lang: Lang };

export function OrderCTA({ lang }: Props) {
  const tr = t[lang].cta;

  return (
    <section className="relative overflow-hidden bg-brand text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_15%_30%,rgba(82,183,136,0.55),transparent_50%),radial-gradient(circle_at_90%_70%,rgba(149,213,178,0.3),transparent_55%)]"
      />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 py-16 text-center sm:px-6 sm:py-20">
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl">
            {tr.title}
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-xl">
            {tr.subtitle}
          </p>
        </div>

        <a
          href={siteConfig.pedidosYa}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-brand shadow-2xl transition hover:bg-brand-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {tr.btn}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 transition group-hover:translate-x-1"
            aria-hidden
          >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
