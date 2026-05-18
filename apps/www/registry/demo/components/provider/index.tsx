'use client';

import { useState } from 'react';

import {
  JetBrainsUIProvider,
  useJetBrainsLocale,
} from '@/registry/components/provider';
import {
  Alert,
  AlertContent,
  AlertHeader,
  AlertAction,
  AlertCancel,
} from '@/registry/components/alert';
import { Button } from '@/registry/components/button';

function LocaleDisplay() {
  const { locale, t } = useJetBrainsLocale();

  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-6">
        Current locale: <code className="font-mono">{locale}</code>
      </div>
      <div className="space-y-1 text-sm">
        <p>
          <strong>dynamicTabs.close:</strong> {t('dynamicTabs.close')}
        </p>
        <p>
          <strong>dynamicTabs.addTab:</strong> {t('dynamicTabs.addTab')}
        </p>
        <p>
          <strong>dynamicTree.expand:</strong>{' '}
          {t('dynamicTree.expand', { label: 'Folder' })}
        </p>
        <p>
          <strong>alert.doNotAskAgain:</strong> {t('alert.doNotAskAgain')}
        </p>
        <p>
          <strong>codeEditor.lineColumn:</strong>{' '}
          {t('codeEditor.lineColumn', { line: 42, column: 7 })}
        </p>
      </div>
      <Alert>
        <AlertContent>
          <AlertHeader>{t('alert.doNotAskAgain')}</AlertHeader>
          <AlertCancel>{t('dynamicTabs.close')}</AlertCancel>
          <AlertAction>OK</AlertAction>
        </AlertContent>
      </Alert>
    </div>
  );
}

export default function ProviderDemo() {
  const [locale, setLocale] = useState<'en' | 'zh-CN'>('en');
  const [useCustom, setUseCustom] = useState(false);

  return (
    <JetBrainsUIProvider
      locale={locale}
      messages={
        useCustom
          ? { dynamicTabs: { close: 'Shut', addTab: 'New Tab' } }
          : undefined
      }
    >
      <div className="space-y-4">
        <div className="flex gap-2">
          <Button
            variant={locale === 'en' ? 'primary' : 'secondary'}
            onClick={() => setLocale('en')}
          >
            English
          </Button>
          <Button
            variant={locale === 'zh-CN' ? 'primary' : 'secondary'}
            onClick={() => setLocale('zh-CN')}
          >
            中文
          </Button>
          <Button
            variant={useCustom ? 'primary' : 'secondary'}
            onClick={() => setUseCustom(!useCustom)}
          >
            Custom Override
          </Button>
        </div>
        <LocaleDisplay />
      </div>
    </JetBrainsUIProvider>
  );
}
