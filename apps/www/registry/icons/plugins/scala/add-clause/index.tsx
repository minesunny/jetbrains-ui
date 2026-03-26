import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type AddClauseProps = IconProps;

const AddClauseLight: React.FC<SvgProps> = ({
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
      d="M4.854 1.146a.5.5 0 0 0-.708 0l-.037.039-.089.096c-.074.084-.179.205-.303.362-.248.315-.576.775-.904 1.364A10.3 10.3 0 0 0 1.5 8c0 2.106.658 3.814 1.313 4.993.328.59.656 1.05.904 1.364.124.157.229.278.303.362l.125.133a.5.5 0 0 0 .71-.705l-.09-.096a7 7 0 0 1-.263-.314 9 9 0 0 1-.815-1.23A9.3 9.3 0 0 1 2.5 8c0-1.894.592-3.436 1.187-4.507.297-.536.594-.95.815-1.23q.167-.21.263-.314l.089-.096a.5.5 0 0 0 0-.707M7.146 1.146a.5.5 0 0 1 .708 0l.037.039.089.096c.074.084.179.205.303.362.248.315.576.775.904 1.364A10.3 10.3 0 0 1 10.5 8c0 1.119-.186 2.125-.458 3H9.5c-.193 0-.378.037-.548.103A9.1 9.1 0 0 0 9.5 8a9.3 9.3 0 0 0-1.187-4.507 9 9 0 0 0-.815-1.23 7 7 0 0 0-.263-.314l-.089-.096a.5.5 0 0 1 0-.707M8.063 12.931a9 9 0 0 1-.565.806q-.167.21-.263.314l-.09.096a.5.5 0 1 0 .71.706v-.001l.125-.133a8 8 0 0 0 .303-.362c.125-.158.27-.353.425-.583a1.5 1.5 0 0 1-.645-.843"
      fill="#6C707E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 9a.5.5 0 0 1 .5.5V12h2.5a.5.5 0 0 1 0 1H13v2.5a.5.5 0 0 1-1 0V13H9.5a.5.5 0 0 1 0-1H12V9.5a.5.5 0 0 1 .5-.5"
      fill="#3574F0"
    />
  </svg>
);

const AddClauseDark: React.FC<SvgProps> = ({
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
      d="M4.854 1.146a.5.5 0 0 0-.708 0l-.037.039-.089.096c-.074.084-.179.205-.303.362-.248.315-.576.775-.904 1.364A10.3 10.3 0 0 0 1.5 8c0 2.106.658 3.814 1.313 4.993.328.59.656 1.05.904 1.364.124.157.229.278.303.362l.125.133a.5.5 0 0 0 .71-.705l-.09-.096a7 7 0 0 1-.263-.314 9 9 0 0 1-.815-1.23A9.3 9.3 0 0 1 2.5 8c0-1.894.592-3.436 1.187-4.507.297-.536.594-.95.815-1.23q.167-.21.263-.314l.089-.096a.5.5 0 0 0 0-.707M7.146 1.146a.5.5 0 0 1 .708 0l.037.039.089.096c.074.084.179.205.303.362.248.315.576.775.904 1.364A10.3 10.3 0 0 1 10.5 8c0 1.119-.186 2.125-.458 3H9.5c-.193 0-.378.037-.548.103A9.1 9.1 0 0 0 9.5 8a9.3 9.3 0 0 0-1.187-4.507 9 9 0 0 0-.815-1.23 7 7 0 0 0-.263-.314l-.089-.096a.5.5 0 0 1 0-.707M8.063 12.931a9 9 0 0 1-.565.806q-.167.21-.263.314l-.09.096a.5.5 0 1 0 .71.706v-.001l.125-.133a8 8 0 0 0 .303-.362c.125-.158.27-.353.425-.583a1.5 1.5 0 0 1-.645-.843"
      fill="#CED0D6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5 9a.5.5 0 0 1 .5.5V12h2.5a.5.5 0 0 1 0 1H13v2.5a.5.5 0 0 1-1 0V13H9.5a.5.5 0 0 1 0-1H12V9.5a.5.5 0 0 1 .5-.5"
      fill="#548AF7"
    />
  </svg>
);

export const AddClause: React.FC<AddClauseProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent = mode === 'light' ? AddClauseLight : AddClauseDark;

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
