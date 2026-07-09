## 1. 增强 OpenSpec 配置

- [x] 1.1 更新 `openspec/config.yaml`：添加 `context`（技术栈、monorepo 结构、token 前缀）和 `rules`（proposal/design/tasks 规则）
- [x] 1.2 验证 config.yaml 格式正确，`openspec status` 无报错

## 2. 精简 SKILL.md 为纯工作流引擎

- [x] 2.1 重写 `.claude/skills/jetbrains-ui-component-builder/SKILL.md`：只保留 Styling Policy、Workflow A/B、Validation Gates，将 references 加载改为指向 `openspec/specs/` 路径
- [x] 2.2 在 SKILL.md 中合并 `component-workflow-checklist.md` 的关键内容（文件清单、required patterns、import path rule、common failure points）
- [x] 2.3 删除 `.claude/skills/jetbrains-ui-component-builder/references/` 目录

## 3. 验证迁移结果

- [x] 3.1 确认 `openspec/specs/foundation/` 下 4 个 spec 文件内容完整（colors/spacing/typography/figma-to-tailwind）
- [x] 3.2 确认 `openspec/specs/components/` 下 4 个组件 spec 文件内容完整（button/checkbox/alert/combobox）+ button/analysis.md
- [x] 3.3 确认 SKILL.md 无断裂引用（不指向已删除的 references/ 文件）
- [x] 3.4 确认 `openspec/specs/` 与 `openspec/changes/refactor-component-skill-to-openspec/specs/` 内容一致
