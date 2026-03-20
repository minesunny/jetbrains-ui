import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type GraphQLSchemaProps = IconProps;

const GraphQLSchemaLight: React.FC<SvgProps> = ({
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
      d="m14.133 6.991-1.389-.793a1.5 1.5 0 0 0-1.488 0l-.937.535A1 1 0 0 1 10 6V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-.867.991M8 8.058l-.244.14A1.5 1.5 0 0 0 7 9.5V14H2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1z"
      fill="#EBECF0"
    />
    <path
      d="m14.133 6.991-1.389-.793A1.5 1.5 0 0 0 12 6h2V3h-3v3h1a1.5 1.5 0 0 0-.744.198l-.937.535A1 1 0 0 1 10 6V5H5v2h2a1 1 0 0 1 1 1v.058l-.244.14A1.5 1.5 0 0 0 7 9.5V8H2v5h5v1H2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2V5a1 1 0 0 1 1-1h5V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-.867.991"
      fill="#6C707E"
    />
    <path
      d="M15.5 9.5v4l-3.5 2-3.5-2v-4l3.5-2z"
      stroke="#DF0098"
      strokeLinejoin="round"
    />
    <path d="M15 13.5H9L12 8z" stroke="#DF0098" strokeLinejoin="round" />
  </svg>
);

const GraphQLSchemaDark: React.FC<SvgProps> = ({
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
      d="m14.133 6.991-1.389-.793a1.5 1.5 0 0 0-1.488 0l-.937.535A1 1 0 0 1 10 6V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-.867.991M8 8.058l-.244.14A1.5 1.5 0 0 0 7 9.5V14H2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1z"
      fill="#43454A"
    />
    <path
      d="m14.133 6.991-1.389-.793A1.5 1.5 0 0 0 12 6h2V3h-3v3h1a1.5 1.5 0 0 0-.744.198l-.937.535A1 1 0 0 1 10 6V5H5v2h2a1 1 0 0 1 1 1v.058l-.244.14A1.5 1.5 0 0 0 7 9.5V8H2v5h5v1H2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2V5a1 1 0 0 1 1-1h5V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-.867.991"
      fill="#CED0D6"
    />
    <path
      d="M15.5 9.5v4l-3.5 2-3.5-2v-4l3.5-2z"
      stroke="#FF31CA"
      strokeLinejoin="round"
    />
    <path d="M15 13.5H9L12 8z" stroke="#FF31CA" strokeLinejoin="round" />
  </svg>
);

export const GraphQLSchema: React.FC<GraphQLSchemaProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? GraphQLSchemaLight : GraphQLSchemaDark;

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
