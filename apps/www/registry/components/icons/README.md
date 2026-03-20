# Icon 组件

基于 General.svg 的图标组件系统，支持 light/dark 两种主题模式。

## 功能特性

- ✅ 从单个 SVG sprite 文件加载所有图标
- ✅ 支持 light/dark 两种主题模式
- ✅ 可自定义大小和颜色
- ✅ TypeScript 类型支持
- ✅ 自动名称标准化（camelCase → kebab-case）
- ✅ 包含 ThemedIcon 组件用于动态主题切换

## 文件结构

```
registry/components/icons/
├── icon/
│   └── index.tsx          # Icon 和 ThemedIcon 组件
├── icon-names.ts          # 图标名称映射
└── README.md              # 本文档

public/icons/
└── general.svg            # 图标 sprite 文件（自动生成）

scripts/
└── extract-icons.js       # SVG 转换脚本
```

## 使用方法

### 1. 基础用法

```tsx
import { Icon } from '@/registry/components/icons/icon';

// 默认 light 主题，16px
<Icon name="feedback" />

// 指定主题和大小
<Icon name="graph-ql" theme="dark" size={20} />

// 自定义颜色
<Icon name="add" className="text-blue-500" />
```

### 2. 动态主题切换

```tsx
import { Icon } from '@/registry/components/icons/icon';

function MyComponent() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <Icon
      name="feedback"
      theme={theme === 'dark' ? 'dark' : 'light'}
      size={24}
    />
  );
}
```

### 3. 使用 ThemedIcon 组件

```tsx
import { ThemedIcon } from '@/registry/components/icons/icon';

function MyComponent() {
  const currentTheme = useTheme(); // 你自己的主题 hook

  return (
    <ThemedIcon
      name="feedback"
      currentTheme={currentTheme}
      size={32}
    />
  );
}
```

## API 参考

### Icon Props

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `name` | `string` | - | 图标名称（会自动转换为 kebab-case） |
| `theme` | `'light' \| 'dark'` | `'light'` | 主题模式 |
| `size` | `number` | `16` | 图标大小（像素） |
| `className` | `string` | - | 自定义 CSS 类名 |

### ThemedIcon Props

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `name` | `string` | - | 图标名称 |
| `currentTheme` | `'light' \| 'dark'` | - | 当前主题 |
| `size` | `number` | `16` | 图标大小 |
| `className` | `string` | - | 自定义 CSS 类名 |

## 可用图标

共有 **239 个图标变体**（77 个唯一图标），包括：

- `feedback` - 反馈图标
- `rhtml` - R HTML 图标
- `graph-ql` - GraphQL 图标
- `bean-validator-tool-window` - Bean Validator 工具窗口
- 等等...

运行 `node scripts/extract-icons.js` 可以查看完整的图标列表。

## 添加新图标

### 方法 1：从 Figma 导出

1. 在 Figma 中导出图标为 SVG
2. 将 SVG 添加到 `General.svg` 文件中
3. 运行转换脚本：
   ```bash
   node scripts/extract-icons.js
   ```

### 方法 2：手动添加到 sprite

直接编辑 `public/icons/general.svg`，添加新的 `<symbol>` 元素：

```xml
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <!-- 现有图标... -->

  <!-- 新图标 -->
  <symbol id="icon-my-icon-light" viewBox="0 0 88 44">
    <!-- SVG 内容 -->
  </symbol>

  <symbol id="icon-my-icon-dark" viewBox="0 0 88 44">
    <!-- SVG 内容 -->
  </symbol>
</svg>
```

## 转换 General.svg

如果你有新的 `General.svg` 文件，可以使用转换脚本：

```bash
# 将 General.svg 放在项目根目录
node scripts/extract-icons.js
```

这会：
1. 解析 `General.svg`
2. 提取所有图标及其 light/dark 变体
3. 生成 `public/icons/general.svg` sprite 文件
4. 更新 `icon-names.ts` 映射文件

## 样式定制

### Tailwind CSS 类

```tsx
// 大小
<Icon name="feedback" size={20} className="w-5 h-5" />

// 颜色
<Icon name="feedback" className="text-blue-500 dark:text-blue-400" />

// 旋转
<Icon name="feedback" className="rotate-90" />

// 动画
<Icon name="feedback" className="hover:scale-110 transition-transform" />
```

### 内联样式

```tsx
<Icon
  name="feedback"
  style={{
    color: 'var(--my-color)',
    opacity: 0.8,
  }}
/>
```

## 性能优化

- ✅ SVG sprite 技术：所有图标共享同一个 SVG 文件
- ✅ 按需加载：只渲染使用的图标
- ✅ 无额外的网络请求（除了 sprite 文件）
- ✅ 支持服务端渲染

## 浏览器支持

- Chrome / Edge: ✅ 完全支持
- Firefox: ✅ 完全支持
- Safari: ✅ 完全支持
- IE11: ❌ 不支持（需要 polyfill）

## 示例

查看 `apps/www/app/examples/icons/page.tsx` 获取完整的使用示例。

## 故障排除

### 图标不显示

1. 检查 `public/icons/general.svg` 是否存在
2. 检查图标名称是否正确（会自动转换为 kebab-case）
3. 打开浏览器开发者工具检查网络请求

### 主题不切换

1. 确保正确传递 `theme` 属性
2. 检查 light/dark 版本的图标是否都存在于 sprite 文件中

### 图标模糊

1. 确保 `viewBox` 与图标实际尺寸匹配
2. 使用整数倍的大小（16, 20, 24, 32 等）
