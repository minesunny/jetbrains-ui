import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type AnnotationFolderProps = IconProps;

const AnnotationFolderLight: FC<SvgProps> = ({
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
      d="m10 16 2.31-6.3h1.28l2.39 6.3h-1.091l-.571-1.602h-2.673L11.109 16zm3.977-2.547-.928-2.556-.104-.387-.104.387-.878 2.556z"
      fill="#6C707E"
    />
    <path
      d="M1 3.867C1 2.836 1.731 2 2.633 2h3.489a1 1 0 0 1 .721.308L8.467 4H13a2 2 0 0 1 2 2v2.7h-3.389L9.668 14H2.633C1.731 14 1 13.164 1 12.133z"
      fill="#EBECF0"
    />
    <path
      d="M2.633 3h3.489L8.04 5H13a1 1 0 0 1 1 1v2.7h1V6a2 2 0 0 0-2-2H8.467L6.843 2.308A1 1 0 0 0 6.122 2H2.633C1.731 2 1 2.836 1 3.867v8.266C1 13.164 1.731 14 2.633 14h7.035l.367-1H2.633C2.405 13 2 12.742 2 12.133V3.867C2 3.258 2.405 3 2.633 3"
      fill="#6C707E"
    />
  </svg>
);

const AnnotationFolderDark: FC<SvgProps> = ({
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
      d="m10 16 2.31-6.3h1.28l2.39 6.3h-1.091l-.571-1.602h-2.673L11.109 16zm3.977-2.547-.928-2.556-.104-.387-.104.387-.878 2.556z"
      fill="#CED0D6"
    />
    <path
      d="M1 3.867C1 2.836 1.731 2 2.633 2h3.489a1 1 0 0 1 .721.308L8.467 4H13a2 2 0 0 1 2 2v2.7h-3.389L9.668 14H2.633C1.731 14 1 13.164 1 12.133z"
      fill="#43454A"
    />
    <path
      d="M2.633 3h3.489L8.04 5H13a1 1 0 0 1 1 1v2.7h1V6a2 2 0 0 0-2-2H8.467L6.843 2.308A1 1 0 0 0 6.122 2H2.633C1.731 2 1 2.836 1 3.867v8.266C1 13.164 1.731 14 2.633 14h7.035l.367-1H2.633C2.405 13 2 12.742 2 12.133V3.867C2 3.258 2.405 3 2.633 3"
      fill="#CED0D6"
    />
  </svg>
);

export const AnnotationFolder: FC<AnnotationFolderProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? AnnotationFolderLight : AnnotationFolderDark;

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
