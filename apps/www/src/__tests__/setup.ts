/// <reference types="vitest/globals" />
import '@testing-library/jest-dom/vitest';

class ResizeObserverMock implements ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

vi.stubGlobal('ResizeObserver', ResizeObserverMock);
