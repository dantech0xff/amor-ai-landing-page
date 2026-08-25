/**
 * Kho giá trị nhỏ được lưu trong localStorage, đọc qua useSyncExternalStore.
 * Server luôn trả về giá trị mặc định nên HTML render ra khớp với lần hydrate đầu.
 */
export type PersistedStore<T extends string> = {
  subscribe: (listener: () => void) => () => void;
  getSnapshot: () => T;
  getServerSnapshot: () => T;
  set: (value: T) => void;
};

export function createPersistedStore<T extends string>(
  key: string,
  fallback: T,
  isValid: (value: string) => value is T,
): PersistedStore<T> {
  const listeners = new Set<() => void>();
  let cached: T | null = null;

  function getSnapshot(): T {
    if (cached !== null) return cached;
    try {
      const raw = localStorage.getItem(key);
      cached = raw !== null && isValid(raw) ? raw : fallback;
    } catch {
      cached = fallback;
    }
    return cached;
  }

  return {
    subscribe(listener) {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    getSnapshot,
    getServerSnapshot: () => fallback,
    set(value) {
      try {
        localStorage.setItem(key, value);
      } catch {
        /* localStorage bị chặn — vẫn đổi trong phiên hiện tại */
      }
      cached = value;
      for (const listener of listeners) listener();
    },
  };
}
