import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type HelmvaluesSchemaProps = IconProps;

const HelmvaluesSchemaLight: React.FC<SvgProps> = ({
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
    {title && <title>{title}</title>}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 7.5a.5.5 0 0 0-1 0v.535a3.5 3.5 0 0 0-1.596.662l-.379-.379a.5.5 0 0 0-.707.707l.379.379A3.5 3.5 0 0 0 8.035 11H7.5a.5.5 0 0 0 0 1h.535c.085.593.319 1.138.662 1.596l-.379.379a.5.5 0 1 0 .707.707l.379-.379a3.5 3.5 0 0 0 1.596.662v.535a.5.5 0 0 0 1 0v-.535a3.5 3.5 0 0 0 1.596-.662l.379.379a.5.5 0 0 0 .707-.707l-.379-.379A3.5 3.5 0 0 0 14.965 12h.535a.5.5 0 0 0 0-1h-.535a3.5 3.5 0 0 0-.662-1.596l.379-.379a.5.5 0 0 0-.707-.707l-.379.379A3.5 3.5 0 0 0 12 8.035zm2 4a2.49 2.49 0 0 0-1.121-2.086A2.5 2.5 0 1 0 14 11.5"
      fill="#039BA1"
    />
    <path
      d="M3.605 8.855q.398.345.383.923l-.03 1.792q-.007.735.315 1.282.33.555.93.848.602.297 1.397.3a5.5 5.5 0 0 1-.406-1.046 1.4 1.4 0 0 1-.706-.357q-.413-.39-.398-1.05l.03-1.777q.015-.697-.412-1.185-.428-.495-1.155-.63.728-.052 1.155-.532.427-.488.412-1.253l-.03-1.567q-.007-.735.443-1.163.457-.435 1.237-.435h.73V2h-.737q-.863 0-1.5.315-.638.315-.983.9-.337.585-.322 1.365l.03 1.583q.015.577-.383.922-.397.345-1.072.345H2v1.08h.533q.675 0 1.072.345M12.017 6.024a5.6 5.6 0 0 0-1.132.01l.027-1.431q.008-.735-.45-1.163-.45-.435-1.23-.435H8.5V2h.74q.862 0 1.5.315t.974.9q.345.585.33 1.365z"
      fill="#6C707E"
    />
  </svg>
);

const HelmvaluesSchemaDark: React.FC<SvgProps> = ({
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
    {title && <title>{title}</title>}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 7.5a.5.5 0 0 0-1 0v.535a3.5 3.5 0 0 0-1.596.662l-.379-.379a.5.5 0 0 0-.707.707l.379.379A3.5 3.5 0 0 0 8.035 11H7.5a.5.5 0 0 0 0 1h.535c.085.593.319 1.138.662 1.596l-.379.379a.5.5 0 1 0 .707.707l.379-.379a3.5 3.5 0 0 0 1.596.662v.535a.5.5 0 0 0 1 0v-.535a3.5 3.5 0 0 0 1.596-.662l.379.379a.5.5 0 0 0 .707-.707l-.379-.379A3.5 3.5 0 0 0 14.965 12h.535a.5.5 0 0 0 0-1h-.535a3.5 3.5 0 0 0-.662-1.596l.379-.379a.5.5 0 0 0-.707-.707l-.379.379A3.5 3.5 0 0 0 12 8.035zm2 4a2.49 2.49 0 0 0-1.121-2.086A2.5 2.5 0 1 0 14 11.5"
      fill="#24A394"
    />
    <path
      d="M3.605 8.855q.398.345.383.923l-.03 1.792q-.007.735.315 1.282.33.555.93.848.602.297 1.397.3a5.5 5.5 0 0 1-.406-1.046 1.4 1.4 0 0 1-.706-.357q-.413-.39-.398-1.05l.03-1.777q.015-.697-.412-1.185-.428-.495-1.155-.63.728-.052 1.155-.532.427-.488.412-1.253l-.03-1.567q-.007-.735.443-1.163.457-.435 1.237-.435h.73V2h-.737q-.863 0-1.5.315-.638.315-.983.9-.337.585-.322 1.365l.03 1.583q.015.577-.383.922-.397.345-1.072.345H2v1.08h.533q.675 0 1.072.345M12.017 6.024a5.6 5.6 0 0 0-1.132.01l.027-1.431q.008-.735-.45-1.163-.45-.435-1.23-.435H8.5V2h.74q.862 0 1.5.315t.974.9q.345.585.33 1.365z"
      fill="#CED0D6"
    />
  </svg>
);

export const HelmvaluesSchema: React.FC<HelmvaluesSchemaProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? HelmvaluesSchemaLight : HelmvaluesSchemaDark;

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
