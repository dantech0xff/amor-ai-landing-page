'use client';

import { useEffect } from 'react';
import { useTheme } from '@/lib/preferences';

/**
 * Đồng bộ theme đã chọn lên thẻ <html> sau mỗi lần đổi.
 * Ngôn ngữ không nằm ở đây: nó do route quyết định và đã render sẵn ở server.
 */
export function PreferenceSync() {
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === 'dusk') document.documentElement.dataset.theme = 'dusk';
    else delete document.documentElement.dataset.theme;
  }, [theme]);

  return null;
}
