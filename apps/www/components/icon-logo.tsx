import { cn } from '@workspace/ui/lib/utils';

const sizes = {
  xs: 'size-5.5',
  sm: 'size-7',
  md: 'size-8',
  lg: 'size-12',
  xl: 'size-14',
};

export const IconLogo = ({
  size = 'sm',
  className,
  ...props
}: {
  size?: keyof typeof sizes;
  className?: string;
} & React.ComponentProps<'svg'>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 70 70"
      className={cn(sizes[size], className)}
      {...props}
    >
      <rect
        width="70"
        height="70"
        rx="10"
        className="fill-neutral-900 dark:fill-neutral-100"
      />
      <text
        x="9"
        y="53"
        className="fill-neutral-100 dark:fill-neutral-900"
        style={{ fontSize: '46px', fontWeight: 700, fontFamily: 'inherit' }}
      >
        JB
      </text>
    </svg>
  );
};
