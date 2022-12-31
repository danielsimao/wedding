import * as React from 'react';

import Header from '@/components/layout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <Header />
      {children}
      <footer className='bg-[#F3EAEA] px-4 py-12 text-center text-xl font-bold text-gray-700'>
        Sophie & Daniel
      </footer>
    </>
  );
}
