"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/config";
import { t, type Lang } from "@/content/translations";

type Props = { lang: Lang };

export function Navbar({ lang }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const tr = t[lang].nav;

  // Strip the locale prefix to get the path segment after /es or /en
  const pathSuffix = pathname.slice(3); // "/es" → "", "/es/other" → "/other"

  function switchTo(target: Lang) {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    window.location.href = `/${target}${pathSuffix}${hash}`;
  }

  const navItems = [
    { href: "#menu", label: tr.menu },
    { href: "#locales", label: tr.branches },
    { href: "#contacto", label: tr.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled
          ? "bg-white/95 backdrop-blur border-b border-border shadow-sm"
          : "bg-white/80 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-light rounded-md"
        >
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={44}
            height={44}
            priority
            className="h-11 w-11 rounded-full object-cover ring-2 ring-brand/10"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-heading text-base sm:text-lg font-semibold text-brand">
              {siteConfig.name}
            </span>
            <span className="hidden sm:inline text-[11px] uppercase tracking-wider text-muted-foreground">
              Colonia del Sacramento
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-brand transition"
            >
              {item.label}
            </a>
          ))}

          {/* Language switcher */}
          <div className="ml-2 flex items-center gap-0.5 text-sm font-semibold">
            <button
              type="button"
              onClick={() => switchTo("es")}
              className={`rounded px-1.5 py-1 transition ${
                lang === "es"
                  ? "text-brand"
                  : "text-foreground/40 hover:text-brand"
              }`}
              aria-label="Español"
              aria-current={lang === "es" ? "true" : undefined}
            >
              ES
            </button>
            <span className="text-border select-none">/</span>
            <button
              type="button"
              onClick={() => switchTo("en")}
              className={`rounded px-1.5 py-1 transition ${
                lang === "en"
                  ? "text-brand"
                  : "text-foreground/40 hover:text-brand"
              }`}
              aria-label="English"
              aria-current={lang === "en" ? "true" : undefined}
            >
              EN
            </button>
          </div>

          <a
            href={siteConfig.pedidosYa}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            {tr.order}
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-brand hover:bg-secondary"
        >
          {open ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden
            >
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open ? (
        <div className="md:hidden border-t border-border bg-white">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-medium text-foreground/90 hover:bg-secondary hover:text-brand"
              >
                {item.label}
              </a>
            ))}

            {/* Language switcher — mobile */}
            <div className="flex items-center gap-1 px-3 py-2.5 text-sm font-semibold">
              <button
                type="button"
                onClick={() => { setOpen(false); switchTo("es"); }}
                className={`rounded px-2 py-1 transition ${
                  lang === "es"
                    ? "bg-secondary text-brand"
                    : "text-foreground/50 hover:text-brand"
                }`}
              >
                ES
              </button>
              <span className="text-border select-none">/</span>
              <button
                type="button"
                onClick={() => { setOpen(false); switchTo("en"); }}
                className={`rounded px-2 py-1 transition ${
                  lang === "en"
                    ? "bg-secondary text-brand"
                    : "text-foreground/50 hover:text-brand"
                }`}
              >
                EN
              </button>
            </div>

            <a
              href={siteConfig.pedidosYa}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center rounded-lg bg-brand px-4 py-2.5 text-base font-semibold text-white"
            >
              {tr.order}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
