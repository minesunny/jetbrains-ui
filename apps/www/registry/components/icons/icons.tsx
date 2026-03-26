'use client';

import * as React from 'react';
import { cn } from '@workspace/ui/lib/utils';

// 通用图标类型
export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'size'> {
  size?: number;
}

// Chevron Down 图标
export function ChevronDownIcon({ className, size = 16, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-flex shrink-0', className)}
      {...props}
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Chevron Up 图标
export function ChevronUpIcon({ className, size = 16, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-flex shrink-0', className)}
      {...props}
    >
      <path
        d="M12 10L8 6L4 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Close 图标
export function CloseIcon({ className, size = 16, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-flex shrink-0', className)}
      {...props}
    >
      <path
        d="M12 4L4 12M4 4L12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Search 图标
export function SearchIcon({ className, size = 16, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-flex shrink-0', className)}
      {...props}
    >
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M11 11L14 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Settings 图标
export function SettingsIcon({ className, size = 16, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-flex shrink-0', className)}
      {...props}
    >
      <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M8 1V3M8 13V15M15 8H13M3 8H1M12.95 12.95L11.536 11.536M4.464 4.464L3.05 3.05M12.95 3.05L11.536 4.464M4.464 11.536L3.05 12.95"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Check 图标
export function CheckIcon({ className, size = 16, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-flex shrink-0', className)}
      {...props}
    >
      <path
        d="M3 8L6 11L13 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Copy 图标
export function CopyIcon({ className, size = 16, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-flex shrink-0', className)}
      {...props}
    >
      <rect
        x="6"
        y="6"
        width="8"
        height="8"
        rx="1"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M10 2H4C2.89543 2 2 2.89543 2 4V10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Trash/Delete 图标
export function TrashIcon({ className, size = 16, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-flex shrink-0', className)}
      {...props}
    >
      <path
        d="M3 5H13M5 5V13C5 13.5523 5.44772 14 6 14H10C10.5523 14 11 13.5523 11 13V5M8 5V14M8 5V3M6.5 3H9.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Edit 图标
export function EditIcon({ className, size = 16, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-flex shrink-0', className)}
      {...props}
    >
      <path
        d="M11 4H13L15 2M11 4L8 7M13 2L10 5M8 7L3 12V14H5L10 9L15 4L13 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Refresh 图标
export function RefreshIcon({ className, size = 16, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-flex shrink-0', className)}
      {...props}
    >
      <path
        d="M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C9.3137 2 10.5355 2.4 11.5355 3.05M14 8V4H10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Loader 图标
export function LoaderIcon({ className, size = 16, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-flex shrink-0 animate-spin', className)}
      {...props}
    >
      <circle
        cx="8"
        cy="8"
        r="5"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.28"
      />
      <path
        d="M8 3C10.7614 3 13 5.23858 13 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Filter 图标
export function FilterIcon({ className, size = 16, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-flex shrink-0', className)}
      {...props}
    >
      <path
        d="M2 4H14M6 8H10M3 12H13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Add 图标
export function AddIcon({ className, size = 16, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-flex shrink-0', className)}
      {...props}
    >
      <path
        d="M8 3V13M3 8H13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Remove 图标
export function RemoveIcon({ className, size = 16, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-flex shrink-0', className)}
      {...props}
    >
      <path
        d="M3 8H13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Chevron Left 图标
export function ChevronLeftIcon({ className, size = 16, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-flex shrink-0', className)}
      {...props}
    >
      <path
        d="M10 4L6 8L10 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Chevron Right 图标
export function ChevronRightIcon({
  className,
  size = 16,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-flex shrink-0', className)}
      {...props}
    >
      <path
        d="M6 4L10 8L6 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// X 图标（Close 别名）
export const XIcon = CloseIcon;

// Plus 图标（Add 别名）
export const PlusIcon = AddIcon;

// Minus 图标（Remove 别名）
export const MinusIcon = RemoveIcon;
