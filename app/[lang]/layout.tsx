import { notFound } from 'next/navigation';

const validLocales = ['es', 'en'];

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
