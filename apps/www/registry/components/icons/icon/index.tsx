'use client';

import * as React from 'react';
import { cn } from '@workspace/ui/lib/utils';

export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'name'> {
  /**
   * 图标名称
   * @example 'feedback' | 'graph-ql' | 'add'
   */
  name: string;
  /**
   * 主题模式
   * @default 'light'
   */
  theme?: 'light' | 'dark';
  /**
   * 图标大小
   * @default 16
   */
  size?: number;
  /**
   * CSS 类名
   */
  className?: string;
}

/**
 * Icon 组件 - 从 General.svg sprite 中渲染指定图标
 *
 * 该组件使用 SVG sprite 技术，通过 `<use>` 标签引用预定义的图标符号。
 * 支持 light/dark 两种主题模式。
 *
 * @example
 * ```tsx
 * // 基础用法
 * <Icon name="feedback" />
 *
 * // 指定主题和大小
 * <Icon name="graph-ql" theme="dark" size={20} />
 *
 * // 使用自定义类名
 * <Icon name="add" className="text-blue-500" />
 *
 * // 使用主题变量
 * <Icon name="feedback" theme={theme === 'dark' ? 'dark' : 'light'} />
 * ```
 */
export function Icon({
  name,
  theme = 'light',
  size = 16,
  className,
  ...props
}: IconProps) {
  // 标准化图标名称：转换为 kebab-case
  const normalizedName = name
    .toLowerCase()
    .replace(/([a-z])([A-Z])/g, '$1-$2') // camelCase to kebab-case
    .replace(/[\s_]+/g, '-') // spaces and underscores to hyphens
    .replace(/[^a-z0-9-]/g, '') // remove special characters
    .replace(/-+/g, '-') // multiple hyphens to single
    .trim();

  const iconId = `icon-${normalizedName}-${theme}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 88 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        'inline-flex shrink-0 align-middle',
        // 添加默认样式以适应不同大小
        size >= 20 && 'w-5 h-5',
        size >= 24 && 'w-6 h-6',
        size >= 32 && 'w-8 h-8',
        className,
      )}
      {...props}
    >
      <use
        href={`/icons/general.svg#${iconId}`}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </svg>
  );
}

/**
 * 动态主题图标组件 - 根据当前主题自动选择图标版本
 */
export interface ThemedIconProps extends Omit<IconProps, 'theme'> {
  /**
   * 当前主题 ('light' | 'dark')
   */
  currentTheme: 'light' | 'dark';
}

export function ThemedIcon({ currentTheme, ...props }: ThemedIconProps) {
  return <Icon {...props} theme={currentTheme} />;
}

export default Icon;
