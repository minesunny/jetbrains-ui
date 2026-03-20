import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type ControllerFolderProps = IconProps;

const ControllerFolderLight: React.FC<SvgProps> = ({
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
    <path d="M11.999 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="#3574F0" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.12 15.676a.5.5 0 0 1-.468.324h-1.307a.5.5 0 0 1-.468-.324l-.25-.666a.5.5 0 0 0-.55-.317l-.7.116a.5.5 0 0 1-.516-.243l-.653-1.132a.5.5 0 0 1 .047-.568l.45-.548a.5.5 0 0 0 0-.636l-.45-.548a.5.5 0 0 1-.047-.568l.653-1.132a.5.5 0 0 1 .515-.243l.701.116a.5.5 0 0 0 .55-.317l.25-.666A.5.5 0 0 1 11.345 8h1.307a.5.5 0 0 1 .468.324l.25.666a.5.5 0 0 0 .55.317l.7-.116a.5.5 0 0 1 .516.243l.653 1.132a.5.5 0 0 1-.047.568l-.451.548a.5.5 0 0 0 0 .636l.451.548a.5.5 0 0 1 .047.568l-.653 1.132a.5.5 0 0 1-.515.243l-.701-.116a.5.5 0 0 0-.55.317zM11.692 15h.614l.127-.34a1.5 1.5 0 0 1 1.65-.954l.36.06.307-.532-.231-.281a1.5 1.5 0 0 1 0-1.906l.231-.281-.307-.532-.36.06a1.5 1.5 0 0 1-1.65-.953L12.306 9h-.614l-.128.34a1.5 1.5 0 0 1-1.651.954l-.36-.06-.306.532.231.281a1.5 1.5 0 0 1 0 1.906l-.231.281.307.532.359-.06a1.5 1.5 0 0 1 1.65.953z"
      fill="#3574F0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.309 15h-.614l-.128-.34a1.5 1.5 0 0 0-1.65-.954l-.36.06-.307-.532.231-.281a1.5 1.5 0 0 0 0-1.906l-.231-.281.307-.532.36.06a1.5 1.5 0 0 0 1.65-.953L11.695 9h.614l.127.34a1.5 1.5 0 0 0 1.651.954l.36-.06.306.532-.231.281a1.5 1.5 0 0 0 0 1.906l.231.281-.307.532-.359-.06a1.5 1.5 0 0 0-1.65.953zm.693-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      fill="#EDF3FF"
    />
    <path
      d="M1 3.867C1 2.836 1.731 2 2.633 2h3.489a1 1 0 0 1 .721.308L8.467 4H13a2 2 0 0 1 2 2v2a5 5 0 0 0-7.584 6H2.633C1.731 14 1 13.164 1 12.133z"
      fill="#EBECF0"
    />
    <path
      d="M2.633 3h3.489L8.04 5H13a1 1 0 0 1 1 1v1.416q.537.235 1 .584V6a2 2 0 0 0-2-2H8.467L6.843 2.308A1 1 0 0 0 6.122 2H2.633C1.731 2 1 2.836 1 3.867v8.266C1 13.164 1.731 14 2.633 14h4.783a5 5 0 0 1-.316-1H2.633C2.405 13 2 12.742 2 12.133V3.867C2 3.258 2.405 3 2.633 3"
      fill="#6C707E"
    />
  </svg>
);

const ControllerFolderDark: React.FC<SvgProps> = ({
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
    <path d="M11.999 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="#548AF7" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.12 15.676a.5.5 0 0 1-.468.324h-1.307a.5.5 0 0 1-.468-.324l-.25-.666a.5.5 0 0 0-.55-.317l-.7.116a.5.5 0 0 1-.516-.243l-.653-1.132a.5.5 0 0 1 .047-.568l.45-.548a.5.5 0 0 0 0-.636l-.45-.548a.5.5 0 0 1-.047-.568l.653-1.132a.5.5 0 0 1 .515-.243l.701.116a.5.5 0 0 0 .55-.317l.25-.666A.5.5 0 0 1 11.345 8h1.307a.5.5 0 0 1 .468.324l.25.666a.5.5 0 0 0 .55.317l.7-.116a.5.5 0 0 1 .516.243l.653 1.132a.5.5 0 0 1-.047.568l-.451.548a.5.5 0 0 0 0 .636l.451.548a.5.5 0 0 1 .047.568l-.653 1.132a.5.5 0 0 1-.515.243l-.701-.116a.5.5 0 0 0-.55.317zM11.692 15h.614l.127-.34a1.5 1.5 0 0 1 1.65-.954l.36.06.307-.532-.231-.281a1.5 1.5 0 0 1 0-1.906l.231-.281-.307-.532-.36.06a1.5 1.5 0 0 1-1.65-.953L12.306 9h-.614l-.128.34a1.5 1.5 0 0 1-1.651.954l-.36-.06-.306.532.231.281a1.5 1.5 0 0 1 0 1.906l-.231.281.307.532.359-.06a1.5 1.5 0 0 1 1.65.953z"
      fill="#548AF7"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.309 15h-.614l-.128-.34a1.5 1.5 0 0 0-1.65-.954l-.36.06-.307-.532.231-.281a1.5 1.5 0 0 0 0-1.906l-.231-.281.307-.532.36.06a1.5 1.5 0 0 0 1.65-.953L11.695 9h.614l.127.34a1.5 1.5 0 0 0 1.651.954l.36-.06.306.532-.231.281a1.5 1.5 0 0 0 0 1.906l.231.281-.307.532-.359-.06a1.5 1.5 0 0 0-1.65.953zm.693-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
      fill="#25324D"
    />
    <path
      d="M1 3.867C1 2.836 1.731 2 2.633 2h3.489a1 1 0 0 1 .721.308L8.467 4H13a2 2 0 0 1 2 2v2a5 5 0 0 0-7.584 6H2.633C1.731 14 1 13.164 1 12.133z"
      fill="#43454A"
    />
    <path
      d="M2.633 3h3.489L8.04 5H13a1 1 0 0 1 1 1v1.416q.537.235 1 .584V6a2 2 0 0 0-2-2H8.467L6.843 2.308A1 1 0 0 0 6.122 2H2.633C1.731 2 1 2.836 1 3.867v8.266C1 13.164 1.731 14 2.633 14h4.783a5 5 0 0 1-.316-1H2.633C2.405 13 2 12.742 2 12.133V3.867C2 3.258 2.405 3 2.633 3"
      fill="#CED0D6"
    />
  </svg>
);

export const ControllerFolder: React.FC<ControllerFolderProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? ControllerFolderLight : ControllerFolderDark;

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
