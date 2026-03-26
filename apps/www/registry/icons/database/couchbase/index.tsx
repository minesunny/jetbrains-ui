import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type CouchbaseProps = IconProps;

const CouchbaseLight: FC<SvgProps> = ({
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
      d="M8 1C4.14 1 1 4.13 1 8c0 3.86 3.13 7 7 7 3.86 0 7-3.13 7-7s-3.14-7-7-7m4.727 8.227c0 .423-.244.793-.72.877-.824.148-2.558.233-4.007.233s-3.183-.085-4.008-.233c-.475-.084-.719-.454-.719-.877V6.498c0-.422.328-.814.72-.877a9 9 0 0 1 1.258-.085c.169 0 .306.127.306.328v1.914l2.454-.053 2.453.053V5.864c0-.2.137-.328.306-.328.444 0 1.016.043 1.259.085.402.063.719.455.719.877-.021.9-.021 1.82-.021 2.729"
      fill="#ED2226"
    />
    <path
      d="M12.727 9.227c0 .423-.244.793-.72.877-.824.148-2.558.233-4.007.233s-3.183-.085-4.008-.233c-.475-.084-.719-.454-.719-.877V6.499c0-.423.328-.815.72-.878a9 9 0 0 1 1.258-.085c.169 0 .306.127.306.328v1.914l2.454-.053 2.453.053V5.864c0-.2.137-.328.306-.328.444 0 1.016.043 1.259.085.402.063.719.455.719.878-.021.898-.021 1.818-.021 2.728"
      fill="#fff"
    />
  </svg>
);

const CouchbaseDark: FC<SvgProps> = ({
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
      d="M8 1C4.14 1 1 4.13 1 8c0 3.86 3.13 7 7 7 3.86 0 7-3.13 7-7s-3.14-7-7-7m4.727 8.227c0 .423-.244.793-.72.877-.824.148-2.558.233-4.007.233s-3.183-.085-4.008-.233c-.475-.084-.719-.454-.719-.877V6.498c0-.422.328-.814.72-.877a9 9 0 0 1 1.258-.085c.169 0 .306.127.306.328v1.914l2.454-.053 2.453.053V5.864c0-.2.137-.328.306-.328.444 0 1.016.043 1.259.085.402.063.719.455.719.877-.021.9-.021 1.82-.021 2.729"
      fill="#ED2226"
    />
    <path
      d="M12.727 9.227c0 .423-.244.793-.72.877-.824.148-2.558.233-4.007.233s-3.183-.085-4.008-.233c-.475-.084-.719-.454-.719-.877V6.499c0-.423.328-.815.72-.878a9 9 0 0 1 1.258-.085c.169 0 .306.127.306.328v1.914l2.454-.053 2.453.053V5.864c0-.2.137-.328.306-.328.444 0 1.016.043 1.259.085.402.063.719.455.719.878-.021.898-.021 1.818-.021 2.728"
      fill="#fff"
    />
  </svg>
);

export const Couchbase: FC<CouchbaseProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? CouchbaseLight : CouchbaseDark;

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
