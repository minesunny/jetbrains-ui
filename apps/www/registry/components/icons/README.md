# Icons

`apps/www/registry/components/icons` 现在是统一的 sprite 使用入口。

`jetbrains-ui` 本身只产出 SVG sprite 文件：

- `public/icons/breakpoints.svg`
- `public/icons/build.svg`
- `public/icons/database.svg`
- `public/icons/debugger.svg`
- `public/icons/editor-icons.svg`
- `public/icons/file-types.svg`
- `public/icons/general.svg`
- `public/icons/nodes.svg`
- `public/icons/plugins.svg`
- `public/icons/run.svg`
- `public/icons/run-configurations.svg`
- `public/icons/terminal.svg`
- `public/icons/vcs.svg`

## `SVG`

使用 `SVG` 渲染图标：

```tsx
import { SVG } from '@/registry/components/icons';

<SVG name="breakpoints/breakpoint" />
<SVG name="general/actions/add-file" width="16px" height="16px" />
<SVG name="plugins/ruby/rhtml" className="text-muted-foreground" />
```

`name` 不是裸图标名，而是完整图标路径：

- `breakpoints/breakpoint`
- `general/general/chevron-down`
- `general/tool-windows/feedback`
- `plugins/ruby/rhtml`

原因很简单：不同大类里有重名图标，裸名无法稳定定位到正确 sprite。

组件会：

- 从 `name` 的第一个路径段推导 sprite 文件
- 取最后一个路径段作为 symbol 名
- 使用 `next-themes` 的 `resolvedTheme`
- 自动拼出 `/icons/<top-category>.svg#<icon-name>_<theme>`

等价关系例如：

```tsx
<SVG name="breakpoints/breakpoint" />
```

会解析成：

```tsx
<svg>
  <use xlinkHref="/icons/breakpoints.svg#breakpoint_light" />
</svg>
```

假设当前主题是 `light`。

## 兼容导出

还保留了两个兼容导出：

- `Icon`
- `ThemedIcon`

但新的推荐入口是 `SVG`。

## 分类包装器

如果你已经确定了顶级大类，可以直接用分类包装器，避免每次都手写第一段路径：

```tsx
import {
  Breakpoints,
  General,
  Plugins,
  RunConfigurations,
} from '@/registry/components/icons';

<Breakpoints name="breakpoint" />
<General name="general/chevron-down" />
<General name="tool-windows/feedback" />
<Plugins name="ruby/rhtml" />
<RunConfigurations name="application" />
```

这些包装器只是补齐顶级路径段：

- `<Breakpoints name="breakpoint" />` -> `breakpoints/breakpoint`
- `<General name="tool-windows/feedback" />` -> `general/tool-windows/feedback`
- `<General name="general/chevron-down" />` -> `general/general/chevron-down`
- `<Plugins name="ruby/rhtml" />` -> `plugins/ruby/rhtml`

当前提供的包装器有：

- `Breakpoints`
- `Build`
- `Database`
- `Debugger`
- `EditorIcons`
- `FileTypes`
- `General`
- `Nodes`
- `Plugins`
- `Run`
- `RunConfigurations`
- `Terminal`
- `Vcs`

## 消费者项目里的 sprite 配置

如果使用当前仓库产出的静态 sprite 文件，直接通过：

```tsx
<use xlinkHref="/icons/general.svg#chevron-down_light" />
```

这种路径方式即可，不强制要求 webpack 配置。

如果你想要像 `mine-query-web` 那样，把 sprite 通过 `svg-sprite-loader` 注入到页面里，再用：

```tsx
<use xlinkHref="#chevron-down_light" />
```

这种写法，可以在自己的 Next.js 项目里加下面这段配置。

`next.config.mjs`

```js
/** @type {import("next").NextConfig} */
const nextConfig = {
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
          },
          {
            loader: 'svgo-loader',
          },
        ],
      },
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
```

然后像 `mine-query-web` 一样在客户端预加载 sprite：

```tsx
const requireAll = (
  requireContext: ReturnType<typeof require.context>,
): unknown[] => requireContext.keys().map(requireContext);

const req = require.context('/public/icons', true, /\.svg$/);
requireAll(req);
```

这种模式下，`<use>` 可以只写 hash。

## 当前仓库里的建议

在 `jetbrains-ui` 里，优先使用当前 `SVG` 组件的 URL 片段模式，因为它直接消费 `public/icons/*.svg`，不要求额外 webpack loader。
