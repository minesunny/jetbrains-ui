import path from 'path';
import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  reactStrictMode: true,
  webpack(config) {
    // Find the existing file loader rule for SVGs
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test?.test?.('.svg'),
    );

    // svg-sprite-loader: compile SVGs into a sprite sheet
    config.module.rules.push({
      test: /\.svg$/i,
      include: path.join(process.cwd(), 'registry', 'icons'),
      use: [
        {
          loader: 'svg-sprite-loader',
          options: {
            inject: true,
            symbolId: (filePath) => {
              // Generate sprite ID: icon-{category}-{subcategory}-{iconname}-{mode}
              const relativePath = filePath
                .replace(/^.*\/registry\/icons\//, '')
                .replace(/\.svg$/i, '');

              // Extract theme: 'loader_Theme-Light' -> 'light'
              const themeMatch = relativePath.match(/_Theme-(Light|Dark)$/);
              const theme = themeMatch ? themeMatch[1].toLowerCase() : 'light';

              // Remove theme suffix
              const pathWithoutTheme = relativePath.replace(/_Theme-(Light|Dark)$/, '');

              // Split path: [Category, Name] or [Category, Subcategory, Name, Name]
              const parts = pathWithoutTheme.split('/');

              // Category is always first part
              const category = parts[0]?.replace(/_/g, '-').toLowerCase() ?? '';

              if (!category || parts.length < 2) return null;

              // Strip size suffix like @20x20, @14x14 from icon name
              function stripSizeSuffix(name) {
                return name.replace(/@\d+x\d+$/i, '').replace(/_/g, '-').toLowerCase();
              }

              // Icon name is the second-to-last part (the icon directory, not the filename)
              // For 3 parts: [Category, Name, Name] -> iconName = parts[1]
              // For 4 parts: [Category, Subcategory, Name@20x20, Name@20x20] -> iconName = parts[2]
              const iconName = stripSizeSuffix(parts[parts.length - 2] ?? '');

              if (!iconName) return null;

              // Subcategory is only present in 4+ part paths
              // For 4+ parts, parts[1] is the subcategory
              let subcategory = '';
              if (parts.length >= 4) {
                subcategory = stripSizeSuffix(parts[1] ?? '');
              }

              if (subcategory) {
                return `icon-${category}-${subcategory}-${iconName}-${theme}`;
              }
              return `icon-${category}-${iconName}-${theme}`;
            },
          },
        },
        'svg-transform-loader',
      ],
    });

    // Resolve @registry/* path alias in webpack
    config.resolve.alias = {
      ...config.resolve.alias,
      '@registry': path.join(process.cwd(), 'registry'),
    };

    // Exclude SVG files from the default file loader
    if (fileLoaderRule) {
      fileLoaderRule.exclude = path.join(process.cwd(), 'registry', 'icons');
    }

    return config;
  },
  async rewrites() {
    return [
      {
        source: '/docs/:path*.mdx',
        destination: '/llms.mdx/:path*',
      },
    ];
  },
};

export default withMDX(config);
