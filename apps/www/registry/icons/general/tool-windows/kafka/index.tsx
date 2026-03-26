import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type KafkaProps = IconProps;

const KafkaLight: FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.25 2.75A1.75 1.75 0 0 1 7 4.428v1.03c.638.11 1.196.455 1.581.942l1.195-.597a1.75 1.75 0 1 1 .447.894l-1.185.593a2.6 2.6 0 0 1 0 1.42l1.185.593a1.75 1.75 0 1 1-.447.894L8.581 9.6A2.58 2.58 0 0 1 7 10.54v1.031a1.75 1.75 0 1 1-.994-.001V10.52a2.58 2.58 0 0 1 0-5.04V4.43A1.75 1.75 0 1 1 8.25 2.75M6.5 3.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m.058 6.017a1.517 1.517 0 1 0 0-3.034 1.517 1.517 0 0 0 0 3.034m.692 3.733a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m5-7.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.75 5.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
      fill="#6C707E"
    />
  </svg>
);

const KafkaDark: FC<SvgProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.25 2.75A1.75 1.75 0 0 1 7 4.428v1.03c.638.11 1.196.455 1.581.942l1.195-.597a1.75 1.75 0 1 1 .447.894l-1.185.593a2.6 2.6 0 0 1 0 1.42l1.185.593a1.75 1.75 0 1 1-.447.894L8.581 9.6A2.58 2.58 0 0 1 7 10.54v1.031a1.75 1.75 0 1 1-.994-.001V10.52a2.58 2.58 0 0 1 0-5.04V4.43A1.75 1.75 0 1 1 8.25 2.75M6.5 3.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m.058 6.017a1.517 1.517 0 1 0 0-3.034 1.517 1.517 0 0 0 0 3.034m.692 3.733a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m5-7.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.75 5.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
      fill="#CED0D6"
    />
  </svg>
);

export const Kafka: FC<KafkaProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? KafkaLight : KafkaDark;

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
