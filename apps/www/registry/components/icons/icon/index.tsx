'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

const TOP_LEVEL_ICON_GROUPS = [
  'breakpoints',
  'build',
  'database',
  'debugger',
  'editor-icons',
  'file-types',
  'general',
  'nodes',
  'plugins',
  'run',
  'run-configurations',
  'terminal',
  'vcs',
] as const;

export type ResolvedTheme = 'light' | 'dark';
export type SpriteIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const spriteSizeMap: Record<SpriteIconSize, number> = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
};

type TopLevelIconGroup = (typeof TOP_LEVEL_ICON_GROUPS)[number];

function normalizeSegment(segment: string) {
  return segment
    .trim()
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function normalizeIconPath(name: string) {
  return name.split('/').map(normalizeSegment).filter(Boolean).join('/');
}

function isTopLevelIconGroup(value: string): value is TopLevelIconGroup {
  return TOP_LEVEL_ICON_GROUPS.includes(value as TopLevelIconGroup);
}

function resolveTheme(theme: string | undefined): ResolvedTheme {
  return theme === 'dark' ? 'dark' : 'light';
}

export function resolveSpriteHref(
  name: string,
  theme: ResolvedTheme,
): string | null {
  const segments = normalizeIconPath(name).split('/').filter(Boolean);
  const topCategory = segments[0];
  const symbolName = segments.at(-1);

  if (!topCategory || !symbolName || segments.length < 2) {
    return null;
  }

  if (!isTopLevelIconGroup(topCategory)) {
    return null;
  }

  return `/icons/${topCategory}.svg#${symbolName}_${theme}`;
}

interface BaseSpriteProps
  extends Omit<React.SVGProps<SVGSVGElement>, 'name' | 'width' | 'height'> {
  className?: string;
  height?: React.CSSProperties['height'];
  name: string;
  title?: string;
  width?: React.CSSProperties['width'];
}

export type SVGProps = BaseSpriteProps;

function warnInvalidIconName(name: string) {
  if (process.env.NODE_ENV === 'production') {
    return;
  }

  console.warn(
    `[jetbrains-ui/icons] Invalid icon name "${name}". ` +
      'Use a full icon path such as "breakpoints/breakpoint" or ' +
      '"general/actions/add-file".',
  );
}

function BaseSvg({
  'aria-hidden': ariaHidden,
  'aria-label': ariaLabel,
  height = '1em',
  href,
  title,
  width = '1em',
  ...props
}: Omit<SVGProps, 'name'> & { href: string }) {
  const isAccessible = Boolean(ariaLabel || title);

  return (
    <svg
      aria-hidden={ariaHidden ?? (isAccessible ? undefined : true)}
      aria-label={ariaLabel}
      height={height}
      role={props.role ?? (isAccessible ? 'img' : 'presentation')}
      width={width}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <use href={href} xlinkHref={href} />
    </svg>
  );
}

export const SVG: React.FC<SVGProps> = ({ height, name, width, ...props }) => {
  const { resolvedTheme } = useTheme();
  const href = resolveSpriteHref(name, resolveTheme(resolvedTheme));

  if (!href) {
    warnInvalidIconName(name);
    return null;
  }

  return <BaseSvg height={height} href={href} width={width} {...props} />;
};

export interface IconProps
  extends Omit<BaseSpriteProps, 'height' | 'width' | 'name'> {
  name: string;
  size?: number | string;
  theme?: ResolvedTheme;
}

export function Icon({ name, size = 16, theme, ...props }: IconProps) {
  const { resolvedTheme } = useTheme();
  const href = resolveSpriteHref(name, resolveTheme(theme ?? resolvedTheme));

  if (!href) {
    warnInvalidIconName(name);
    return null;
  }

  return <BaseSvg height={size} href={href} width={size} {...props} />;
}

export interface ThemedIconProps extends Omit<IconProps, 'theme'> {
  currentTheme: ResolvedTheme;
}

export function ThemedIcon({ currentTheme, ...props }: ThemedIconProps) {
  return <Icon {...props} theme={currentTheme} />;
}

export interface SpriteIconProps
  extends Omit<BaseSpriteProps, 'height' | 'name' | 'width'> {
  mode?: ResolvedTheme;
  size?: SpriteIconSize;
}

export interface SpriteIconDefinition {
  displayName?: string;
  name: string;
  viewBox: string | Record<ResolvedTheme, string>;
}

export function createSpriteIcon({
  displayName,
  name,
  viewBox,
}: SpriteIconDefinition): React.FC<SpriteIconProps> {
  const SpriteIcon: React.FC<SpriteIconProps> = ({
    mode,
    size = 'md',
    ...props
  }) => {
    const { resolvedTheme } = useTheme();
    const theme = resolveTheme(mode ?? resolvedTheme);
    const href = resolveSpriteHref(name, theme);

    if (!href) {
      warnInvalidIconName(name);
      return null;
    }

    const resolvedViewBox =
      typeof viewBox === 'string' ? viewBox : viewBox[theme];

    return (
      <BaseSvg
        height={spriteSizeMap[size]}
        href={href}
        viewBox={resolvedViewBox}
        width={spriteSizeMap[size]}
        {...props}
      />
    );
  };

  SpriteIcon.displayName = displayName ?? name;

  return SpriteIcon;
}

export default SVG;
