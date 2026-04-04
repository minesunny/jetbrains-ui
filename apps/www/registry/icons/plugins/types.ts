import type React from 'react';


export type SvgProps = React.ComponentProps<'svg'> & {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  mode?: 'light' | 'dark';
};

export const sizeMap: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', number> = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
};
