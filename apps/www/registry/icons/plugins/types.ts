import type React from 'react';
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';


export type SvgProps = React.ComponentProps<'svg'> & {
  size?: IconSize;
  mode?: IconMode;
};

export const sizeMap: Record<IconSize, number> = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
};
