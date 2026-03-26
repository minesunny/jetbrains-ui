# SVG

`apps/www/registry/components/svg` 提供两层能力：

- `index.tsx`
  暴露 `SVG` 组件，通过名字使用图标并自动跟随当前主题。
- `registry.ts`
  由脚本扫描 `apps/www/registry/icons/**/index.tsx` 自动生成。

职责边界：

- `SVG` 只负责顶层封装和主题联动。
- 不内置固定的业务 icon 集合。
- 内部 icon 组件需要由接入方根据实际场景注册到 `registry.ts`。

图标名使用 `apps/www/registry/icons` 下的相对路径，例如：

- `breakpoints/breakpoint`
- `database/access-method`
- `general/general/search`

如果某个图标 basename 全局唯一，生成后的 registry 也会提供短名别名。

更新图标目录后，重新运行 `pnpm registry:build` 即可同步 `registry.ts`。
