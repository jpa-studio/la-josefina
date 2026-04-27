"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { t, type Lang } from "@/content/translations";

type GalleryImage = {
  src: string;
  alt: string;
};

const images: GalleryImage[] = [
  {
    src: "/images/dishes/chivito-josefina.jpg",
    alt: "Chivito La Josefina con patente de Colonia de fondo",
  },
  {
    src: "/images/dishes/chivito-estandar.jpg",
    alt: "Chivito Estándar servido en pan sésamo",
  },
  {
    src: "/images/dishes/chivito-criollo.jpg",
    alt: "Chivito Criollo recién preparado",
  },
  {
    src: "/images/dishes/milanesa-napolitana.jpg",
    alt: "Milanesa Napolitana con muzzarella y jamón",
  },
  {
    src: "/images/dishes/hamburguesa-doble.jpg",
    alt: "Hamburguesa Doble con cheddar y panceta",
  },
  {
    src: "/images/dishes/tabla-milanesas.jpg",
    alt: "Tabla de milanesas para compartir",
  },
];

type Props = { lang: Lang };

export function Gallery({ lang }: Props) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tr = t[lang].gallery;

  const advance = useCallback((dir: 1 | -1) => {
    setCurrent((c) => (c + dir + images.length) % images.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timer.current = setTimeout(() => advance(1), 3000);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [current, paused, advance]);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-light">
            {tr.label}
          </span>
          <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-bold text-brand">
            {tr.title}
          </h2>
        </div>

        <div
          className="relative mt-10 overflow-hidden rounded-2xl aspect-[16/9] bg-muted"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-roledescription="carrusel"
          aria-label={tr.title}
        >
          {images.map((img, i) => (
            <div
              key={img.src}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === current ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              aria-hidden={i !== current}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1200px) 1152px, 100vw"
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}

          <button
            type="button"
            onClick={() => advance(-1)}
            aria-label="Imagen anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => advance(1)}
            aria-label="Siguiente imagen"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Ir a imagen ${i + 1}`}
                aria-current={i === current ? "true" : undefined}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "h-2 w-6 bg-white"
                    : "h-2 w-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
