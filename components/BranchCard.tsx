import Image from "next/image";
import type { Branch } from "@/content/config";
import { t, type Lang } from "@/content/translations";

type Props = {
  branch: Branch;
  lang: Lang;
};

export function BranchCard({ branch, lang }: Props) {
  const tr = t[lang].branches;
  const query = encodeURIComponent(branch.address);
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${query}`;

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      {branch.image ? (
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-xl bg-muted">
          <Image
            src={branch.image}
            alt={branch.imageAlt ?? branch.name}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-2xl font-semibold text-brand">{branch.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {branch.address}
          </p>
        </div>

        <dl className="grid gap-3 text-sm">
          <div className="flex items-start gap-3">
            <span
              aria-hidden
              className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-brand"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
            </span>
            <div>
              <dt className="font-semibold text-foreground">{tr.hours}</dt>
              <dd className="text-muted-foreground">{branch.hours}</dd>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span
              aria-hidden
              className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-brand"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <div>
              <dt className="font-semibold text-foreground">{tr.phone}</dt>
              <dd>
                <a
                  href={branch.phoneHref}
                  className="text-muted-foreground hover:text-brand"
                >
                  {branch.phone}
                </a>
              </dd>
            </div>
          </div>
        </dl>

        <a
          href={directionsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg border border-brand px-4 py-2.5 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-light"
        >
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
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {tr.directions}
        </a>
      </div>
    </article>
  );
}
