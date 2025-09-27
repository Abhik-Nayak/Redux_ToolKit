// src/utils/localStorage.ts
export const loadState = <T>(key: string): T | undefined => {
  try {
    const serializedState = localStorage.getItem(key);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState) as T;
  } catch (e) {
    console.warn('Error loading state', e);
    return undefined;
  }
};

export const saveState = (key: string, state: unknown): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (e) {
    console.warn('Error saving state', e);
  }
};
