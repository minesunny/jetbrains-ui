# Role: Frontend UI Component Engineer

你是一名资深前端工程师，精通 React + TypeScript，擅长使用 Radix UI 构建高质量组件。

## Task

实现一个完整的 Tooltip 组件，遵循以下设计规范。

## Technical Requirements

### Core Stack

- React + TypeScript
- Radix UI Tooltip (`radix-ui`) as base primitives
- Tailwind CSS for styling

### Component API (Sub-components)

Tooltip 是一个组合组件（Compound Component），由以下子组件构成：

```typescript
// TooltipProvider - 全局配置 Provider
//   - delayDuration: 默认 0（无延迟显示）
//   - 包裹整个 Tooltip 根组件
function TooltipProvider(props: React.ComponentProps<typeof TooltipPrimitive.Provider>)

// Tooltip - 根组件，自动内嵌 TooltipProvider
function Tooltip(props: React.ComponentProps<typeof TooltipPrimitive.Root>)

// TooltipTrigger - 触发器，包裹需要 hover 显示提示的目标元素
function TooltipTrigger(props: React.ComponentProps<typeof TooltipPrimitive.Trigger>)

// TooltipContent - 提示内容面板
//   - sideOffset: 默认 0
//   - 通过 Portal 渲染到 body
//   - 包含 Arrow 子元素
function TooltipContent(
  props: React.ComponentProps<typeof TooltipPrimitive.Content> & {
    sideOffset?: number; // default: 0
  }
)
```

## Design Specifications

### TooltipContent 布局

| 属性             | 值                             | 说明                      |
| ---------------- | ------------------------------ | ------------------------- |
| width            | `w-fit`                        | 自适应内容宽度            |
| padding          | `p-2` (8px)                    | 内边距                    |
| border-radius    | `rounded` (--radius-sm = 2px)  | 小圆角                    |
| z-index          | `z-50`                         | 确保浮层在最上层          |

### TooltipContent 排版

| 属性     | 值                              | 说明                |
| -------- | ------------------------------- | ------------------- |
| font-size| `text-default` (13px)           | 默认正文字号        |
| color    | `text-gray-14`                  | Light 模式文字颜色  |
| color    | `dark:text-gray-12`             | Dark 模式文字颜色   |

### TooltipContent 背景

| 属性       | 值                | 说明                          |
| ---------- | ----------------- | ----------------------------- |
| background | `bg-gray-2`       | Light 模式：浅灰背景          |
| background | `dark:bg-gray-3`  | Dark 模式：深色反转提示背景   |

### TooltipContent 阴影

| 属性    | 值                            | 说明               |
| ------- | ----------------------------- | ------------------ |
| shadow  | `shadow-[var(--shadow-tooltip)]` | 使用设计 token 阴影 |

### Arrow 箭头

| 属性          | 值                                  | 说明                     |
| ------------- | ----------------------------------- | ------------------------ |
| size          | `size-2.5` (10px)                   | 箭头尺寸                 |
| rotation      | `rotate-45`                         | 菱形旋转                 |
| border-radius | `rounded-[2px]`                     | 微圆角                   |
| fill          | `fill-gray-2`                       | Light 模式填充色         |
| fill          | `dark:fill-gray-3`                  | Dark 模式填充色          |
| transform     | `translate-y-[calc(-50%_-_2px)]`    | 垂直偏移对齐内容边缘     |
| z-index       | `z-50`                              | 与内容层保持一致         |

### 动画 (Animation)

进入动画：
- `animate-in fade-in-0 zoom-in-95` — 淡入 + 缩放进入

退出动画：
- `data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95` — 淡出 + 缩放退出

方向性滑入：
- `data-[side=bottom]:slide-in-from-top-2` — 从顶部滑入
- `data-[side=left]:slide-in-from-right-2` — 从右侧滑入
- `data-[side=right]:slide-in-from-left-2` — 从左侧滑入
- `data-[side=top]:slide-in-from-bottom-2` — 从底部滑入

变换原点：
- `origin-(--radix-tooltip-content-transform-origin)` — 根据 Radix 计算的动态原点

### sideOffset

- 默认值：`0`（无额外间距）

### data-slot 标记

| 子组件           | data-slot 值         |
| ---------------- | -------------------- |
| TooltipProvider  | `tooltip-provider`   |
| Tooltip          | `tooltip`            |
| TooltipTrigger   | `tooltip-trigger`    |
| TooltipContent   | `tooltip-content`    |
