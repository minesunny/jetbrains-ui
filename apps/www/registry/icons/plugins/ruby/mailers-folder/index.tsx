import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type MailersFolderProps = IconProps;

const MailersFolderLight: React.FC<SvgProps> = ({
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
      d="M1 3.867C1 2.836 1.731 2 2.633 2h3.489a1 1 0 0 1 .721.308L8.467 4H13a2 2 0 0 1 2 2v3H9a2 2 0 0 0-2 2v3H2.633C1.731 14 1 13.164 1 12.133z"
      fill="#EBECF0"
    />
    <path
      d="M2.633 3h3.489L8.04 5H13a1 1 0 0 1 1 1v3h1V6a2 2 0 0 0-2-2H8.467L6.843 2.308A1 1 0 0 0 6.122 2H2.633C1.731 2 1 2.836 1 3.867v8.266C1 13.164 1.731 14 2.633 14H7v-1H2.633C2.405 13 2 12.742 2 12.133V3.867C2 3.258 2.405 3 2.633 3"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.64 11H9.36L12 12.886zM9 11.972l2.71 1.935a.5.5 0 0 0 .58 0L15 11.972V15H9zM8 15v-4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1"
      fill="#3574F0"
    />
  </svg>
);

const MailersFolderDark: React.FC<SvgProps> = ({
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
      d="M1 3.867C1 2.836 1.731 2 2.633 2h3.489a1 1 0 0 1 .721.308L8.467 4H13a2 2 0 0 1 2 2v3H9a2 2 0 0 0-2 2v3H2.633C1.731 14 1 13.164 1 12.133z"
      fill="#43454A"
    />
    <path
      d="M2.633 3h3.489L8.04 5H13a1 1 0 0 1 1 1v3h1V6a2 2 0 0 0-2-2H8.467L6.843 2.308A1 1 0 0 0 6.122 2H2.633C1.731 2 1 2.836 1 3.867v8.266C1 13.164 1.731 14 2.633 14H7v-1H2.633C2.405 13 2 12.742 2 12.133V3.867C2 3.258 2.405 3 2.633 3"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.64 11H9.36L12 12.886zM9 11.972l2.71 1.935a.5.5 0 0 0 .58 0L15 11.972V15H9zM8 15v-4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1"
      fill="#548AF7"
    />
  </svg>
);

export const MailersFolder: React.FC<MailersFolderProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? MailersFolderLight : MailersFolderDark;

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
