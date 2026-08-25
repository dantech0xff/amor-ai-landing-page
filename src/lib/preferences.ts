'use client';

import { useSyncExternalStore } from 'react';
import { createPersistedStore } from './persisted-store';
import type { Lang } from './site';

export type Theme = 'paper' | 'dusk';

const isLang = (value: string): value is Lang =>
  value === 'vi' || value === 'en';

const isTheme = (value: string): value is Theme =>
  value === 'paper' || value === 'dusk';

const langStore = createPersistedStore<Lang>('amor-lang', 'vi', isLang);
const themeStore = createPersistedStore<Theme>('amor-theme', 'paper', isTheme);

export function useLang() {
  const lang = useSyncExternalStore(
    langStore.subscribe,
    langStore.getSnapshot,
    langStore.getServerSnapshot,
  );
  return { lang, setLang: langStore.set };
}

export function useTheme() {
  const theme = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.getSnapshot,
    themeStore.getServerSnapshot,
  );
  return { theme, setTheme: themeStore.set };
}
