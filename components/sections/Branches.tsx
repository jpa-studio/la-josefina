import { BranchCard } from "@/components/BranchCard";
import { branches } from "@/content/config";
import { t, type Lang } from "@/content/translations";

type Props = { lang: Lang };

export function Branches({ lang }: Props) {
  const tr = t[lang].branches;

  return (
    <section id="locales" className="bg-white py-20 sm:py-24 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-light">
            {tr.label}
          </span>
          <h2 className="mt-2 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brand">
            {tr.title}
          </h2>
          <p className="mt-3 max-w-2xl text-base sm:text-lg text-muted-foreground">
            {tr.description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {branches.map((branch) => (
            <BranchCard key={branch.id} branch={branch} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}
