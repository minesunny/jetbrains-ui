'use client';

import { motion } from 'motion/react';

import { Logo } from '@/components/logo';
import XIcon from '@workspace/ui/components/icons/x-icon';
import { useIsMobile } from '@workspace/ui/hooks/use-mobile';
import { ThemeSwitcher } from './animate/theme-switcher';
import { SVG } from '@/registry/components/svg';

const LOGO_WRAPPER_VARIANTS = {
  center: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
  },
  topLeft: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 'auto',
    height: 'auto',
  },
};

export const Header = ({ transition }: { transition: boolean }) => {
  const isMobile = useIsMobile();

  return (
    <motion.div
      variants={LOGO_WRAPPER_VARIANTS}
      initial="center"
      animate={transition ? 'topLeft' : 'center'}
      transition={{ type: 'spring', stiffness: 200, damping: 30 }}
      className="absolute z-40 flex items-center justify-center"
    >
      <div className="relative max-w-7xl size-full">
        {transition ? (
          <motion.div
            layoutId="logo"
            className="absolute z-110 left-5"
            animate={{
              top: 32,
            }}
          >
            <Logo size="sm" />
          </motion.div>
        ) : (
          <motion.div
            layoutId="logo"
            className="absolute z-110 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <Logo size={isMobile ? 'lg' : 'xl'} draw />
          </motion.div>
        )}

        <motion.div
          initial={{
            top: 28,
            right: -43,
            opacity: 0,
          }}
          animate={
            transition
              ? {
                  top: 28,
                  right: 20,
                  opacity: 1,
                }
              : {
                  top: 28,
                  right: -43,
                  opacity: 0,
                }
          }
          transition={{ type: 'spring', stiffness: 200, damping: 30 }}
          className="absolute z-110 flex items-center gap-x-4"
        >
          <div className="hidden xs:flex items-center gap-x-1">
            <a
              href="https://github.com/minesunny/jetbrains-ui"
              rel="noreferrer noopener"
              target="_blank"
              className="sm:mt-1 group cursor-pointer justify-center rounded-md text-sm group font-medium transition-colors duration-300 ease-in-out disabled:pointer-events-none disabled:opacity-50 hover:bg-fd-accent hover:text-fd-accent-foreground p-1.5 [&_svg]:size-5 text-fd-muted-foreground sm:[&_svg]:size-5.5 flex items-center gap-x-2"
            >
              <SVG name="plugins/github/github" className="size-6" />
            </a>
            <a
              href="https://x.com/minesunny"
              rel="noreferrer noopener"
              target="_blank"
              className="inline-flex sm:mt-1 items-center justify-center rounded-md text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 hover:bg-fd-accent hover:text-fd-accent-foreground p-1.5 [&_svg]:size-5 text-fd-muted-foreground sm:[&_svg]:size-5.5"
              data-active="false"
            >
              <XIcon />
            </a>
          </div>

          <ThemeSwitcher className="mt-1 xs:mt-0 sm:mt-1" />
        </motion.div>
      </div>
    </motion.div>
  );
};
