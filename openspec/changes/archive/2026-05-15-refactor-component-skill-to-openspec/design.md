## Context

当前 `jetbrains-ui-component-builder` skill 包含 10 个 reference 文件（约 1347 行），混合了通用工作流规则、设计系统 spec 和组件设计 spec。随着 21 个组件的增长，这种单 skill 承载所有 spec 的模式不可持续。

OpenSpec 已配置 `spec-driven` schema，但 specs/ 目录为空，config.yaml 没有项目上下文。

## Goals / Non-Goals

**Goals:**
- 将 skill 精简为纯工作流引擎（~50 行），只包含 Styling Policy、Workflow A/B、Validation Gates
- 将 4 个 foundation spec（colors/spacing/typography/figma-to-tailwind）迁移到 `openspec/specs/foundation/`
- 将 4 个 component spec（button/checkbox/alert/combobox）迁移到 `openspec/specs/components/`
- 将 button-analysis.md 迁移到 `openspec/specs/components/button/analysis.md`
- 增强 `openspec/config.yaml` 添加项目技术栈上下文和 proposal/design/tasks 规则
- 删除 skill 的 `references/` 目录

**Non-Goals:**
- 不为其他 17 个组件创建 spec（后续任务）
- 不修改任何组件代码或运行时行为
- 不修改 OpenSpec schema

## Decisions

### 1. Spec 文件直接迁移，不重新格式化为 OpenSpec scenario 格式

**选择**：保留原始 markdown 表格格式直接迁移
**理由**：这些 spec 是 Figma 设计系统的参考文档，包含精确的色彩值、间距值、排版参数。强制转换为 WHEN/THEN scenario 格式会丢失表格的可读性和精确性。OpenSpec specs 也可以是纯文档参考。
**替代方案**：将每个色彩值转为 scenario → 过于冗长，无实际测试价值

### 2. SKILL.md 引用 OpenSpec specs 路径而非本地 references

**选择**：Skill 中写 `openspec/specs/` 路径让 AI 自行读取
**理由**：单一信息源，避免 spec 在两处维护
**替代方案**：保留 references/ 作为副本 → 信息重复，容易 drift

### 3. component-workflow-checklist 内容分散到 config.yaml rules 和 SKILL.md

**选择**：文件清单和 required patterns 合并到 SKILL.md，import path rule 和 validation commands 并入现有 Validation Gates
**理由**：checklist 与 SKILL.md 已有大量重叠（都讲 workflow 步骤），合并后更紧凑

### 4. config.yaml rules 包含核心样式策略

**选择**：将 Styling Policy 的关键约束（raw tokens、不提取常量、dark: prefix）同时写入 config.yaml rules.design
**理由**：OpenSpec propose/design 流程也能强制遵循这些规则，不仅限于手动调用 skill 时

## Risks / Trade-offs

- **Skill 精简后丢失 references 加载指引** → 新 SKILL.md 明确列出 `openspec/specs/` 路径结构，AI 可按需读取
- **Spec 格式不是标准 OpenSpec scenario** → 可接受，这些是设计参考文档不是行为规范
- **config.yaml rules 对非 OpenSpec 流程不生效** → 保留了 SKILL.md 中的 Styling Policy 作为兜底
