"use client";

import { useSyncExternalStore } from "react";

export function useStore<T>(store: {
  subscribe: (cb: () => void) => () => void;
  getState: () => T;
}) {
  return useSyncExternalStore(store.subscribe, store.getState);
}
