import Image from "next/image";
import { siteConfig } from "@/content/config";
import { formatPrice, type MenuItem } from "@/content/menu";
import { t, type Lang } from "@/content/translations";

type Props = {
  item: MenuItem;
  lang: Lang;
};

export function MenuCard({ item, lang }: Props) {
  const tr = t[lang].menu;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl bg-gradient-to-br from-brand via-brand-light to-brand-softer">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            aria-hidden
            className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(15,46,34,0.45),transparent_60%)]"
          />
        )}
        {item.bestseller ? (
          <span className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand shadow-sm">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-3.5 w-3.5"
              aria-hidden
            >
              <path d="M12 2l2.39 6.96H22l-6.19 4.5 2.36 7.04L12 16.9l-6.17 3.6 2.36-7.04L2 8.96h7.61z" />
            </svg>
            {tr.bestseller}
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-foreground">
            {item.name}
          </h3>
          <span className="shrink-0 rounded-md bg-secondary px-2.5 py-1 text-sm font-bold text-brand">
            {formatPrice(item.price)}
          </span>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>

        <a
          href={siteConfig.pedidosYa}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-light"
        >
          {tr.order_btn}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 transition group-hover:translate-x-0.5"
            aria-hidden
          >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </a>
      </div>
    </article>
  );
}
