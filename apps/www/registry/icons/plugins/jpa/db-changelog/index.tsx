import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type DbChangelogProps = IconProps;

const DbChangelogLight: React.FC<SvgProps> = ({
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
    <path d="M12 12h2v-1h-2zM12 14h2v-1h-2z" fill="#3574F0" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 9a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm4 1h-4v5h4z"
      fill="#3574F0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.017 3.392H2v9.126h.003c.028.444.274.816.594 1.106.34.307.804.561 1.335.764 1.066.408 2.504.65 4.068.65q.51 0 1-.034V14q-.485.036-1 .036c-1.474 0-2.785-.23-3.71-.583-.465-.177-.806-.377-1.022-.572-.217-.196-.268-.348-.268-.448v-1.449c.272.175.588.328.932.46 1.066.407 2.504.648 4.068.648q.51 0 1-.033v-1.003q-.485.036-1 .036c-1.474 0-2.785-.229-3.71-.583-.465-.177-.806-.376-1.022-.572C3.05 9.742 3 9.59 3 9.49V8.041c.272.175.588.328.932.46 1.066.407 2.504.648 4.068.648q.623 0 1.214-.05A2 2 0 0 1 11 8h3V3.392h-.017c-.062-.388-.29-.717-.58-.979-.34-.307-.804-.561-1.335-.764C11.002 1.24 9.564 1 8 1s-3.002.241-4.068.649c-.53.203-.995.457-1.335.764-.29.262-.518.591-.58.98m1.25-.237c-.216.196-.267.348-.267.448s.051.252.268.447c.216.196.557.395 1.021.573.926.353 2.237.582 3.711.582s2.786-.229 3.71-.582c.465-.178.806-.377 1.022-.573.217-.195.268-.347.268-.447s-.051-.252-.268-.448c-.216-.195-.557-.395-1.021-.572C10.785 2.229 9.474 2 8 2s-2.785.23-3.71.583c-.465.177-.806.377-1.022.572M3 5.097v1.45c0 .1.051.252.268.447.216.196.557.395 1.021.572.926.354 2.237.583 3.711.583s2.786-.229 3.71-.583c.465-.177.806-.376 1.022-.572.217-.195.268-.348.268-.447v-1.45a5 5 0 0 1-.932.46c-1.066.407-2.504.648-4.068.648s-3.002-.241-4.068-.648A5 5 0 0 1 3 5.097"
      fill="#6C707E"
    />
  </svg>
);

const DbChangelogDark: React.FC<SvgProps> = ({
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
    <path d="M12 12h2v-1h-2zM12 14h2v-1h-2z" fill="#548AF7" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 9a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm4 1h-4v5h4z"
      fill="#548AF7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.017 3.392H2v9.126h.003c.028.444.274.816.594 1.106.34.307.804.561 1.335.764 1.066.408 2.504.65 4.068.65q.51 0 1-.034V14q-.485.036-1 .036c-1.474 0-2.785-.23-3.71-.583-.465-.177-.806-.377-1.022-.572-.217-.196-.268-.348-.268-.448v-1.449c.272.175.588.328.932.46 1.066.407 2.504.648 4.068.648q.51 0 1-.033v-1.003q-.485.036-1 .036c-1.474 0-2.785-.229-3.71-.583-.465-.177-.806-.376-1.022-.572C3.05 9.742 3 9.59 3 9.49V8.041c.272.175.588.328.932.46 1.066.407 2.504.648 4.068.648q.623 0 1.214-.05A2 2 0 0 1 11 8h3V3.392h-.017c-.062-.388-.29-.717-.58-.979-.34-.307-.804-.561-1.335-.764C11.002 1.24 9.564 1 8 1s-3.002.241-4.068.649c-.53.203-.995.457-1.335.764-.29.262-.518.591-.58.98m1.25-.237c-.216.196-.267.348-.267.448s.051.252.268.447c.216.196.557.395 1.021.573.926.353 2.237.582 3.711.582s2.786-.229 3.71-.582c.465-.178.806-.377 1.022-.573.217-.195.268-.347.268-.447s-.051-.252-.268-.448c-.216-.195-.557-.395-1.021-.572C10.785 2.229 9.474 2 8 2s-2.785.23-3.71.583c-.465.177-.806.377-1.022.572M3 5.097v1.45c0 .1.051.252.268.447.216.196.557.395 1.021.572.926.354 2.237.583 3.711.583s2.786-.229 3.71-.583c.465-.177.806-.376 1.022-.572.217-.195.268-.348.268-.447v-1.45a5 5 0 0 1-.932.46c-1.066.407-2.504.648-4.068.648s-3.002-.241-4.068-.648A5 5 0 0 1 3 5.097"
      fill="#CED0D6"
    />
  </svg>
);

export const DbChangelog: React.FC<DbChangelogProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? DbChangelogLight : DbChangelogDark;

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
