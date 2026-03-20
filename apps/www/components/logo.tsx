'use client';

import { cn } from '@workspace/ui/lib/utils';
import { motion, type SVGMotionProps } from 'motion/react';

const pathVariants = {
  hidden: {
    pathLength: 0,
    fillOpacity: 0,
  },
  visible: {
    pathLength: 1,
    fillOpacity: 1,
    transition: {
      duration: 1.5,
      ease: 'easeInOut',
    },
  },
} as const;

const sizes = {
  xs: 'h-5.5',
  sm: 'h-7',
  md: 'h-8',
  lg: 'h-12',
  xl: 'h-14',
};

export const Logo = ({
  draw = false,
  size = 'sm',
  className,
  containerClassName,
  ...props
}: {
  containerClassName?: string;
  draw?: boolean;
  size?: keyof typeof sizes;
} & SVGMotionProps<SVGSVGElement>) => {
  return (
    <div className={cn('relative flex items-center gap-2', containerClassName)}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 70 70"
        className={cn(sizes[size], 'aspect-square', className)}
        {...props}
      >
        <motion.rect
          variants={draw ? pathVariants : {}}
          initial={draw ? 'hidden' : false}
          animate={draw ? 'visible' : false}
          width="70"
          height="70"
          rx="10"
          className="fill-neutral-900 dark:fill-neutral-100"
        />
        <motion.text
          x="9"
          y="53"
          className="fill-neutral-100 dark:fill-neutral-900"
          style={{ fontSize: '46px', fontWeight: 700, fontFamily: 'inherit' }}
        >
          JB
        </motion.text>
      </motion.svg>

      <span
        className={cn(
          'font-semibold tracking-tight text-neutral-900 dark:text-neutral-100',
          size === 'xs' && 'text-sm',
          size === 'sm' && 'text-base',
          size === 'md' && 'text-lg',
          size === 'lg' && 'text-2xl',
          size === 'xl' && 'text-3xl',
        )}
      >
        JetBrains UI
      </span>
    </div>
  );
};
