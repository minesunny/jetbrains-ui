import { en } from './en';
import { zhCN } from './zh-CN';
import type { DeepPartial, JetBrainsLocaleMessages } from './types';

export { en } from './en';
export { zhCN } from './zh-CN';
export type {
  DeepPartial,
  JetBrainsLocaleMessages,
  JetBrainsBuiltinLocale,
} from './types';

// ---------------------------------------------------------------------------
// Built-in locale map
// ---------------------------------------------------------------------------

export const builtinLocales: Record<string, JetBrainsLocaleMessages> = {
  en,
  'zh-CN': zhCN,
};

// ---------------------------------------------------------------------------
// deepMerge — shallow-merge each namespace
// ---------------------------------------------------------------------------

export function deepMerge(
  base: JetBrainsLocaleMessages,
  override: DeepPartial<JetBrainsLocaleMessages>,
): JetBrainsLocaleMessages {
  const result = { ...base } as JetBrainsLocaleMessages;
  for (const ns of Object.keys(override) as Array<
    keyof JetBrainsLocaleMessages
  >) {
    const patch = override[ns];
    if (patch && typeof patch === 'object') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (result as any)[ns] = {
        ...base[ns],
        ...patch,
      };
    }
  }
  return result;
}

// ---------------------------------------------------------------------------
// resolveMessages
// ---------------------------------------------------------------------------

export function resolveMessages(
  locale: string,
  override?: DeepPartial<JetBrainsLocaleMessages>,
): JetBrainsLocaleMessages {
  const base = builtinLocales[locale] ?? builtinLocales.en;
  return override ? deepMerge(base, override) : base;
}
