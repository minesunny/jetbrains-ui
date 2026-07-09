// ---------------------------------------------------------------------------
// DeepPartial — recursive partial for locale overrides
// ---------------------------------------------------------------------------

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends string ? string : DeepPartial<T[P]>;
};

// ---------------------------------------------------------------------------
// Locale message shape
// ---------------------------------------------------------------------------

export interface JetBrainsLocaleMessages {
  dynamicTabs: {
    defaultTrigger: string;
    modified: string;
    unpinTab: string;
    closeTab: string;
    pinTabLabel: string;
    unpinTabLabel: string;
    addTab: string;
    close: string;
    closeLeftTabs: string;
    closeRightTabs: string;
    closeOthers: string;
  };
  dynamicTree: {
    loading: string;
    collapse: string;
    expand: string;
    add: string;
    refresh: string;
    clearChildren: string;
    delete: string;
  };
  tree: {
    collapse: string;
    expand: string;
  };
  alert: {
    doNotAskAgain: string;
  };
  codeEditor: {
    lineColumn: string;
    encoding: string;
    indentInfo: string;
  };
}

// ---------------------------------------------------------------------------
// Built-in locale code
// ---------------------------------------------------------------------------

export type JetBrainsBuiltinLocale = 'en' | 'zh-CN';
