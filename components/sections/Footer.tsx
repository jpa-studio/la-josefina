import Image from "next/image";
import { siteConfig } from "@/content/config";
import { t, type Lang } from "@/content/translations";

type Props = { lang: Lang };

export function Footer({ lang }: Props) {
  const tr = t[lang];

  const navItems = [
    { href: "#menu", label: tr.nav.menu },
    { href: "#locales", label: tr.nav.branches },
    { href: "#contacto", label: tr.nav.contact },
  ];

  return (
    <footer id="contacto" className="bg-brand-dark text-white scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src={siteConfig.logo}
                alt={siteConfig.name}
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover ring-2 ring-white/20"
              />
              <div>
                <p className="font-heading text-xl font-semibold">
                  {siteConfig.name}
                </p>
                <p className="text-sm text-white/70">{siteConfig.city}</p>
              </div>
            </div>
            <p className="text-sm text-white/70 max-w-sm">
              {siteConfig.tagline}. Clásicos uruguayos, recetas de siempre.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-base font-semibold text-white">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 mt-0.5 shrink-0 text-brand-softer"
                  aria-hidden
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                </svg>
                <a
                  href={siteConfig.phoneHref}
                  className="hover:text-white transition"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 mt-0.5 shrink-0 text-brand-softer"
                  aria-hidden
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  {siteConfig.instagramHandle}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 mt-0.5 shrink-0 text-brand-softer"
                  aria-hidden
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
                <a
                  href={siteConfig.pedidosYa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  {tr.footer.order}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-base font-semibold text-white">
              {lang === 'es' ? 'Navegación' : 'Navigation'}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-white transition">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 {siteConfig.name}. {tr.footer.rights}</p>
          <p className="text-white/50">Colonia del Sacramento, Uruguay</p>
        </div>
      </div>
    </footer>
  );
}
