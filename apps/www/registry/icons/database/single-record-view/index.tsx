import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type SingleRecordViewProps = IconProps;

const SingleRecordViewLight: FC<SvgProps> = ({
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
    <path d="M12 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="#6C707E" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 16c-3 0-4-3-4-3s1-3 4-3 4 3 4 3-1 3-4 3m2.902-3.021.011.021-.01.021a4.4 4.4 0 0 1-.546.839C13.86 14.456 13.119 15 12 15s-1.86-.544-2.357-1.14a4.4 4.4 0 0 1-.545-.838L9.087 13l.01-.021c.116-.231.295-.537.546-.839C10.14 11.544 10.881 11 12 11s1.86.544 2.357 1.14c.251.302.43.607.545.838"
      fill="#6C707E"
    />
    <path
      d="M14 6H2v4h7c.74-.563 1.727-1 3-1 .767 0 1.432.16 2 .41z"
      fill="#EDF3FF"
    />
    <path
      d="M15 5H1v6h6.993q.054-.07.113-.14c.244-.293.54-.59.894-.86H2V6h12v3.41c.374.164.707.368 1 .591z"
      fill="#3574F0"
    />
    <path
      d="M3 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4.352a7 7 0 0 1-.23-.496l-.048-.126q-.047-.131-.09-.264L6.947 13H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5.41c.374.164.707.368 1 .591V4a2 2 0 0 0-2-2z"
      fill="#6C707E"
    />
  </svg>
);

const SingleRecordViewDark: FC<SvgProps> = ({
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
    <path d="M12 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="#CED0D6" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 16c-3 0-4-3-4-3s1-3 4-3 4 3 4 3-1 3-4 3m2.902-3.021.011.021-.01.021a4.4 4.4 0 0 1-.546.839C13.86 14.456 13.119 15 12 15s-1.86-.544-2.357-1.14a4.4 4.4 0 0 1-.545-.838L9.087 13l.01-.021c.116-.231.295-.537.546-.839C10.14 11.544 10.881 11 12 11s1.86.544 2.357 1.14c.251.302.43.607.545.838"
      fill="#CED0D6"
    />
    <path
      d="M14 6H2v4h7c.74-.563 1.727-1 3-1 .767 0 1.432.16 2 .41z"
      fill="#25324D"
    />
    <path
      d="M15 5H1v6h6.993q.054-.07.113-.14c.244-.293.54-.59.894-.86H2V6h12v3.41c.374.164.707.368 1 .591z"
      fill="#548AF7"
    />
    <path
      d="M3 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4.352a7 7 0 0 1-.23-.496l-.048-.126q-.047-.131-.09-.264L6.947 13H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5.41c.374.164.707.368 1 .591V4a2 2 0 0 0-2-2z"
      fill="#CED0D6"
    />
  </svg>
);

export const SingleRecordView: FC<SingleRecordViewProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? SingleRecordViewLight : SingleRecordViewDark;

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
