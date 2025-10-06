// src/stores/storeBase.ts
type Listener = () => void;

export class StoreBase {
  private listeners = new Set<Listener>();

  protected emitChange() {
    for (const listener of this.listeners) {
      listener();
    }
  }

  subscribe = (listener: Listener) => {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  };
}
