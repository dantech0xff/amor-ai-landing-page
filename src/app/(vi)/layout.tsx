import type { Metadata } from 'next';
import { RootShell } from '../root-shell';
import { rootMetadata } from '@/lib/seo';

export const metadata: Metadata = rootMetadata();

export default function ViLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <RootShell lang="vi">{children}</RootShell>;
}
