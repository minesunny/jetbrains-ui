# Role: Frontend UI Component Engineer

你是一名资深前端工程师，精通 React + TypeScript，擅长使用原生 HTML 元素和 Tailwind CSS 构建高质量组件。

## Task

实现一个完整的 Input 组件，遵循以下设计规范。

## Technical Requirements

### Core Stack

- React + TypeScript
- Native `<input>` element with `forwardRef`
- Tailwind CSS for styling

### Component API (Props)

```typescript
interface InputProps extends React.ComponentProps<'input'> {
  // 继承所有原生 input 属性
  // type?: string;        // 默认 'text'
  // disabled?: boolean;
  // className?: string;
  // 通过 aria-invalid 标记验证状态
}
```

## Design Specifications

### Dimensions

| 属性 | 值 |
|------|------|
| 高度 | `h-10` (40px) |
| 宽度 | `w-[224px]`（默认） |
| 内边距 | `py-1.5` |
| 圆角 | `rounded`（3px，由 `--radius-default` 决定） |

### Typography

| 属性 | 值 |
|------|------|
| 字号/行高 | `text-default`（13px / 22px） |
| 文字颜色 (Light) | `text-gray-1` |
| 文字颜色 (Dark) | `dark:text-gray-12` |

### States

#### Default

| 属性 | Light | Dark |
|------|-------|------|
| 边框 | `border border-gray-9`（1px） | `dark:border-gray-5`（1px） |
| 背景 | `bg-gray-14` | `dark:bg-gray-2` |
| 阴影 | `shadow-none` | `shadow-none` |

#### Focused

| 属性 | Light | Dark |
|------|-------|------|
| 边框 | `border-2 border-blue-4` | `dark:border-blue-6` |
| 外环 | `ring-2 ring-blue-4 ring-offset-0` | `dark:ring-blue-6` |
| 轮廓 | `outline-none` | `outline-none` |

#### Validated / Error (Unfocused)

通过 `aria-invalid="true"` 触发。

| 属性 | Light | Dark |
|------|-------|------|
| 边框 | `border-2 border-red-9` | `dark:border-red-2` |

#### Validated + Focused

通过 `aria-invalid="true"` + `:focus-visible` 触发。

| 属性 | Light | Dark |
|------|-------|------|
| 边框 | `border-red-4` | `dark:border-red-6` |
| 外环 | `ring-2 ring-red-4 ring-offset-0` | `dark:ring-red-6` |

#### Disabled

| 属性 | Light | Dark |
|------|-------|------|
| 边框 | `border border-gray-13` | `dark:border-gray-5` |
| 背景 | `bg-gray-13` | `dark:bg-gray-2` |
| 文字颜色 | `text-gray-8` | `dark:text-gray-7` |
| 占位符颜色 | `placeholder:text-gray-8` | `dark:placeholder:text-gray-7` |
| 光标 | `cursor-not-allowed` | `cursor-not-allowed` |

### Placeholder

| 模式 | 值 |
|------|------|
| Light | `text-gray-7` |
| Dark | `text-gray-8` |

### Transition

| 属性 | 值 |
|------|------|
| 过渡属性 | `border-color, box-shadow` |
| 时长 | `150ms` |
| 缓动 | `ease-in-out` |
| Tailwind | `transition-[border-color,box-shadow] duration-150 ease-in-out` |

## Accessibility

- 使用原生 `<input>` 元素，天然支持键盘导航和屏幕阅读器。
- 通过 `aria-invalid="true"` 标记验证错误状态，辅助技术可识别。
- 焦点状态使用 `focus-visible` 而非 `focus`，避免鼠标点击时显示焦点环。
- 禁用状态使用原生 `disabled` 属性，自动排除键盘焦点和屏幕阅读器交互。
