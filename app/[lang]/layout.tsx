import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

const validLocales = ['es', 'en'];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: 'Chivitería La Josefina',
    icons: {
      icon: '/icon.png',
      shortcut: '/icon.png',
      apple: '/apple-touch-icon.png',
    },
  };
}

export function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!validLocales.includes(lang)) notFound();
  return <>{children}</>;
}
