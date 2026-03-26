import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type PackageJsonProps = IconProps;

const PackageJsonLight: FC<SvgProps> = ({
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
    <g clipPath="url(#a)">
      <path d="M12 15.5 8.5 14v-4L12 8.5l3.5 1.5v4z" fill="#EBECF0" />
      <path
        d="M12 15.5 8.5 14v-4m3.5 5.5 3.5-1.5v-4M12 15.5v-4M8.5 10l3.5 1.5M8.5 10 12 8.5l3.5 1.5M12 11.5l3.5-1.5"
        stroke="#6C707E"
        strokeLinejoin="round"
      />
    </g>
    <path
      d="M3.605 8.855q.398.345.383.923l-.03 1.792q-.007.735.315 1.282.33.555.93.848.608.3 1.41.3H7v-1.005h-.38q-.712 0-1.132-.397-.413-.39-.398-1.05l.03-1.778q.015-.697-.412-1.185-.428-.495-1.155-.63.728-.052 1.155-.532.427-.488.412-1.253l-.03-1.567q-.007-.735.443-1.163.457-.435 1.237-.435h.73V2h-.737q-.863 0-1.5.315-.638.315-.983.9-.337.585-.322 1.365l.03 1.583q.015.577-.383.922-.397.345-1.072.345H2v1.08h.533q.675 0 1.072.345M12.35 7.041a1.5 1.5 0 0 0-.94.08l-.259.11q-.28-.438-.269-1.061l.03-1.567q.008-.735-.45-1.163-.45-.435-1.23-.435H8.5V2h.74q.862 0 1.5.315t.974.9q.345.585.33 1.365l-.03 1.583q-.013.54.335.878"
      fill="#834DF0"
    />
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(8 8)" d="M0 0H8V8H0z" />
      </clipPath>
    </defs>
  </svg>
);

const PackageJsonDark: FC<SvgProps> = ({
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
    <g clipPath="url(#a)">
      <path d="M12 15.5 8.5 14v-4L12 8.5l3.5 1.5v4z" fill="#43454A" />
      <path
        d="M12 15.5 8.5 14v-4m3.5 5.5 3.5-1.5v-4M12 15.5v-4M8.5 10l3.5 1.5M8.5 10 12 8.5l3.5 1.5M12 11.5l3.5-1.5"
        stroke="#CED0D6"
        strokeLinejoin="round"
      />
    </g>
    <path
      d="M3.605 8.855q.398.345.383.923l-.03 1.792q-.007.735.315 1.282.33.555.93.848.608.3 1.41.3H7v-1.005h-.38q-.712 0-1.132-.397-.413-.39-.398-1.05l.03-1.778q.015-.697-.412-1.185-.428-.495-1.155-.63.728-.052 1.155-.532.427-.488.412-1.253l-.03-1.567q-.007-.735.443-1.163.457-.435 1.237-.435h.73V2h-.737q-.863 0-1.5.315-.638.315-.983.9-.337.585-.322 1.365l.03 1.583q.015.577-.383.922-.397.345-1.072.345H2v1.08h.533q.675 0 1.072.345M12.35 7.041a1.5 1.5 0 0 0-.94.08l-.259.11q-.28-.438-.269-1.061l.03-1.567q.008-.735-.45-1.163-.45-.435-1.23-.435H8.5V2h.74q.862 0 1.5.315t.974.9q.345.585.33 1.365l-.03 1.583q-.013.54.335.878"
      fill="#A571E6"
    />
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(8 8)" d="M0 0H8V8H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const PackageJson: FC<PackageJsonProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? PackageJsonLight : PackageJsonDark;

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
