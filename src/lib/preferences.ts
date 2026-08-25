'use client';

import { useSyncExternalStore } from 'react';
import { createPersistedStore } from './persisted-store';

export type Theme = 'paper' | 'dusk';

const isTheme = (value: string): value is Theme =>
  value === 'paper' || value === 'dusk';

const themeStore = createPersistedStore<Theme>('amor-theme', 'paper', isTheme);

export function useTheme() {
  const theme = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.getSnapshot,
    themeStore.getServerSnapshot,
  );
  return { theme, setTheme: themeStore.set };
}
