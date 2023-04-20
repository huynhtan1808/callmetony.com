'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutGroup, motion } from 'framer-motion';

const navItems = {
  '/': {
    name: 'home',
  },
  '/about': {
    name: 'about',
  },
  '/blog': {
    name: 'blog',
  },
  '/workspace': {
    name: 'workspace',
  },
};

function Logo() {
  return (
    <Link aria-label="Tony Huynh" href="/" className='fill-white'>
      <svg 
      id="svgLogo" 
      xmlns="http://www.w3.org/2000/svg" 
      width="38px" 
      height="38px" 
      viewBox="-10 0 80 65">
        <path 
        className="bottomArrow" 
        d="M32.59 36.14 32.59 32 29.12 32 25.42 32 25.42 36.32 25.42 42.4 25.42 54.52 23.33 53.31 14.87 48.42 6.28 43.48 6.28 50.47 13.52 54.65 20.93 58.92 21.04 58.99 29.36 63.8 36.58 59.62 36.78 59.51 45.18 54.65 51.95 50.74 51.95 43.33 32.59 54.51 32.59 42.34 32.59 36.14">
        </path>
        <path className="leftArrow" d="M9.62,40.75V23.69h0l8.23-4.75,14.56-8.45,5.71,3.29-8.89,5.13L21,23.69,18.6,25.05h0l10.19,5.86L32.44,33v7.7l-1-.57-5.89-3.41-10.1-5.83h0V53.44L9.59,50.08V40.75Z" 
        transform="translate(-9.59 -10.49)">
        </path>
        <path 
        className="rightArrow" d="M67.8,40.75V23.69h0l-8.21-4.78L45,10.49,39.3,13.78l8.89,5.13,8.27,4.78,2.36,1.36h0L48.63,30.91,45,33v7.7l1-.57,5.89-3.41L62,30.91h0V53.44l5.82-3.36V40.75Z" 
        transform="translate(-9.59 -10.49)">
        </path>
        </svg>
    </Link>
  );
}

export default function Navbar() {
  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 ">
      <div className="lg:sticky lg:top-20">
        <LayoutGroup>
          <nav
            className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
                      {
                        'text-neutral-500': !isActive,
                        'font-bold': isActive,
                      }
                    )}
                  >
                    <span className="relative py-[5px] px-[10px]">
                      {name}
                      {path === pathname ? (
                        <motion.div
                          className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]"
                          layoutId="sidebar"
                          transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}
