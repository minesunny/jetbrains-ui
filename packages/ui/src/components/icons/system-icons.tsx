import * as React from 'react';

import ComponentsIconSvg from './components-icon';
import GithubIconSvg from './github-icon';
import PrimitivesIconSvg from './primitives-icon';

export type SystemIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  absoluteStrokeWidth?: boolean;
};

type IconBaseProps = React.PropsWithChildren<
  SystemIconProps & {
    viewBox?: string;
  }
>;

function resolveStrokeWidth(
  size: number | string,
  strokeWidth: number | string,
  absoluteStrokeWidth?: boolean,
) {
  if (!absoluteStrokeWidth) {
    return strokeWidth;
  }

  const resolvedSize =
    typeof size === 'number' ? size : Number.parseFloat(size);
  const resolvedStrokeWidth =
    typeof strokeWidth === 'number'
      ? strokeWidth
      : Number.parseFloat(strokeWidth);

  if (
    !Number.isFinite(resolvedSize) ||
    resolvedSize === 0 ||
    !Number.isFinite(resolvedStrokeWidth)
  ) {
    return strokeWidth;
  }

  return (24 * resolvedStrokeWidth) / resolvedSize;
}

function IconBase({
  children,
  size = 24,
  width,
  height,
  viewBox = '0 0 24 24',
  strokeWidth = 2,
  absoluteStrokeWidth,
  stroke,
  fill,
  strokeLinecap,
  strokeLinejoin,
  ...props
}: IconBaseProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? size}
      height={height ?? size}
      viewBox={viewBox}
      fill={fill ?? 'none'}
      stroke={stroke ?? 'currentColor'}
      strokeWidth={resolveStrokeWidth(size, strokeWidth, absoluteStrokeWidth)}
      strokeLinecap={strokeLinecap ?? 'round'}
      strokeLinejoin={strokeLinejoin ?? 'round'}
      {...props}
    >
      {children}
    </svg>
  );
}

function createIcon(
  displayName: string,
  nodes: React.ReactNode,
  viewBox?: string,
) {
  const Icon = (props: SystemIconProps) => (
    <IconBase viewBox={viewBox} {...props}>
      {nodes}
    </IconBase>
  );

  Icon.displayName = displayName;

  return Icon;
}

function wrapExistingIcon(
  displayName: string,
  IconComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>,
) {
  const WrappedIcon = ({
    size = 24,
    width,
    height,
    ...props
  }: SystemIconProps) => {
    return <IconComponent width={width ?? size} height={height ?? size} {...props} />;
  };

  WrappedIcon.displayName = displayName;

  return WrappedIcon;
}

export const ArrowLeft = createIcon(
  'ArrowLeft',
  <>
    <path d="M19 12H5" />
    <path d="m12 19-7-7 7-7" />
  </>,
);

export const ArrowLeftIcon = ArrowLeft;

export const ArrowRight = createIcon(
  'ArrowRight',
  <>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </>,
);

export const ArrowRightIcon = ArrowRight;

export const BookOpen = createIcon(
  'BookOpen',
  <>
    <path d="M12 6a3 3 0 0 0-3-3H5a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h4a3 3 0 0 1 3 3" />
    <path d="M12 6a3 3 0 0 1 3-3h4a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2h-4a3 3 0 0 0-3 3" />
  </>,
);

export const Check = createIcon('Check', <path d="M20 6 9 17l-5-5" />);

export const CheckIcon = Check;

export const ChevronDown = createIcon(
  'ChevronDown',
  <path d="m6 9 6 6 6-6" />,
);

export const ChevronDownIcon = ChevronDown;

export const ChevronLeft = createIcon(
  'ChevronLeft',
  <path d="m15 18-6-6 6-6" />,
);

export const ChevronRight = createIcon(
  'ChevronRight',
  <path d="m9 18 6-6-6-6" />,
);

export const ChevronRightIcon = ChevronRight;

export const ChevronUpIcon = createIcon(
  'ChevronUpIcon',
  <path d="m18 15-6-6-6 6" />,
);

export const ChevronsUpDown = createIcon(
  'ChevronsUpDown',
  <>
    <path d="m7 15 5 5 5-5" />
    <path d="m7 9 5-5 5 5" />
  </>,
);

export const CircleCheck = createIcon(
  'CircleCheck',
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="m9 12 2 2 4-4" />
  </>,
);

export const CircleIcon = createIcon(
  'CircleIcon',
  <circle cx="12" cy="12" r="5" fill="currentColor" stroke="none" />,
);

export const CircleX = createIcon(
  'CircleX',
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="m15 9-6 6" />
    <path d="m9 9 6 6" />
  </>,
);

export const Code = createIcon(
  'Code',
  <>
    <path d="m16 18 6-6-6-6" />
    <path d="m8 6-6 6 6 6" />
    <path d="m14.5 4-5 16" />
  </>,
);

export const CommandIcon = createIcon(
  'CommandIcon',
  <path d="M6 8a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0zm8-2a2 2 0 1 1 0 4H6a2 2 0 1 1 0-4zm0 8a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0zm2-8a2 2 0 1 1 0 4h2a2 2 0 1 1 0 4h-8a2 2 0 1 1 0-4h8a2 2 0 1 1 0-4z" />,
);

export const Component = wrapExistingIcon('Component', ComponentsIconSvg);

export const Copy = createIcon(
  'Copy',
  <>
    <rect x="9" y="9" width="12" height="12" rx="2" ry="2" />
    <path d="M5 15V5a2 2 0 0 1 2-2h10" />
  </>,
);

export const CopyIcon = Copy;

export const Cuboid = wrapExistingIcon('Cuboid', PrimitivesIconSvg);

export const ExternalLinkIcon = createIcon(
  'ExternalLinkIcon',
  <>
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M19 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" />
  </>,
);

export const Fullscreen = createIcon(
  'Fullscreen',
  <>
    <path d="M8 3H3v5" />
    <path d="m3 3 7 7" />
    <path d="M16 3h5v5" />
    <path d="m21 3-7 7" />
    <path d="M8 21H3v-5" />
    <path d="m3 21 7-7" />
    <path d="M16 21h5v-5" />
    <path d="m21 21-7-7" />
  </>,
);

export const GithubIcon = wrapExistingIcon('GithubIcon', GithubIconSvg);

export const GripVerticalIcon = createIcon(
  'GripVerticalIcon',
  <>
    <circle cx="9" cy="6" r="1" fill="currentColor" stroke="none" />
    <circle cx="15" cy="6" r="1" fill="currentColor" stroke="none" />
    <circle cx="9" cy="12" r="1" fill="currentColor" stroke="none" />
    <circle cx="15" cy="12" r="1" fill="currentColor" stroke="none" />
    <circle cx="9" cy="18" r="1" fill="currentColor" stroke="none" />
    <circle cx="15" cy="18" r="1" fill="currentColor" stroke="none" />
  </>,
);

export const Info = createIcon(
  'Info',
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 10v5" />
    <circle cx="12" cy="7" r="1" fill="currentColor" stroke="none" />
  </>,
);

export const Languages = createIcon(
  'Languages',
  <>
    <path d="m5 8 4 10" />
    <path d="M3 13h8" />
    <path d="M13 5h8" />
    <path d="M17 5c0 6-3 10-7 12" />
    <path d="M14 11c1.5 2 3.7 3.8 7 5" />
  </>,
);

export const Loader = createIcon(
  'Loader',
  <path d="M21 12a9 9 0 1 1-6.22-8.56" />,
);

export const LoaderCircle = Loader;

export const MessageCircleIcon = createIcon(
  'MessageCircleIcon',
  <>
    <path d="M7 18.5 3 21V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7z" />
  </>,
);

export const Moon = createIcon(
  'Moon',
  <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8" />,
);

export const MoreHorizontal = createIcon(
  'MoreHorizontal',
  <>
    <circle cx="6" cy="12" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="18" cy="12" r="1.5" fill="currentColor" stroke="none" />
  </>,
);

export const Palette = createIcon(
  'Palette',
  <>
    <path d="M12 3c-5 0-9 3.6-9 8 0 3.5 2.6 6.4 6.2 7.5.9.3 1.7-.5 1.5-1.4l-.1-.5a1.5 1.5 0 0 1 1.5-1.8H14a4 4 0 0 0 0-8z" />
    <circle cx="6.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="9.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="14.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="17.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
  </>,
);

export const PanelLeftIcon = createIcon(
  'PanelLeftIcon',
  <>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M9 4v16" />
  </>,
);

export const PlusIcon = createIcon(
  'PlusIcon',
  <>
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </>,
);

export const RotateCcw = createIcon(
  'RotateCcw',
  <>
    <path d="M3 7v6h6" />
    <path d="M21 12a9 9 0 1 0-3.2 6.9L15 16" />
  </>,
);

export const RotateCcwIcon = RotateCcw;

export const SaveIcon = createIcon(
  'SaveIcon',
  <>
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z" />
    <path d="M17 21v-8H7v8" />
    <path d="M7 3v5h8" />
  </>,
);

export const SlidersHorizontal = createIcon(
  'SlidersHorizontal',
  <>
    <path d="M4 6h16" />
    <circle cx="9" cy="6" r="2" />
    <path d="M4 12h16" />
    <circle cx="15" cy="12" r="2" />
    <path d="M4 18h16" />
    <circle cx="11" cy="18" r="2" />
  </>,
);

export const SparklesIcon = createIcon(
  'SparklesIcon',
  <>
    <path d="m12 3 1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7z" />
    <path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z" />
    <path d="m5 15 .7 1.6L7.3 17l-1.6.7L5 19.3l-.7-1.6L2.7 17l1.6-.7z" />
  </>,
);

export const SquareMenu = createIcon(
  'SquareMenu',
  <>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M8 9h8" />
    <path d="M8 12h8" />
    <path d="M8 15h5" />
  </>,
);

export const SquareRoundCorner = createIcon(
  'SquareRoundCorner',
  <>
    <path d="M7 4h8a5 5 0 0 1 5 5v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z" />
    <path d="M14 4v5a3 3 0 0 0 3 3h3" />
  </>,
);

export const StarIcon = createIcon(
  'StarIcon',
  <path d="m12 3 2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 16.8 6.7 19.1l1-5.8-4.2-4.1 5.9-.9z" />,
);

export const Sun = createIcon(
  'Sun',
  <>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.9 4.9 1.4 1.4" />
    <path d="m17.7 17.7 1.4 1.4" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m4.9 19.1 1.4-1.4" />
    <path d="m17.7 6.3 1.4-1.4" />
  </>,
);

export const Timer = createIcon(
  'Timer',
  <>
    <path d="M10 2h4" />
    <circle cx="12" cy="14" r="8" />
    <path d="M12 10v4l3 2" />
  </>,
);

export const Trash2Icon = createIcon(
  'Trash2Icon',
  <>
    <path d="M3 6h18" />
    <path d="M8 6V4h8v2" />
    <path d="M19 6l-1 13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <path d="M10 10v7" />
    <path d="M14 10v7" />
  </>,
);

export const TriangleAlert = createIcon(
  'TriangleAlert',
  <>
    <path d="M10.3 4.2 3.5 17.1A2 2 0 0 0 5.3 20h13.4a2 2 0 0 0 1.8-2.9L13.7 4.2a2 2 0 0 0-3.4 0z" />
    <path d="M12 9v4" />
    <circle cx="12" cy="16.5" r="1" fill="currentColor" stroke="none" />
  </>,
);

export const TypeIcon = createIcon(
  'TypeIcon',
  <>
    <path d="M4 6V4h16v2" />
    <path d="M12 4v16" />
    <path d="M8 20h8" />
  </>,
);

export const XIcon = createIcon(
  'XIcon',
  <>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </>,
);
