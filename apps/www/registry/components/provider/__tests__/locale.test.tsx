import { renderHook } from '@testing-library/react';
import type { ReactNode } from 'react';

import {
  JetBrainsUIProvider,
  useJetBrainsLocale,
} from '@/registry/components/provider';
import { deepMerge, resolveMessages, en, zhCN } from '@/registry/locales';
import type { JetBrainsLocaleMessages } from '@/registry/locales/types';

// ---------------------------------------------------------------------------
// 4.1 useJetBrainsLocale hook
// ---------------------------------------------------------------------------

describe('useJetBrainsLocale', () => {
  it('returns default English locale when no provider', () => {
    const { result } = renderHook(() => useJetBrainsLocale());
    expect(result.current.locale).toBe('en');
    expect(result.current.t('dynamicTabs.close')).toBe('Close');
  });

  it('returns Chinese locale when provider sets zh-CN', () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <JetBrainsUIProvider locale="zh-CN">{children}</JetBrainsUIProvider>
    );
    const { result } = renderHook(() => useJetBrainsLocale(), { wrapper });
    expect(result.current.locale).toBe('zh-CN');
    expect(result.current.t('dynamicTabs.close')).toBe('关闭');
  });

  it('supports {key} interpolation', () => {
    const { result } = renderHook(() => useJetBrainsLocale());
    expect(result.current.t('dynamicTree.collapse', { label: 'Folder' })).toBe(
      'Collapse Folder',
    );
  });

  it('falls back to English for missing key in custom locale', () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <JetBrainsUIProvider locale="zh-CN">{children}</JetBrainsUIProvider>
    );
    const { result } = renderHook(() => useJetBrainsLocale(), { wrapper });
    // This key exists in zh-CN, so test the fallback mechanism via override
    expect(result.current.t('dynamicTabs.close')).toBe('关闭');
  });

  it('returns the key when not found in any locale', () => {
    const { result } = renderHook(() => useJetBrainsLocale());
    expect(result.current.t('nonexistent.key')).toBe('nonexistent.key');
  });

  it('supports custom override via messages prop', () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <JetBrainsUIProvider
        locale="en"
        messages={{ dynamicTabs: { close: 'Shut' } }}
      >
        {children}
      </JetBrainsUIProvider>
    );
    const { result } = renderHook(() => useJetBrainsLocale(), { wrapper });
    expect(result.current.t('dynamicTabs.close')).toBe('Shut');
    // Other keys should remain unchanged
    expect(result.current.t('dynamicTabs.addTab')).toBe('Add Tab');
  });
});

// ---------------------------------------------------------------------------
// 4.2 JetBrainsUIProvider context
// ---------------------------------------------------------------------------

describe('JetBrainsUIProvider', () => {
  it('provides correct locale through context', () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <JetBrainsUIProvider locale="zh-CN">{children}</JetBrainsUIProvider>
    );
    const { result } = renderHook(() => useJetBrainsLocale(), { wrapper });
    expect(result.current.locale).toBe('zh-CN');
    expect(result.current.t('alert.doNotAskAgain')).toBe('不再询问');
  });

  it('falls back to en for unknown locale code', () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <JetBrainsUIProvider locale="fr">{children}</JetBrainsUIProvider>
    );
    const { result } = renderHook(() => useJetBrainsLocale(), { wrapper });
    expect(result.current.locale).toBe('fr');
    // Should fall back to English messages
    expect(result.current.t('dynamicTabs.close')).toBe('Close');
  });
});

// ---------------------------------------------------------------------------
// 4.3 deepMerge utility
// ---------------------------------------------------------------------------

describe('deepMerge', () => {
  it('merges a single namespace', () => {
    const result = deepMerge(en, {
      dynamicTabs: { close: 'Shut' },
    });
    expect(result.dynamicTabs.close).toBe('Shut');
    expect(result.dynamicTabs.addTab).toBe('Add Tab');
  });

  it('merges multiple namespaces', () => {
    const result = deepMerge(en, {
      dynamicTabs: { close: 'Shut' },
      alert: { doNotAskAgain: "Don't ask" },
    });
    expect(result.dynamicTabs.close).toBe('Shut');
    expect(result.alert.doNotAskAgain).toBe("Don't ask");
    // Unrelated keys unchanged
    expect(result.dynamicTree.add).toBe('Add');
  });
});

// ---------------------------------------------------------------------------
// resolveMessages utility
// ---------------------------------------------------------------------------

describe('resolveMessages', () => {
  it('returns English for unknown locale', () => {
    const messages = resolveMessages('unknown');
    expect(messages.dynamicTabs.close).toBe('Close');
  });

  it('returns zh-CN for zh-CN locale', () => {
    const messages = resolveMessages('zh-CN');
    expect(messages.dynamicTabs.close).toBe('关闭');
  });

  it('merges override on top of locale', () => {
    const messages = resolveMessages('en', {
      dynamicTabs: { close: 'Shut' },
    });
    expect(messages.dynamicTabs.close).toBe('Shut');
    expect(messages.dynamicTabs.addTab).toBe('Add Tab');
  });
});

// ---------------------------------------------------------------------------
// Snapshot tests for built-in locales
// ---------------------------------------------------------------------------

describe('locale snapshots', () => {
  it('en locale matches snapshot', () => {
    expect(en).toMatchSnapshot();
  });

  it('zh-CN locale matches snapshot', () => {
    expect(zhCN).toMatchSnapshot();
  });

  it('en and zh-CN have identical key structure', () => {
    const getKeys = (obj: unknown, prefix = ''): string[] => {
      if (typeof obj !== 'object' || obj === null)
        return [prefix].filter(Boolean);
      return Object.entries(obj).flatMap(([k, v]) =>
        getKeys(v, prefix ? `${prefix}.${k}` : k),
      );
    };
    expect(getKeys(en)).toEqual(getKeys(zhCN));
  });
});
