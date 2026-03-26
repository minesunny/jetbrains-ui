import * as React from 'react';

type LucideProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
};

function IconBase({ children, size, width, height, ...props }: LucideProps) {
  const iconSize = size ?? width ?? height ?? 24;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={iconSize}
      height={iconSize}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowLeft(props: LucideProps) {
  return (
    <IconBase {...props}>
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </IconBase>
  );
}

export function ArrowRight(props: LucideProps) {
  return (
    <IconBase {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </IconBase>
  );
}

export function BookOpen(props: LucideProps) {
  return (
    <IconBase {...props}>
      <path d="M12 7v14" />
      <path d="M3 18a3 3 0 0 1 3-3h6" />
      <path d="M21 18a3 3 0 0 0-3-3h-6" />
      <path d="M3 6a3 3 0 0 1 3-3h6v4H6a3 3 0 0 0-3 3Z" />
      <path d="M21 6a3 3 0 0 0-3-3h-6v4h6a3 3 0 0 1 3 3Z" />
    </IconBase>
  );
}

export function CheckIcon(props: LucideProps) {
  return (
    <IconBase {...props}>
      <path d="m5 12 4 4 10-10" />
    </IconBase>
  );
}

export function ChevronDownIcon(props: LucideProps) {
  return (
    <IconBase {...props}>
      <path d="m6 9 6 6 6-6" />
    </IconBase>
  );
}

export const ChevronDown = ChevronDownIcon;

export function ChevronUpIcon(props: LucideProps) {
  return (
    <IconBase {...props}>
      <path d="m18 15-6-6-6 6" />
    </IconBase>
  );
}

export function ChevronLeft(props: LucideProps) {
  return (
    <IconBase {...props}>
      <path d="m15 18-6-6 6-6" />
    </IconBase>
  );
}

export function ChevronRight(props: LucideProps) {
  return (
    <IconBase {...props}>
      <path d="m9 18 6-6-6-6" />
    </IconBase>
  );
}

export const ChevronRightIcon = ChevronRight;

export function ChevronsUpDown(props: LucideProps) {
  return (
    <IconBase {...props}>
      <path d="m7 9 5-5 5 5" />
      <path d="m7 15 5 5 5-5" />
    </IconBase>
  );
}

export function CircleIcon(props: LucideProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
    </IconBase>
  );
}

export function CircleCheck(props: LucideProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 3 3 5-5" />
    </IconBase>
  );
}

export function CircleX(props: LucideProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m9 9 6 6" />
      <path d="m15 9-6 6" />
    </IconBase>
  );
}

export function Code(props: LucideProps) {
  return (
    <IconBase {...props}>
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m14 4-4 16" />
    </IconBase>
  );
}

export function CommandIcon(props: LucideProps) {
  return (
    <IconBase {...props}>
      <path d="M7 7a3 3 0 1 1 0 6H5a3 3 0 1 1 0-6h2Z" />
      <path d="M19 7a3 3 0 1 1 0 6h-2a3 3 0 1 1 0-6h2Z" />
      <path d="M7 17a3 3 0 1 1 6 0v2a3 3 0 1 1-6 0v-2Z" />
      <path d="M17 17a3 3 0 1 1 6 0v2a3 3 0 1 1-6 0v-2Z" />
    </IconBase>
  );
}

export function Component(props: LucideProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </IconBase>
  );
}

export function CopyIcon(props: LucideProps) {
  return (
    <IconBase {...props}>
      <rect x="9" y="9" width="10" height="10" rx="2" />
      <path d="M5 15V5a2 2 0 0 1 2-2h10" />
    </IconBase>
  );
}

export const Copy = CopyIcon;

export function Cuboid(props: LucideProps) {
  return (
    <IconBase {...props}>
      <path d="m12 3 8 4-8 4-8-4 8-4Z" />
      <path d="M4 7v10l8 4 8-4V7" />
      <path d="M12 11v10" />
    </IconBase>
  );
}

export function ExternalLinkIcon(props: LucideProps) {
  return (
    <IconBase {...props}>
      <path d="M14 5h5v5" />
      <path d="m10 14 9-9" />
      <path d="M19 14v5H5V5h5" />
    </IconBase>
  );
}

export function Fullscreen(props: LucideProps) {
  return (
    <IconBase {...props}>
      <path d="M8 3H3v5" />
      <path d="M16 3h5v5" />
      <path d="M8 21H3v-5" />
      <path d="M16 21h5v-5" />
    </IconBase>
  );
}

export function GithubIcon(props: LucideProps) {
  return (
    <IconBase {...props}>
      <path d="M9 18c-4 1-4-2-6-2" />
      <path d="M15 22v-3.9a3.4 3.4 0 0 0-.9-2.6c3 0 6-1.8 6-6a4.7 4.7 0 0 0-1.3-3.3 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.3 1.3a11.4 11.4 0 0 0-6 0C7 2.7 6 3 6 3a4.3 4.3 0 0 0-.1 3.2A4.7 4.7 0 0 0 4.6 9.5c0 4.2 3 6 6 6a3.4 3.4 0 0 0-.9 2.6V22" />
    </IconBase>
  );
}

export function GripVerticalIcon(props: LucideProps) {
  return (
    <IconBase {...props}>
      <circle cx="9" cy="5" r="1" />
      <circle cx="9" cy="12" r="1" />
      <circle cx="9" cy="19" r="1" />
      <circle cx="15" cy="5" r="1" />
      <circle cx="15" cy="12" r="1" />
      <circle cx="15" cy="19" r="1" />
    </IconBase>
  );
}

export function Info(props: LucideProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 10v6" />
      <path d="M12 7h.01" />
    </IconBase>
  );
}

export function Languages(props: LucideProps) {
  return (
    <IconBase {...props}>
      <path d="M4 5h10" />
      <path d="M9 3v2" />
      <path d="M8 5a14 14 0 0 1-4 9" />
      <path d="M6 10c1.5 2 3.5 3.5 6 4" />
      <path d="m14 7 6 14" />
      <path d="m13 21 3-7h5" />
    </IconBase>
  );
}

export function Loader(props: LucideProps) {
  return (
    <IconBase {...props}>
      <path d="M21 12a9 9 0 1 1-6.2-8.6" />
    </IconBase>
  );
}

export function Moon(props: LucideProps) {
  return (
    <IconBase {...props}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 1 0 9.8 9.8Z" />
    </IconBase>
  );
}

export function MoreHorizontal(props: LucideProps) {
  return (
    <IconBase {...props}>
      <circle cx="6" cy="12" r="1.5" />
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="18" cy="12" r="1.5" />
    </IconBase>
  );
}

export function PanelLeftIcon(props: LucideProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M9 4v16" />
    </IconBase>
  );
}

export function RotateCcw(props: LucideProps) {
  return (
    <IconBase {...props}>
      <path d="M3 2v6h6" />
      <path d="M3 8a9 9 0 1 0 3-3" />
    </IconBase>
  );
}

export function SlidersHorizontal(props: LucideProps) {
  return (
    <IconBase {...props}>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
      <circle cx="9" cy="6" r="2" />
      <circle cx="15" cy="12" r="2" />
      <circle cx="11" cy="18" r="2" />
    </IconBase>
  );
}

export function SparklesIcon(props: LucideProps) {
  return (
    <IconBase {...props}>
      <path d="m12 3 1.5 3.5L17 8l-3.5 1.5L12 13l-1.5-3.5L7 8l3.5-1.5L12 3Z" />
      <path d="m5 14 .8 1.7L7.5 17l-1.7.8L5 19.5l-.8-1.7L2.5 17l1.7-.8L5 14Z" />
      <path d="m19 13 1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z" />
    </IconBase>
  );
}

export function SquareMenu(props: LucideProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 8h8" />
      <path d="M8 12h8" />
      <path d="M8 16h8" />
    </IconBase>
  );
}

export function StarIcon(props: LucideProps) {
  return (
    <IconBase {...props}>
      <path d="m12 3 2.7 5.5 6 .9-4.3 4.2 1 5.9-5.4-2.8-5.4 2.8 1-5.9L3.3 9.4l6-.9L12 3Z" />
    </IconBase>
  );
}

export function Sun(props: LucideProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.9 4.9 1.4 1.4" />
      <path d="m17.7 17.7 1.4 1.4" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m4.9 19.1 1.4-1.4" />
      <path d="m17.7 6.3 1.4-1.4" />
    </IconBase>
  );
}

export function Trash2Icon(props: LucideProps) {
  return (
    <IconBase {...props}>
      <path d="M3 6h18" />
      <path d="M8 6V4h8v2" />
      <rect x="6" y="6" width="12" height="14" rx="2" />
      <path d="M10 10v6" />
      <path d="M14 10v6" />
    </IconBase>
  );
}

export function TriangleAlert(props: LucideProps) {
  return (
    <IconBase {...props}>
      <path d="m12 3 9 16H3L12 3Z" />
      <path d="M12 9v5" />
      <path d="M12 17h.01" />
    </IconBase>
  );
}

export function TypeIcon(props: LucideProps) {
  return (
    <IconBase {...props}>
      <path d="M4 7V4h16v3" />
      <path d="M12 4v16" />
      <path d="M8 20h8" />
    </IconBase>
  );
}

export function XIcon(props: LucideProps) {
  return (
    <IconBase {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </IconBase>
  );
}

export const Check = CheckIcon;

export function MessageCircleIcon(props: LucideProps) {
  return (
    <IconBase {...props}>
      <path d="M21 12a8.5 8.5 0 0 1-8.5 8.5H6l-3 3v-6.5A8.5 8.5 0 1 1 21 12Z" />
    </IconBase>
  );
}

export const icons = {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeft,
  ChevronRight,
  ChevronRightIcon,
  ChevronsUpDown,
  ChevronUpIcon,
  CircleCheck,
  CircleIcon,
  CircleX,
  Code,
  CommandIcon,
  Component,
  CopyIcon,
  Cuboid,
  ExternalLinkIcon,
  Fullscreen,
  GithubIcon,
  GripVerticalIcon,
  Info,
  Languages,
  Loader,
  Moon,
  MoreHorizontal,
  PanelLeftIcon,
  RotateCcw,
  SlidersHorizontal,
  SparklesIcon,
  SquareMenu,
  StarIcon,
  Sun,
  Trash2Icon,
  TriangleAlert,
  TypeIcon,
  XIcon,
  Check,
  Copy,
  ChevronDown,
  MessageCircleIcon,
} as const;
