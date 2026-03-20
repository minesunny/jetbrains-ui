import React from 'react';
import { cn } from '@/lib/utils';
import { type IconProps, type SvgProps, sizeMap } from '../../types';

export type RenameSequenceProps = IconProps;

const RenameSequenceLight: React.FC<SvgProps> = ({
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
      d="M14.412 8.295a1 1 0 0 0-1.414 0l-1.351 1.351L8 13.293V16h2.707l4.998-4.998a1 1 0 0 0 0-1.414zM14 11.293l.998-.998-1.293-1.293-.998.998zm-2-.586L13.293 12l-3 3H9v-1.293z"
      fill="#3574F0"
    />
    <path
      d="M1 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5M5.275 10.294 7.7 8.063q.349-.324.506-.621.162-.302.162-.637 0-.319-.145-.566a1 1 0 0 0-.408-.382 1.3 1.3 0 0 0-.6-.136q-.36 0-.645.157a1.13 1.13 0 0 0-.442.43 1.26 1.26 0 0 0-.157.633h-.863q0-.57.276-1.02.276-.456.76-.714a2.3 2.3 0 0 1 1.089-.26q.57 0 1.028.234.464.234.723.642.264.408.263.918 0 .489-.255.943-.255.45-.803.948l-1.708 1.585h2.932v.247L8.88 11H5.275zM7 13H1.5a.5.5 0 0 0 0 1H7zM12.82 7.208l1.577-1.479v-.68h-3.8v.744h2.75l-1.61 1.522v.667h.16l.394-.394c.159-.16.338-.286.528-.38M1.293 6.677h1.415v4.322h.859V5.05h-.625q0 .28-.106.489a.77.77 0 0 1-.306.319.95.95 0 0 1-.468.11h-.769z"
      fill="#6C707E"
    />
  </svg>
);

const RenameSequenceDark: React.FC<SvgProps> = ({
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
      d="M14.412 8.295a1 1 0 0 0-1.414 0l-1.351 1.351L8 13.293V16h2.707l4.998-4.998a1 1 0 0 0 0-1.414zM14 11.293l.998-.998-1.293-1.293-.998.998zm-2-.586L13.293 12l-3 3H9v-1.293z"
      fill="#548AF7"
    />
    <path
      d="M1 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5M5.275 10.294 7.7 8.063q.349-.324.506-.621.162-.302.162-.637 0-.319-.145-.566a1 1 0 0 0-.408-.382 1.3 1.3 0 0 0-.6-.136q-.36 0-.645.157a1.13 1.13 0 0 0-.442.43 1.26 1.26 0 0 0-.157.633h-.863q0-.57.276-1.02.276-.456.76-.714a2.3 2.3 0 0 1 1.089-.26q.57 0 1.028.234.464.234.723.642.264.408.263.918 0 .489-.255.943-.255.45-.803.948l-1.708 1.585h2.932v.247L8.88 11H5.275zM7 13H1.5a.5.5 0 0 0 0 1H7zM12.82 7.208l1.577-1.479v-.68h-3.8v.744h2.75l-1.61 1.522v.667h.16l.394-.394c.159-.16.338-.286.528-.38M1.293 6.677h1.415v4.322h.859V5.05h-.625q0 .28-.106.489a.77.77 0 0 1-.306.319.95.95 0 0 1-.468.11h-.769z"
      fill="#CED0D6"
    />
  </svg>
);

export const RenameSequence: React.FC<RenameSequenceProps> = ({
  size = 'md',
  mode = 'light',
  className,
  'aria-label': ariaLabel,
  title,
  ...props
}) => {
  const SvgComponent =
    mode === 'light' ? RenameSequenceLight : RenameSequenceDark;

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
