// src/utils/localStorage.ts
export const loadState = <T>(key: string): T | undefined => {
  try {
    if (typeof window === 'undefined') return undefined;
    const s = localStorage.getItem(key);
    if (!s) return undefined;
    return JSON.parse(s) as T;
  } catch (e) {
    console.warn('loadState error', e);
    return undefined;
  }
};

export const saveState = (key: string, state: unknown): void => {
  try {
    if (typeof window === 'undefined') return;
    localStorage.setItem(key, JSON.stringify(state));
  } catch (e) {
    console.warn('saveState error', e);
  }
};
