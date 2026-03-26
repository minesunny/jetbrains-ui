import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type LiquibaseUpdateProps = IconProps;

const LiquibaseUpdateLight: React.FC<SvgProps> = ({
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
      d="M12.146 8.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L13 9.707V15.5a.5.5 0 0 1-1 0V9.707l-2.146 2.147a.5.5 0 0 1-.708-.708z"
      fill="#3574F0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 3.392h.017c.062-.388.29-.717.58-.979.34-.307.804-.561 1.335-.764C4.998 1.24 6.436 1 8 1s3.002.241 4.068.649c.53.203.995.457 1.335.764.29.262.518.591.58.98H14v4.486l-.44-.44c-.239-.24-.54-.38-.85-.424l.022-.02c.217-.196.268-.349.268-.448v-1.45a5 5 0 0 1-.932.46c-1.066.407-2.504.648-4.068.648s-3.002-.241-4.068-.648A5 5 0 0 1 3 5.097v1.45c0 .1.051.252.268.447.216.196.557.395 1.021.572.926.354 2.237.583 3.711.583 1.182 0 2.26-.147 3.118-.388L9.846 9.032C9.263 9.11 8.642 9.15 8 9.15c-1.564 0-3.002-.241-4.068-.648A5 5 0 0 1 3 8.04v1.45c0 .1.051.251.268.447.216.196.557.395 1.021.572.926.354 2.237.583 3.711.583v1c-1.564 0-3.002-.241-4.068-.649A5 5 0 0 1 3 10.985v1.45c0 .1.051.251.268.447.216.196.557.395 1.021.572.926.354 2.237.583 3.711.583v1c-1.564 0-3.002-.241-4.068-.649-.53-.203-.995-.457-1.335-.764-.32-.29-.566-.662-.594-1.106H2zm1 .21c0-.1.051-.251.268-.447.216-.195.557-.395 1.021-.572C5.215 2.229 6.526 2 8 2s2.786.23 3.71.583c.465.177.806.377 1.022.572.217.196.268.348.268.448s-.051.252-.268.447c-.216.196-.557.395-1.021.573-.925.353-2.237.582-3.711.582s-2.785-.229-3.71-.582c-.465-.178-.806-.377-1.022-.573C3.05 3.855 3 3.703 3 3.603"
      fill="#6C707E"
    />
  </svg>
);

const LiquibaseUpdateDark: React.FC<SvgProps> = ({
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
      d="M12.146 8.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L13 9.707V15.5a.5.5 0 0 1-1 0V9.707l-2.146 2.147a.5.5 0 0 1-.708-.708z"
      fill="#548AF7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 3.392h.017c.062-.388.29-.717.58-.979.34-.307.804-.561 1.335-.764C4.998 1.24 6.436 1 8 1s3.002.241 4.068.649c.53.203.995.457 1.335.764.29.262.518.591.58.98H14v4.486l-.44-.44c-.239-.24-.54-.38-.85-.424l.022-.02c.217-.196.268-.349.268-.448v-1.45a5 5 0 0 1-.932.46c-1.066.407-2.504.648-4.068.648s-3.002-.241-4.068-.648A5 5 0 0 1 3 5.097v1.45c0 .1.051.252.268.447.216.196.557.395 1.021.572.926.354 2.237.583 3.711.583 1.182 0 2.26-.147 3.118-.388L9.846 9.032C9.263 9.11 8.642 9.15 8 9.15c-1.564 0-3.002-.241-4.068-.648A5 5 0 0 1 3 8.04v1.45c0 .1.051.251.268.447.216.196.557.395 1.021.572.926.354 2.237.583 3.711.583v1c-1.564 0-3.002-.241-4.068-.649A5 5 0 0 1 3 10.985v1.45c0 .1.051.251.268.447.216.196.557.395 1.021.572.926.354 2.237.583 3.711.583v1c-1.564 0-3.002-.241-4.068-.649-.53-.203-.995-.457-1.335-.764-.32-.29-.566-.662-.594-1.106H2zm1 .21c0-.1.051-.251.268-.447.216-.195.557-.395 1.021-.572C5.215 2.229 6.526 2 8 2s2.786.23 3.71.583c.465.177.806.377 1.022.572.217.196.268.348.268.448s-.051.252-.268.447c-.216.196-.557.395-1.021.573-.925.353-2.237.582-3.711.582s-2.785-.229-3.71-.582c-.465-.178-.806-.377-1.022-.573C3.05 3.855 3 3.703 3 3.603"
      fill="#CED0D6"
    />
  </svg>
);

export const LiquibaseUpdate: React.FC<LiquibaseUpdateProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? LiquibaseUpdateLight : LiquibaseUpdateDark;

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
