import { notFound } from 'next/navigation';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Menu } from '@/components/sections/Menu';
import { Gallery } from '@/components/sections/Gallery';
import { Branches } from '@/components/sections/Branches';
import { OrderCTA } from '@/components/sections/OrderCTA';
import { Footer } from '@/components/sections/Footer';
import type { Lang } from '@/content/translations';

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang !== 'es' && lang !== 'en') notFound();
  const l = lang as Lang;

  return (
    <>
      <Navbar lang={l} />
      <main className="flex-1">
        <Hero lang={l} />
        <Menu lang={l} />
        <Gallery lang={l} />
        <Branches lang={l} />
        <OrderCTA lang={l} />
      </main>
      <Footer lang={l} />
    </>
  );
}
