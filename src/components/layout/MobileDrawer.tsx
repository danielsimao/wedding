import clsx from 'clsx';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import useBlockScroll from '@/hooks/use-block-scroll';

import { NavLink } from '@/components/layout/Header';

type MobileDrawerProps = {
  isOpen: boolean;
  links: NavLink[];
  isAnimating: boolean;
  onNavigate: (cb: () => void) => void;
};

const MobileDrawer = ({
  isOpen,
  links,
  isAnimating,
  onNavigate,
}: MobileDrawerProps) => {
  const [blockScroll, allowScroll] = useBlockScroll();

  useEffect(() => {
    if (isOpen) {
      blockScroll();
    } else {
      allowScroll();
    }
  }, [allowScroll, blockScroll, isOpen]);

  return (
    <>
      {isOpen &&
        createPortal(
          <div>
            <div className='fixed inset-0 z-10 box-border overflow-auto text-center md:hidden'>
              <div
                className={clsx(
                  'drawer bg-white',
                  isAnimating ? 'drawer--open' : ''
                )}
              >
                <nav className='ml-12 pt-32'>
                  <ul className='flex flex-col items-start justify-center gap-4 text-2xl font-bold'>
                    {links.map(({ href, label }) => (
                      <li key={`${href}${label}`}>
                        <a
                          href={href}
                          className='font-alice hover:text-gray-600'
                          onClick={(e) => {
                            e.preventDefault();

                            const scroll = () => window.open(href, '_self');

                            onNavigate(scroll);
                          }}
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default MobileDrawer;
