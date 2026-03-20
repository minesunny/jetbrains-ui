import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type GroupByTestProductionProps = IconProps;

const GroupByTestProductionLight: FC<SvgProps> = ({
  size,
  className,
  title,
  role,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title ? <title>{title}</title> : null}
    <path
      d="M3.5 13.5h-1a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h1M12.5 13.5h1a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-1"
      stroke="#6C707E"
      strokeLinecap="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.135 11.847 3.261 8.685a1.007 1.007 0 0 1 0-1.354l2.875-3.156A.497.497 0 0 1 7 4.513v6.996a.497.497 0 0 1-.865.338"
      fill="#E55765"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m9.865 4.175 2.874 3.162c.348.383.348.97 0 1.354l-2.875 3.157A.497.497 0 0 1 9 11.509V4.513c0-.457.558-.675.865-.338"
      fill="#55A76A"
    />
  </svg>
);

const GroupByTestProductionDark: FC<SvgProps> = ({
  size,
  className,
  title,
  role,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role={role}
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
  >
    {title ? <title>{title}</title> : null}
    <path
      d="M3.5 13.5h-1a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h1M12.5 13.5h1a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-1"
      stroke="#CED0D6"
      strokeLinecap="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.135 11.847 3.261 8.685a1.007 1.007 0 0 1 0-1.354l2.875-3.156A.497.497 0 0 1 7 4.513v6.996a.497.497 0 0 1-.865.338"
      fill="#E55765"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m9.865 4.175 2.874 3.162c.348.383.348.97 0 1.354l-2.875 3.157A.497.497 0 0 1 9 11.509V4.513c0-.457.558-.675.865-.338"
      fill="#55A76A"
    />
  </svg>
);

export const GroupByTestProduction: FC<GroupByTestProductionProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? GroupByTestProductionLight : GroupByTestProductionDark;

  return (
    <SvgComponent
      size={sizeMap[size]}
      className={cn('inline-block flex-shrink-0', className)}
      title={title}
      role={ariaLabel ? 'img' : 'presentation'}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
      {...props}
    />
  );
};
