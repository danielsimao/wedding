import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#where-and-when', label: 'Onde & Quando' },
  { href: '#about-us', label: 'Sobre Nós' },
  { href: '#galery', label: 'Galeria' },
  { href: '#contacts', label: 'Galeria' },
];

export default function Header() {
  const ref = React.useRef<HTMLHeadElement>(null);
  const [position, setPosition] = React.useState(
    typeof window !== 'undefined' ? window.pageYOffset : 0
  );
  const [visible, setVisible] = React.useState(true);
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

  return (
    <header
      ref={ref}
      style={{
        transition: 'top 0.4s ease-out',
        top: visible ? 0 : `-${ref.current?.clientHeight}px`,
      }}
      className='sticky top-0 z-50 bg-white'
    >
      <div className='layout flex h-14 items-center justify-between'>
        <UnstyledLink href='/' className='cinzel font-bold hover:text-gray-600'>
          Sophie & Daniel
        </UnstyledLink>
        <nav>
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
    </header>
  );
}
