import clsx from 'clsx';
import Lottie, { LottieRef } from 'lottie-react';
import { useRouter } from 'next/router';
import * as React from 'react';

import MobileDrawer from '@/components/layout/MobileDrawer';
import UnstyledLink from '@/components/links/UnstyledLink';

import burgerJSON from '../../../public/lottie/burger.json';

type NavLink = { href: string; label: string };

const links: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#where-and-when', label: 'Onde & Quando' },
  { href: '#about-us', label: 'Sobre Nós' },
  { href: '#galery', label: 'Galeria' },
  { href: '#contacts', label: 'Contactos' },
];

export default function Header() {
  const ref = React.useRef<HTMLHeadElement>(null);
  const [position, setPosition] = React.useState(
    typeof window !== 'undefined' ? window.pageYOffset : 0
  );
  const [visible, setVisible] = React.useState(true);

  const [isOpen, setOpen] = React.useState(false);
  const [isAnimating, setAnimating] = React.useState(false);

  const [isDisabled, setDisabled] = React.useState(false);

  const lottieRef: LottieRef = React.useRef(null);

  const heroRef = React.useRef<HTMLElement | null>();
  const [isOutsideHero, setOutsideHero] = React.useState(false);

  const router = useRouter();
  const isHome = router.pathname === '/';

  React.useEffect(() => {
    if (!heroRef.current) {
      heroRef.current = document.getElementById('home');
    }
  }, []);

  React.useEffect(() => {
    lottieRef.current?.setSpeed(1.5);
  }, [lottieRef]);

  React.useEffect(() => {
    const handleScroll = () => {
      const moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);

      //////

      setOutsideHero(
        (heroRef.current?.clientHeight || 0) * 0.8 < window.pageYOffset
      );
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handleCloseDrawer = (cb?: () => void) => {
    setAnimating(true);
    lottieRef.current?.playSegments([80, 124], true);
    lottieRef.current?.play();

    setTimeout(() => {
      setOpen((s) => !s);
      setAnimating(false);
      cb?.();
    }, 500);
  };

  const handleClick = () => {
    setDisabled(true);

    if (!isOpen) {
      lottieRef.current?.playSegments([0, 80], true);
      lottieRef.current?.play();
      setOpen((s) => !s);
    } else {
      handleCloseDrawer();
    }
  };

  React.useEffect(() => {
    if (isOutsideHero || isOpen || !isHome) {
      ref.current?.querySelectorAll('path').forEach((path) => {
        if (path.getAttribute('stroke')) {
          path.setAttribute('stroke', 'rgb(0,0,0)');
        }
      });
    } else {
      ref.current?.querySelectorAll('path').forEach((path) => {
        if (path.getAttribute('stroke')) {
          path.setAttribute('stroke', 'rgb(250,250,250)');
        }
      });
    }
  }, [isOutsideHero, isOpen, isHome]);

  return (
    <header
      ref={ref}
      style={{
        top: visible ? 0 : `-${ref.current?.clientHeight}px`,
      }}
      className={clsx(
        'sticky z-50 min-h-[64px] transition-all ease-in-out',
        isHome
          ? isOutsideHero
            ? 'bg-white'
            : 'bg-transparent'
          : 'bg-[#F3EAEA]',
        isHome
          ? isOpen || isOutsideHero
            ? 'text-dark'
            : 'text-white'
          : 'text-gray-700'
      )}
    >
      <div className={clsx(isOpen ? 'fixed top-0 left-0 right-0' : undefined)}>
        <div className='layout flex min-h-[64px] items-center justify-between py-2 md:py-0'>
          <UnstyledLink
            href='/'
            className='font-alice text-2xl font-bold text-inherit hover:text-gray-600'
          >
            S<span className='mx-[.2rem] text-sm'>&</span>D
          </UnstyledLink>
          {isHome && (
            <>
              <div className='inline-flex md:hidden'>
                <button
                  disabled={isDisabled}
                  className='p-3 text-2xl'
                  onClick={handleClick}
                >
                  <Lottie
                    as='span'
                    loop={false}
                    autoplay={false}
                    lottieRef={lottieRef}
                    style={{ width: '1em', height: '1em' }}
                    animationData={burgerJSON}
                    onComplete={() => setDisabled(false)}
                  />
                </button>
                <MobileDrawer
                  links={links}
                  isAnimating={isAnimating}
                  isOpen={isOpen}
                  onNavigate={handleCloseDrawer}
                />
              </div>
              <nav className='hidden md:flex'>
                <ul className='flex items-center justify-between gap-6 font-semibold'>
                  {links.map(({ href, label }) => (
                    <li key={`${href}${label}`} className='py-5'>
                      <UnstyledLink
                        href={href}
                        className='py-5 font-alice text-lg font-semibold hover:text-gray-600'
                      >
                        {label}
                      </UnstyledLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export type { NavLink };
