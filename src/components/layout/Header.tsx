import clsx from 'clsx';
import Lottie, { LottieRef } from 'lottie-react';
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

  React.useEffect(() => {
    lottieRef.current?.setSpeed(1.5);
  }, [lottieRef]);

  React.useEffect(() => {
    const handleScroll = () => {
      const moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
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

  return (
    <header
      ref={ref}
      style={{
        transition: 'top 0.4s ease-out',
        top: visible ? 0 : `-${ref.current?.clientHeight}px`,
      }}
      className='sticky top-0 z-50 min-h-[56px] bg-white'
    >
      <div className={isOpen ? 'fixed top-0 left-0 right-0 bg-white' : ''}>
        <div className={clsx('layout flex h-14 items-center justify-between')}>
          <UnstyledLink
            href='/'
            className='cinzel font-bold hover:text-gray-600'
          >
            Sophie & Daniel
          </UnstyledLink>
          <div className='inline-flex md:hidden '>
            <button
              disabled={isDisabled}
              className='text-2xl'
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
            <ul className='cinzel flex items-center justify-between space-x-4'>
              {links.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <UnstyledLink
                    href={href}
                    className='cinzel hover:text-gray-600'
                  >
                    {label}
                  </UnstyledLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export type { NavLink };
