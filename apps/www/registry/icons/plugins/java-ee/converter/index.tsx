import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ConverterProps = IconProps;

const ConverterLight: React.FC<SvgProps> = ({
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
    <g clipPath="url(#a)">
      <path
        d="M2.146 15.854a.5.5 0 0 0 .708-.708L1.707 14H6.5a.5.5 0 0 0 0-1H1.707l1.147-1.146a.5.5 0 0 0-.708-.708l-2 2a.5.5 0 0 0 0 .708zM13.146 11.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 14H9.5a.5.5 0 0 1 0-1h4.793l-1.147-1.146a.5.5 0 0 1 0-.708"
        fill="#E66D17"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.017 3.392H2v6.693a1.5 1.5 0 0 1 2 1.385c1.058.392 2.469.623 4 .623s2.942-.231 4-.623a1.5 1.5 0 0 1 2-1.384V3.391h-.017c-.062-.388-.29-.717-.58-.979-.34-.307-.804-.561-1.335-.764C11.002 1.24 9.564 1 8 1s-3.002.241-4.068.649c-.53.203-.995.457-1.335.764-.29.262-.518.591-.58.98m1.25-.237c-.216.196-.267.348-.267.448s.051.252.268.447c.216.196.557.395 1.021.573.926.353 2.237.582 3.711.582s2.786-.229 3.71-.582c.465-.178.806-.377 1.022-.573.217-.195.268-.347.268-.447s-.051-.252-.268-.448c-.216-.195-.557-.395-1.021-.572C10.785 2.229 9.474 2 8 2s-2.785.23-3.71.583c-.465.177-.806.377-1.022.572M3 5.097v1.45c0 .1.051.252.268.447.216.196.557.395 1.021.572.926.354 2.237.583 3.711.583s2.786-.229 3.71-.583c.465-.177.806-.376 1.022-.572.217-.195.268-.348.268-.447v-1.45a5 5 0 0 1-.932.46c-1.066.407-2.504.648-4.068.648s-3.002-.241-4.068-.648A5 5 0 0 1 3 5.097M3 9.49V8.041c.272.175.588.328.932.46 1.066.407 2.504.648 4.068.648s3.002-.241 4.068-.648c.344-.132.66-.285.932-.46v1.45c0 .1-.051.251-.268.447-.216.196-.557.395-1.021.572-.925.354-2.237.583-3.711.583s-2.785-.229-3.71-.583c-.465-.177-.806-.376-1.022-.572C3.05 9.742 3 9.59 3 9.49"
        fill="#6C707E"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

const ConverterDark: React.FC<SvgProps> = ({
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
    <g clipPath="url(#a)">
      <path
        d="M2.146 15.854a.5.5 0 0 0 .708-.708L1.707 14H6.5a.5.5 0 0 0 0-1H1.707l1.147-1.146a.5.5 0 0 0-.708-.708l-2 2a.5.5 0 0 0 0 .708zM13.146 11.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 14H9.5a.5.5 0 0 1 0-1h4.793l-1.147-1.146a.5.5 0 0 1 0-.708"
        fill="#C77D55"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.017 3.392H2v6.693a1.5 1.5 0 0 1 2 1.385c1.058.392 2.469.623 4 .623s2.942-.231 4-.623a1.5 1.5 0 0 1 2-1.384V3.391h-.017c-.062-.388-.29-.717-.58-.979-.34-.307-.804-.561-1.335-.764C11.002 1.24 9.564 1 8 1s-3.002.241-4.068.649c-.53.203-.995.457-1.335.764-.29.262-.518.591-.58.98m1.25-.237c-.216.196-.267.348-.267.448s.051.252.268.447c.216.196.557.395 1.021.573.926.353 2.237.582 3.711.582s2.786-.229 3.71-.582c.465-.178.806-.377 1.022-.573.217-.195.268-.347.268-.447s-.051-.252-.268-.448c-.216-.195-.557-.395-1.021-.572C10.785 2.229 9.474 2 8 2s-2.785.23-3.71.583c-.465.177-.806.377-1.022.572M3 5.097v1.45c0 .1.051.252.268.447.216.196.557.395 1.021.572.926.354 2.237.583 3.711.583s2.786-.229 3.71-.583c.465-.177.806-.376 1.022-.572.217-.195.268-.348.268-.447v-1.45a5 5 0 0 1-.932.46c-1.066.407-2.504.648-4.068.648s-3.002-.241-4.068-.648A5 5 0 0 1 3 5.097M3 9.49V8.041c.272.175.588.328.932.46 1.066.407 2.504.648 4.068.648s3.002-.241 4.068-.648c.344-.132.66-.285.932-.46v1.45c0 .1-.051.251-.268.447-.216.196-.557.395-1.021.572-.925.354-2.237.583-3.711.583s-2.785-.229-3.71-.583c-.465-.177-.806-.376-1.022-.572C3.05 9.742 3 9.59 3 9.49"
        fill="#CED0D6"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H16V16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const Converter: React.FC<ConverterProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? ConverterLight : ConverterDark;

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
