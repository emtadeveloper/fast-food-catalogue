let count = 0;

const listeners = new Set();

export const counterStore = {
  increment() {
    count++;
    listeners.forEach((listeners) => listeners());
  },
  decrement() {
    count--;
    listeners.forEach((listeners) => listeners());
  },
  getCount() {
    return count;
  },
  subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
};
