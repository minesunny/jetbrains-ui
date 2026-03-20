import type { FC } from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../types';

export type JsonSchemaProps = IconProps;

const JsonSchemaLight: FC<SvgProps> = ({
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
      d="M3.605 8.855q.398.345.383.923l-.03 1.792q-.007.735.315 1.282.33.555.93.848.608.3 1.41.3h.437c.075-.37.232-.71.45-1v-.005h-.88q-.712 0-1.132-.397-.413-.39-.398-1.05l.03-1.778q.015-.697-.412-1.185-.428-.495-1.155-.63.728-.052 1.155-.532.427-.488.412-1.253l-.03-1.567q-.007-.735.443-1.163.457-.435 1.237-.435h.73V2h-.737q-.863 0-1.5.315-.638.315-.983.9-.337.585-.322 1.365l.03 1.583q.015.577-.383.922-.397.345-1.072.345H2v1.08h.533q.675 0 1.072.345M13.134 7.406c-.245.16-.46.361-.634.594h-.249q.096-.026.199-.045-.728-.052-1.155-.532-.428-.488-.413-1.253l.03-1.567q.008-.735-.45-1.163-.45-.435-1.23-.435H8.5V2h.74q.862 0 1.5.315t.974.9q.345.585.33 1.365l-.03 1.583q-.015.577.383.922.292.255.737.321"
      fill="#834DF0"
    />
    <g clipPath="url(#a)">
      <path
        d="M16 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M11 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M11 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
        fill="#EBECF0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.915 9A1.5 1.5 0 1 0 9 10.915v2.17A1.5 1.5 0 1 0 10.915 15h2.17A1.5 1.5 0 1 0 15 13.085v-2.17A1.5 1.5 0 1 0 13.085 9zM10 9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 1.415v2.17c.426.151.764.489.915.915h2.17c.151-.426.489-.764.915-.915v-2.17a1.5 1.5 0 0 1-.915-.915h-2.17c-.151.426-.489.764-.915.915M9.5 15a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m5 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m0-5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
        fill="#6C707E"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(8 8)" d="M0 0H8V8H0z" />
      </clipPath>
    </defs>
  </svg>
);

const JsonSchemaDark: FC<SvgProps> = ({
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
      d="M3.605 8.855q.398.345.383.923l-.03 1.792q-.007.735.315 1.282.33.555.93.848.608.3 1.41.3h.437c.075-.37.232-.71.45-1v-.005h-.88q-.712 0-1.132-.397-.413-.39-.398-1.05l.03-1.778q.015-.697-.412-1.185-.428-.495-1.155-.63.728-.052 1.155-.532.427-.488.412-1.253l-.03-1.567q-.007-.735.443-1.163.457-.435 1.237-.435h.73V2h-.737q-.863 0-1.5.315-.638.315-.983.9-.337.585-.322 1.365l.03 1.583q.015.577-.383.922-.397.345-1.072.345H2v1.08h.533q.675 0 1.072.345M13.134 7.406c-.245.16-.46.361-.634.594h-.249q.096-.026.199-.045-.728-.052-1.155-.532-.428-.488-.413-1.253l.03-1.567q.008-.735-.45-1.163-.45-.435-1.23-.435H8.5V2h.74q.862 0 1.5.315t.974.9q.345.585.33 1.365l-.03 1.583q-.015.577.383.922.292.255.737.321"
      fill="#A571E6"
    />
    <g clipPath="url(#a)">
      <path
        d="M16 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M11 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M11 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
        fill="#43454A"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.915 9A1.5 1.5 0 1 0 9 10.915v2.17A1.5 1.5 0 1 0 10.915 15h2.17A1.5 1.5 0 1 0 15 13.085v-2.17A1.5 1.5 0 1 0 13.085 9zM10 9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 1.415v2.17c.426.151.764.489.915.915h2.17c.151-.426.489-.764.915-.915v-2.17a1.5 1.5 0 0 1-.915-.915h-2.17c-.151.426-.489.764-.915.915M9.5 15a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m5 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m0-5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"
        fill="#CED0D6"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(8 8)" d="M0 0H8V8H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const JsonSchema: FC<JsonSchemaProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? JsonSchemaLight : JsonSchemaDark;

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
