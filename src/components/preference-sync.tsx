'use client';

import { useEffect } from 'react';
import { useLang, useTheme } from '@/lib/preferences';

/** Đồng bộ lựa chọn ngôn ngữ và theme lên thẻ <html>. */
export function PreferenceSync() {
  const { lang } = useLang();
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (theme === 'dusk') document.documentElement.dataset.theme = 'dusk';
    else delete document.documentElement.dataset.theme;
  }, [theme]);

  return null;
}
