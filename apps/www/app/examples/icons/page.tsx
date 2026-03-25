'use client';

import { SVG } from '@/registry/components/icons';
import { useTheme } from 'next-themes';

const examples = [
  {
    label: 'Breakpoint',
    name: 'breakpoints/breakpoint',
  },
  {
    label: 'Feedback',
    name: 'general/tool-windows/feedback',
  },
  {
    label: 'RHTML',
    name: 'plugins/ruby/rhtml',
  },
  {
    label: 'Tool Window Bean Validator',
    name: 'general/tool-windows/tool-window-bean-validator',
  },
] as const;

export default function IconsExample() {
  const { resolvedTheme, setTheme } = useTheme();
  const theme = resolvedTheme === 'dark' ? 'dark' : 'light';

  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="mb-4 text-3xl font-bold">SVG Sprite 示例</h1>
        <p className="text-muted-foreground">
          使用完整图标路径渲染图标，例如{' '}
          <code>general/tool-windows/feedback</code>。
        </p>
      </div>

      <div className="flex items-center gap-4 rounded-lg border p-4">
        <span className="text-sm font-medium">主题:</span>
        <button
          onClick={() => setTheme('light')}
          className={`rounded px-4 py-2 ${
            theme === 'light'
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary'
          }`}
        >
          Light
        </button>
        <button
          onClick={() => setTheme('dark')}
          className={`rounded px-4 py-2 ${
            theme === 'dark'
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary'
          }`}
        >
          Dark
        </button>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">基础用法</h2>

        <div className="flex flex-wrap gap-4 rounded-lg border p-4">
          {examples.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <SVG name={item.name} />
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">不同尺寸</h2>

        <div className="flex items-end gap-4 rounded-lg border p-4">
          <div className="flex flex-col items-center gap-2">
            <SVG name="breakpoints/breakpoint" width="16px" height="16px" />
            <span className="text-xs text-muted-foreground">16px</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SVG name="breakpoints/breakpoint" width="20px" height="20px" />
            <span className="text-xs text-muted-foreground">20px</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SVG name="breakpoints/breakpoint" width="24px" height="24px" />
            <span className="text-xs text-muted-foreground">24px</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <SVG name="breakpoints/breakpoint" width="32px" height="32px" />
            <span className="text-xs text-muted-foreground">32px</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">代码示例</h2>

        <div className="rounded-lg bg-muted p-4">
          <pre className="text-sm">
            <code>{`import { SVG } from '@/registry/components/icons';

<SVG name="breakpoints/breakpoint" />
<SVG name="general/tool-windows/feedback" width="16px" height="16px" />
<SVG name="plugins/ruby/rhtml" className="text-blue-500" />`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
