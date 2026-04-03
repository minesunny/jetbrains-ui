export const LOCALES = ['en', 'zh'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';
export const LOCALE_COOKIE = 'jb_locale';

export type I18nMessages = {
  nav: {
    docs: string;
    components: string;
    icons: string;
    search: string;
    language: string;
    english: string;
    chinese: string;
  };
  menu: {
    menu: string;
  };
  guide: {
    title: string;
    introduction: string;
    installation: string;
    colors: string;
    typography: string;
    spacing: string;
    accessibility: string;
    mcp: string;
    troubleshooting: string;
    changelog: string;
    roadmap: string;
  };
  docs: {
    previous: string;
    next: string;
    goTo: string;
    noPrevious: string;
    noNext: string;
    components: string;
    primitives: string;
  };
  pageActions: {
    copyMarkdown: string;
    open: string;
    openInGitHub: string;
    openInChatGPT: string;
    openInClaude: string;
    openInT3Chat: string;
  };
};

const MESSAGES: Record<Locale, I18nMessages> = {
  en: {
    nav: {
      docs: 'Docs',
      components: 'Components',
      icons: 'Icons',
      search: 'Search...',
      language: 'Language',
      english: 'English',
      chinese: 'Chinese',
    },
    menu: {
      menu: 'Menu',
    },
    guide: {
      title: 'Guide',
      introduction: 'Introduction',
      installation: 'Installation',
      colors: 'Colors',
      typography: 'Typography',
      spacing: 'Spacing',
      accessibility: 'Accessibility',
      mcp: 'MCP',
      troubleshooting: 'Troubleshooting',
      changelog: 'Changelog',
      roadmap: 'Roadmap',
    },
    docs: {
      previous: 'Previous',
      next: 'Next',
      goTo: 'Go to {name}',
      noPrevious: 'No previous page',
      noNext: 'No next page',
      components: 'Components',
      primitives: 'Primitives',
    },
    pageActions: {
      copyMarkdown: 'Copy Markdown',
      open: 'Open',
      openInGitHub: 'Open in GitHub',
      openInChatGPT: 'Open in ChatGPT',
      openInClaude: 'Open in Claude',
      openInT3Chat: 'Open in T3 Chat',
    },
  },
  zh: {
    nav: {
      docs: '文档',
      components: '组件',
      icons: '图标',
      search: '搜索...',
      language: '语言',
      english: 'English',
      chinese: '中文',
    },
    menu: {
      menu: '菜单',
    },
    guide: {
      title: '指南',
      introduction: '介绍',
      installation: '安装',
      colors: '颜色',
      typography: '排版',
      spacing: '间距',
      accessibility: '无障碍',
      mcp: 'MCP',
      troubleshooting: '故障排查',
      changelog: '更新日志',
      roadmap: '路线图',
    },
    docs: {
      previous: '上一页',
      next: '下一页',
      goTo: '前往 {name}',
      noPrevious: '没有上一页',
      noNext: '没有下一页',
      components: '组件',
      primitives: '基础组件',
    },
    pageActions: {
      copyMarkdown: '复制 Markdown',
      open: '打开',
      openInGitHub: '在 GitHub 打开',
      openInChatGPT: '在 ChatGPT 打开',
      openInClaude: '在 Claude 打开',
      openInT3Chat: '在 T3 Chat 打开',
    },
  },
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && LOCALES.includes(value as Locale);
}

export function getMessages(locale: Locale): I18nMessages {
  return MESSAGES[locale];
}

export function formatMessage(
  template: string,
  values: Record<string, string>,
): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? '');
}
