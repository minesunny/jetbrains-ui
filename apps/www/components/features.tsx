import { Dancing_Script } from 'next/font/google';
import { MotionEffect } from './effects/motion-effect';
import { cn } from '@workspace/ui/lib/utils';
import Link from 'next/link';
import { motion } from 'motion/react';

function ComponentsCardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 89.83 66.52"
      {...props}
    >
      <rect
        width="57.88"
        height="40.4"
        x="15.97"
        y="15.06"
        className="dark:fill-neutral-700 fill-neutral-200"
        rx="5.01"
        ry="5.01"
      />
      <rect
        width="8.13"
        height="8.13"
        x="21.01"
        y="19.81"
        className="dark:fill-neutral-500 fill-neutral-400 dark:stroke-neutral-500 stroke-neutral-400"
        strokeMiterlimit="10"
        rx="4.07"
        ry="4.07"
      />
      <path
        fill="none"
        className="dark:stroke-neutral-500 stroke-neutral-400"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M21.51 33.33h41.1M21.51 37.45h41.1M21.51 42.02H46.7"
      />
      <rect
        width="13.81"
        height="4.91"
        x="55.37"
        y="45.75"
        className="fill-primary stroke-primary"
        strokeMiterlimit="10"
        rx="0.87"
        ry="0.87"
      />
      <path
        fill="none"
        className="dark:stroke-neutral-500 stroke-neutral-400"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M58.13 48.2h8.29"
      />
      <circle
        cx="25.07"
        cy="23.69"
        r="1.8"
        className="dark:fill-neutral-700 fill-neutral-200"
      />
      <path
        className="dark:fill-neutral-700 fill-neutral-200"
        d="M28.25 29.07c0-1.76-1.42-3.18-3.18-3.18s-3.18 1.42-3.18 3.18z"
      />
    </svg>
  );
}

function IconsCardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 89.83 66.52"
      {...props}
    >
      <path
        className="dark:fill-neutral-700 fill-neutral-200"
        d="M12.67 15.41h64.62c2.76 0 5.01 2.24 5.01 5.01v46.1H7.66v-46.1c0-2.76 2.24-5.01 5.01-5.01"
      />
      <path
        className="dark:fill-neutral-600 fill-neutral-300"
        d="M12.69 18.58H28.3c1.1 0 2 .9 2 2v45.94H10.69V20.58c0-1.1.9-2 2-2"
      />
      <rect
        width="46.21"
        height="5.25"
        x="33"
        y="18.58"
        className="dark:fill-neutral-600 fill-neutral-300"
        rx="2"
        ry="2"
      />
      <path
        className="dark:fill-neutral-600 fill-neutral-300"
        d="M35 26.38h42.21c1.1 0 2 .9 2 2v38.13H33V28.38c0-1.1.9-2 2-2"
      />
      <circle
        cx="14.48"
        cy="22.65"
        r="1.99"
        className="dark:fill-neutral-500 fill-neutral-400"
      />
      <path
        className="dark:fill-neutral-500 fill-neutral-400 dark:stroke-neutral-500 stroke-neutral-400"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M12.99 27.65h10.6"
      />
      <path
        className="dark:fill-neutral-500 fill-neutral-400 dark:stroke-neutral-500/50 stroke-neutral-400/50"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M12.99 30.65h7.45M12.99 33.65h13.16M12.99 36.65h9.66M12.99 39.65h6.58"
      />
      <rect
        width="42.11"
        height="21.7"
        x="35.05"
        y="28.33"
        className="dark:fill-neutral-500/50 fill-neutral-400/50"
        rx="0.8"
        ry="0.8"
      />
      <rect
        width="20.01"
        height="12.9"
        x="35.05"
        y="52"
        className="dark:fill-neutral-500/50 fill-neutral-400/50"
        rx="0.8"
        ry="0.8"
      />
      <rect
        width="20.06"
        height="12.9"
        x="57.1"
        y="52"
        className="dark:fill-neutral-500/50 fill-neutral-400/50"
        rx="0.8"
        ry="0.8"
      />
    </svg>
  );
}

const COMPONENTS = [
  {
    name: 'Components',
    href: '/docs/components',
    icon: <ComponentsCardIcon />,
  },
  {
    name: 'Icons',
    href: '/docs/icons',
    icon: (
      <div className="relative">
        <IconsCardIcon />
      </div>
    ),
  },
];

const dancing = Dancing_Script({ subsets: ['latin'] });

export const Features = () => {
  return (
    <div className="relative pt-16 pb-10 px-5 flex flex-col items-center justify-center mt-auto">
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 sm:gap-6 gap-4 w-full max-w-7xl sm:max-lg:max-w-2xl mx-auto">
        {COMPONENTS.map((component, index) => {
          const content = (
            <motion.div
              whileHover={{
                scale: component.href ? 1.025 : 1,
              }}
              whileTap={{
                scale: component.href ? 0.925 : 1,
              }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 20,
              }}
              className={cn(
                'relative w-full dark:bg-neutral-800 bg-neutral-100 rounded-2xl pt-1',
                !component?.href && 'opacity-50 cursor-not-allowed',
              )}
            >
              <p
                className={cn(
                  dancing.className,
                  'text-[22px] font-black text-muted-foreground absolute xs:top-2 top-3 left-1/2 -translate-x-1/2',
                )}
              >
                {component.name}
              </p>

              {component.icon}
            </motion.div>
          );

          return (
            <MotionEffect
              slide={{
                direction: 'down',
              }}
              fade
              zoom
              delay={1 + 0.15 * index}
              key={index}
            >
              {component.href ? (
                <Link href={component.href}>{content}</Link>
              ) : (
                <div>{content}</div>
              )}
            </MotionEffect>
          );
        })}
      </div>
    </div>
  );
};
