'use client';

import { Icon, ThemedIcon } from '@/registry/components/icons/icon';
import { useState } from 'react';

export default function IconsExample() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">Icon 组件示例</h1>
        <p className="text-muted-foreground">
          从 General.svg sprite 中渲染图标，支持 light/dark 两种主题模式。
        </p>
      </div>

      {/* 主题切换器 */}
      <div className="flex items-center gap-4 p-4 border rounded-lg">
        <span className="text-sm font-medium">主题:</span>
        <button
          onClick={() => setTheme('light')}
          className={`px-4 py-2 rounded ${
            theme === 'light'
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary'
          }`}
        >
          Light
        </button>
        <button
          onClick={() => setTheme('dark')}
          className={`px-4 py-2 rounded ${
            theme === 'dark'
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary'
          }`}
        >
          Dark
        </button>
      </div>

      {/* 基础示例 */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">基础用法</h2>

        <div className="flex flex-wrap gap-4 p-4 border rounded-lg">
          <div className="flex items-center gap-2">
            <Icon name="feedback" theme={theme} />
            <span className="text-sm">Feedback</span>
          </div>

          <div className="flex items-center gap-2">
            <Icon name="rhtml" theme={theme} />
            <span className="text-sm">R HTML</span>
          </div>

          <div className="flex items-center gap-2">
            <Icon name="bean-validator-tool-window" theme={theme} />
            <span className="text-sm">Bean Validator</span>
          </div>
        </div>
      </div>

      {/* 不同大小 */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">不同大小</h2>

        <div className="flex items-end gap-4 p-4 border rounded-lg">
          <div className="flex flex-col items-center gap-2">
            <Icon name="feedback" theme={theme} size={16} />
            <span className="text-xs text-muted-foreground">16px</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Icon name="feedback" theme={theme} size={20} />
            <span className="text-xs text-muted-foreground">20px</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Icon name="feedback" theme={theme} size={24} />
            <span className="text-xs text-muted-foreground">24px</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Icon name="feedback" theme={theme} size={32} />
            <span className="text-xs text-muted-foreground">32px</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Icon name="feedback" theme={theme} size={48} />
            <span className="text-xs text-muted-foreground">48px</span>
          </div>
        </div>
      </div>

      {/* 自定义颜色 */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">自定义颜色</h2>

        <div className="flex flex-wrap gap-4 p-4 border rounded-lg">
          <div className="flex items-center gap-2">
            <Icon name="feedback" theme={theme} className="text-blue-500" />
            <span className="text-sm">Blue</span>
          </div>

          <div className="flex items-center gap-2">
            <Icon name="feedback" theme={theme} className="text-green-500" />
            <span className="text-sm">Green</span>
          </div>

          <div className="flex items-center gap-2">
            <Icon name="feedback" theme={theme} className="text-purple-500" />
            <span className="text-sm">Purple</span>
          </div>

          <div className="flex items-center gap-2">
            <Icon name="feedback" theme={theme} className="text-orange-500" />
            <span className="text-sm">Orange</span>
          </div>
        </div>
      </div>

      {/* ThemedIcon 示例 */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">ThemedIcon 组件</h2>

        <div className="p-4 border rounded-lg">
          <p className="text-sm text-muted-foreground mb-4">
            ThemedIcon 组件根据 currentTheme 属性自动选择合适的图标版本：
          </p>

          <div className="flex items-center gap-4">
            <ThemedIcon name="feedback" currentTheme={theme} size={32} />
            <span className="text-sm">当前主题: {theme}</span>
          </div>
        </div>
      </div>

      {/* 代码示例 */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">代码示例</h2>

        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <p className="text-sm font-mono mb-2">{'// 基础用法'}</p>
            <pre className="text-sm">
              <code>{`<Icon name="feedback" theme="light" />
<Icon name="rhtml" theme="dark" size={20} />
<Icon name="add" className="text-blue-500" />`}</code>
            </pre>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <p className="text-sm font-mono mb-2">{'// 使用主题变量'}</p>
            <pre className="text-sm">
              <code>{`<Icon
  name="feedback"
  theme={theme === 'dark' ? 'dark' : 'light'}
  size={24}
/>`}</code>
            </pre>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <p className="text-sm font-mono mb-2">
              {'// 使用 ThemedIcon 组件'}
            </p>
            <pre className="text-sm">
              <code>{`<ThemedIcon
  name="feedback"
  currentTheme={theme}
  size={32}
/>`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
