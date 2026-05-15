## Why

当前组件开发规则全部堆叠在一个 Claude skill（`jetbrains-ui-component-builder`）的 SKILL.md + 10 个 reference 文件中。随着组件增多，spec 文件无限膨胀，组件设计规范和工作流规则混在一起，无法用 OpenSpec 的 propose/apply 流程结构化驱动开发。

## What Changes

- **精简 SKILL.md** 为纯工作流引擎：只保留 Styling Policy、Workflow A/B、Validation Gates，删除所有组件特定内容
- **删除 references/ 目录**，将 10 个参考文件迁移到 OpenSpec specs
- **创建 4 个 foundation specs**：colors、spacing、typography、figma-to-tailwind
- **创建 4 个 component specs**：button、checkbox、alert、combobox（从现有 reference 迁移）
- **增强 `openspec/config.yaml`**：添加项目技术栈上下文和 proposal/design/tasks 规则
- **将 component-workflow-checklist 规则** 分散到 config.yaml rules 和 SKILL.md 中

## Capabilities

### New Capabilities

- `foundation/colors`: JetBrains 色彩系统 spec（light/dark 主题、8 色系、组件颜色映射）
- `foundation/spacing`: 间距系统 spec（space-0 到 space-9、表单/控件/对话框间距规则）
- `foundation/typography`: 排版系统 spec（UI 字体 Inter 7 种样式、Editor 字体 JetBrains Mono 4 种样式）
- `foundation/figma-to-tailwind`: Figma Auto Layout 到 Tailwind CSS 转换参考（布局、间距、阴影、排版映射）
- `components/button`: Button 组件设计 spec（variant/size/state 色彩表、行为规则、API）
- `components/checkbox`: Checkbox 组件设计 spec（checked/unchecked/indeterminate 状态色彩表、icon 映射）
- `components/alert`: Alert 组件设计 spec（4 种类型、容器属性、布局结构）
- `components/combobox`: ComboBox 组件设计 spec（容器结构、input/type-button 状态表）

### Modified Capabilities

（无现有 spec 需要修改）

## Impact

- **`.claude/skills/jetbrains-ui-component-builder/`**: SKILL.md 重写，references/ 目录删除
- **`openspec/specs/`**: 新增 8 个 spec 文件（4 foundation + 4 component）
- **`openspec/config.yaml`**: 添加 context 和 rules
- **组件代码无影响**：本次仅重组文档结构，不涉及运行时代码变更
