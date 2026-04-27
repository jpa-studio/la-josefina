"use client";

import { useState } from "react";
import { MenuCard } from "@/components/MenuCard";
import { menu, type MenuCategoryId } from "@/content/menu";
import { t, type Lang } from "@/content/translations";

type Props = { lang: Lang };

export function Menu({ lang }: Props) {
  const [active, setActive] = useState<MenuCategoryId>(menu[0].id);
  const current = menu.find((c) => c.id === active) ?? menu[0];
  const tr = t[lang].menu;

  return (
    <section id="menu" className="bg-brand-cream py-20 sm:py-24 scroll-mt-20">
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

        <div
          role="tablist"
          aria-label={tr.title}
          className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {menu.map((cat) => {
            const isActive = cat.id === active;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(cat.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-brand text-white shadow-sm"
                    : "bg-white text-foreground/80 hover:bg-secondary hover:text-brand border border-border"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {current.items.map((item) => (
            <MenuCard key={item.id} item={item} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}
