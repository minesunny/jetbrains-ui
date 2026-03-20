import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type InlayMicronautProps = IconProps;

const InlayMicronautLight: FC<SvgProps> = ({
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
    viewBox="0 0 12 12"
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
      d="M9.9 8.402c-.448.406-.61.574-1.105.92-.592.413-1.458.469-2.038.21-.475-.213-.916-.688-.868-1.404-.714.875-1.396 1.55-2.303 1.55-.869 0-1.07-.782-1.07-.782l-.117 1.022s-.188.98-.196 1.048c-.022.296-.179.376-.459.48A82 82 0 0 1 .21 12c.857-4.017 1.52-7.017 2.363-11h1.776c-.275 1.302-1.314 6.25-1.322 6.323-.07.7.492.92 1.067.92.47 0 1.726-.526 1.898-1.336C6.407 4.953 7.057 1.89 7.254 1h1.751c-.238 1.14-1.008 4.843-1.29 6.21q-.036.18-.029.363c-.02.318.22.584.5.67.28.085.628.032.897-.115q.432-.243.833-.534.424-.313.796-.687a.98.98 0 0 1 .913-.217c-.595.59-1.141 1.174-1.725 1.712"
      fill="#6C707E"
    />
  </svg>
);

const InlayMicronautDark: FC<SvgProps> = ({
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
    viewBox="0 0 12 12"
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
      d="M9.9 8.402c-.448.406-.61.574-1.105.92-.592.413-1.458.469-2.038.21-.475-.213-.916-.688-.868-1.404-.714.875-1.396 1.55-2.303 1.55-.869 0-1.07-.782-1.07-.782l-.117 1.022s-.188.98-.196 1.048c-.022.296-.179.376-.459.48A82 82 0 0 1 .21 12c.857-4.017 1.52-7.017 2.363-11h1.776c-.275 1.302-1.314 6.25-1.322 6.323-.07.7.492.92 1.067.92.47 0 1.726-.526 1.898-1.336C6.407 4.953 7.057 1.89 7.254 1h1.751c-.238 1.14-1.008 4.843-1.29 6.21q-.036.18-.029.363c-.02.318.22.584.5.67.28.085.628.032.897-.115q.432-.243.833-.534.424-.313.796-.687a.98.98 0 0 1 .913-.217c-.595.59-1.141 1.174-1.725 1.712"
      fill="#CED0D6"
    />
  </svg>
);

export const InlayMicronaut: FC<InlayMicronautProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? InlayMicronautLight : InlayMicronautDark;

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
