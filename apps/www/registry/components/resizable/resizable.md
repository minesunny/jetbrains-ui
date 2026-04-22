# Role: Frontend UI Component Engineer

你是一名资深前端工程师，精通 React + TypeScript，擅长使用 react-resizable-panels 构建高质量可调整大小面板组件。

## Task

实现一个完整的 Resizable 组件，遵循以下设计规范。

## Technical Requirements

### Core Stack

- React + TypeScript
- react-resizable-panels as base primitives (Group, Panel, Separator)
- Tailwind CSS for styling

### Component API (Sub-components)

遵循 shadcn/ui 风格的复合组件接口，提供三个子组件：

```typescript
// 1. ResizablePanelGroup — wraps Group with themed flex layout
const ResizablePanelGroup = React.forwardRef<
  GroupImperativeHandle,
  React.ComponentPropsWithoutRef<typeof Group>
>(...)

// 2. ResizablePanel — wraps Panel with min-size constraints
const ResizablePanel = React.forwardRef<
  PanelImperativeHandle,
  React.ComponentPropsWithoutRef<typeof Panel>
>(...)

// 3. ResizableHandle — wraps Separator with themed colors + optional grip
function ResizableHandle(
  props: React.ComponentPropsWithoutRef<typeof Separator> & {
    withHandle?: boolean;
  }
)
```

## Design Specifications

### ResizablePanelGroup

- **data-slot**: `"resizable-panel-group"`
- **Layout**: `flex h-full w-full overflow-hidden`
- **Vertical orientation**: 当 `orientation === 'vertical'` 时追加 `flex-col`

### ResizablePanel

- **data-slot**: `"resizable-panel"`（渲染在 Panel 内部的包裹 div 上）
- **Layout**: `h-full min-h-0 min-w-0`
- 直接透传 Panel 的所有 props，children 渲染在内部 div 中

### ResizableHandle (Separator)

- **data-slot**: `"resizable-handle"`
- **data-with-handle**: 当 `withHandle` 为 true 时设置为 `"true"`
- **尺寸**: `w-px shrink-0`
- **交互**: `cursor-col-resize`
- **定位**: `relative flex items-center justify-center`
- **背景色（默认）**: `bg-gray-10`
- **背景色（Hover）**: `hover:bg-gray-8`
- **背景色（Active）**: `active:bg-gray-7`
- **背景色（Dark 默认）**: `dark:bg-gray-5`
- **背景色（Dark Hover）**: `dark:hover:bg-gray-6`
- **背景色（Dark Active）**: `dark:active:bg-gray-7`
- **过渡**: `transition-[background-color] duration-150 ease-in-out`
- **聚焦**: `outline-none`
- **点击区域扩展（垂直手柄）**: `after:pointer-events-none after:absolute after:inset-block-0 after:inset-inline-start-1/2 after:w-1 after:-translate-x-1/2 after:content-[""]`
- **水平方向**（通过 `aria-orientation='horizontal'`）:
  - 尺寸切换: `aria-[orientation='horizontal']:h-px aria-[orientation='horizontal']:w-full`
  - 光标: `aria-[orientation='horizontal']:cursor-row-resize`
  - 点击区域调整: `aria-[orientation='horizontal']:after:inset-block-start-1/2 aria-[orientation='horizontal']:after:inset-inline-0 aria-[orientation='horizontal']:after:h-1 aria-[orientation='horizontal']:after:w-full aria-[orientation='horizontal']:after:-translate-x-0 aria-[orientation='horizontal']:after:-translate-y-1/2`

### Grip (withHandle)

当 `withHandle` 为 true 时，在 Separator 内部渲染一个 grip 元素：

- **容器**: `z-10 flex h-4 w-3 shrink-0 items-center justify-center rounded-[2px]`
- **边框（默认）**: `border border-gray-8`
- **边框（Hover）**: `group-hover:border-gray-6`
- **边框（Active）**: `group-active:border-gray-5`
- **边框（Dark 默认）**: `dark:border-gray-6`
- **边框（Dark Hover）**: `dark:group-hover:border-gray-7`
- **边框（Dark Active）**: `dark:group-active:border-gray-8`
- **背景色（默认）**: `bg-gray-12`
- **背景色（Hover）**: `group-hover:bg-gray-11`
- **背景色（Active）**: `group-active:bg-gray-10`
- **背景色（Dark 默认）**: `dark:bg-gray-3`
- **背景色（Dark Hover）**: `dark:group-hover:bg-gray-4`
- **背景色（Dark Active）**: `dark:group-active:bg-gray-5`
- **过渡**: `transition-[border-color,background-color] duration-150 ease-in-out`
- **伪元素圆点（before）**: `before:block before:h-2.5 before:w-1 before:rounded-full before:bg-gray-7 before:content-['']`
- **伪元素圆点（Dark 默认）**: `dark:before:bg-gray-8`
- **伪元素圆点（Dark Hover）**: `dark:group-hover:before:bg-gray-9`
- **伪元素圆点（Dark Active）**: `dark:group-active:before:bg-gray-10`
