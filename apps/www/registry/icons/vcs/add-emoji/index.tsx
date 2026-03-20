import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type AddEmojiProps = IconProps;

const AddEmojiLight: FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5 11a.5.5 0 0 0-.5.5V13h-1.5a.5.5 0 0 0 0 1H13v1.5a.5.5 0 0 0 1 0V14h1.5a.5.5 0 0 0 0-1H14v-1.5a.5.5 0 0 0-.5-.5"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 8a6 6 0 1 1 11.659 2h1.051A7 7 0 1 0 10 14.71V13.66A6 6 0 0 1 2 8"
      fill="#6C707E"
    />
    <circle cx="6" cy="6" r="1" fill="#6C707E" />
    <circle cx="10" cy="6" r="1" fill="#6C707E" />
    <path
      d="M10.763 9.438c-1.019 2.13-4.518 2.09-5.544-.002"
      stroke="#6C707E"
      strokeLinecap="round"
    />
  </svg>
);

const AddEmojiDark: FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5 11a.5.5 0 0 0-.5.5V13h-1.5a.5.5 0 0 0 0 1H13v1.5a.5.5 0 0 0 1 0V14h1.5a.5.5 0 0 0 0-1H14v-1.5a.5.5 0 0 0-.5-.5"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 8a6 6 0 1 1 11.659 2h1.051A7 7 0 1 0 10 14.71V13.66A6 6 0 0 1 2 8"
      fill="#CED0D6"
    />
    <circle cx="6" cy="6" r="1" fill="#CED0D6" />
    <circle cx="10" cy="6" r="1" fill="#CED0D6" />
    <path
      d="M10.763 9.438c-1.019 2.13-4.518 2.09-5.544-.002"
      stroke="#CED0D6"
      strokeLinecap="round"
    />
  </svg>
);

export const AddEmoji: FC<AddEmojiProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? AddEmojiLight : AddEmojiDark;

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
