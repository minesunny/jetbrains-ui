import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type WerfProps = IconProps;

const WerfLight: React.FC<SvgProps> = ({
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
      d="m11.996 8.657.531 1.589.928-1.59zm-.097-3.436V8.16h1.574zm-.498 1.66V4.506h-.794zM9.67 1.704l.771 2.304h.81L9.936 1.558l-.199.11zM8.585 14.502h1.18l-.445-.82-.148.16q-.262.32-.587.66m-.578-.748.02-4.787c-.127.074-.31.188-.525.338.02.591.115 2.604.505 4.449M6.66 9.962c.018.379.13 1.738.83 3.218a30 30 0 0 1-.376-3.59q-.232.18-.454.372m-.43 4.54h1.228l-.094-.11q-.346-.369-.658-.768zm-.394-3.718c.044.267.39 1.274 1.249 2.473a9.3 9.3 0 0 1-.801-2.948q-.234.228-.448.475m.621-2.468v1.139q.3-.26.625-.485c.55-.408.775-.492.916-.501v-.153zm-3.918.34.992 1.7.683-1.699zm1.794-2.696-1.717 2.2h1.717zm.498-.637V7.12L6.04 4.116l-.161-.133zm8.025 5.348h.916l.249.249v3.83l-.25.25H2.259l-.248-.249V10.92l.248-.249h.88L1.892 8.534l.018-.279 3.734-4.78.339-.037.006-.008 1.677 1.258-.299.398-.906-.68L3.849 10.9l1.954 3.344.578-1.064c-.98-1.423-1.051-2.403-1.055-2.458l.059-.175q.274-.327.574-.628V8.067l.25-.249h3.578l.248.25V9.86q.307.3.633.686l.058.175c-.003.056-.076 1.056-1.087 2.505l.553 1.017 2.002-3.426-2.968-8.869-.814.45-.24-.437L9.916 1l.34.1 3.852 7.19-.004.244z"
      fill="#4682FA"
    />
  </svg>
);

const WerfDark: React.FC<SvgProps> = ({
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
      d="m11.996 8.657.531 1.589.928-1.59zm-.097-3.436V8.16h1.574zm-.498 1.66V4.506h-.794zM9.67 1.704l.771 2.304h.81L9.936 1.558l-.199.11zM8.585 14.502h1.18l-.445-.82-.148.16q-.262.32-.587.66m-.578-.748.02-4.787c-.127.074-.31.188-.525.338.02.591.115 2.604.505 4.449M6.66 9.962c.018.379.13 1.738.83 3.218a30 30 0 0 1-.376-3.59q-.232.18-.454.372m-.43 4.54h1.228l-.094-.11q-.346-.369-.658-.768zm-.394-3.718c.044.267.39 1.274 1.249 2.473a9.3 9.3 0 0 1-.801-2.948q-.234.228-.448.475m.621-2.468v1.139q.3-.26.625-.485c.55-.408.775-.492.916-.501v-.153zm-3.918.34.992 1.7.683-1.699zm1.794-2.696-1.717 2.2h1.717zm.498-.637V7.12L6.04 4.116l-.161-.133zm8.025 5.348h.916l.249.249v3.83l-.25.25H2.259l-.248-.249V10.92l.248-.249h.88L1.892 8.534l.018-.279 3.734-4.78.339-.037.006-.008 1.677 1.258-.299.398-.906-.68L3.849 10.9l1.954 3.344.578-1.064c-.98-1.423-1.051-2.403-1.055-2.458l.059-.175q.274-.327.574-.628V8.067l.25-.249h3.578l.248.25V9.86q.307.3.633.686l.058.175c-.003.056-.076 1.056-1.087 2.505l.553 1.017 2.002-3.426-2.968-8.869-.814.45-.24-.437L9.916 1l.34.1 3.852 7.19-.004.244z"
      fill="#548AF7"
    />
  </svg>
);

export const Werf: React.FC<WerfProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? WerfLight : WerfDark;

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
