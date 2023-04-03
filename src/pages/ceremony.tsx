import clsx from 'clsx';
import { ReactNode } from 'react';

import Corintios13 from '@/components/Corintios13';
import Joao13 from '@/components/Joao13';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

const Piece = ({ children, bis }: { children: ReactNode; bis?: number }) => (
  <div className='relative flex w-full items-center justify-center gap-2 px-4'>
    <div
      className={clsx(
        'flex w-full flex-col justify-start pr-4',
        bis && 'border-r border-black'
      )}
    >
      {children}
    </div>
    {bis && <span className='absolute -right-2'>{bis}x</span>}
  </div>
);

const list = [
  { title: 'Entrada da noiva' },
  { title: 'Boas-vindas', description: 'Oficiante Pr. Rui Simão' },
  { title: 'Louvor', description: 'Ao Único' },
  { title: 'Leitura Bíblica', description: 'I Coríntios 13' },
  { title: 'Pregação', description: 'Pr. Roberto Santos' },
  { title: 'Louvor', description: 'Digno É O Senhor' },
  {
    title: 'Representação Simbólica',
    description: 'João 13:1-17 - Pr. Álvaro Ladeira',
  },
  { title: 'Troca das Alianças' },
  { title: 'Oração e Declaração final' },
];

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main className='-mt-[68px] flex flex-col items-center gap-6'>
        <div className='flex min-h-[50vh] w-full items-center justify-center bg-[#F3EAEA]'>
          <h1 className='alice font-alice text-3xl text-gray-700'>
            Ordem de Cerimónia
          </h1>
        </div>
        <section
          id='home'
          className='mt-16 flex flex-col items-center justify-center px-6 text-center'
        >
          <ol className='flex max-w-xl flex-col gap-2 text-left'>
            {list.map((item, key) => (
              <li key={key} className='flex items-center gap-4'>
                <span className='text-md flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#ba9f9c] font-alice'>
                  {key + 1}.
                </span>
                <div
                  className={clsx(
                    'flex flex-col',
                    item.description ? 'justify-start' : 'justify-center'
                  )}
                >
                  <p className='text-md font-semibold'>{item.title}</p>
                  <p className='text-sm'>{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
        <section
          id='louvor1'
          className='mt-24 flex min-h-screen max-w-md flex-col items-center justify-center gap-4 px-6 text-center text-base sm:text-lg'
        >
          <h1 className='mb-8 font-alice'>Ao Único</h1>
          <Piece bis={2}>
            <p>Ao único que é digno de receber</p>
            <p>A honra e a glória, a força e o poder</p>
            <p>Ao Rei eterno, imortal, invisível, mas real</p>
            <p>A Ele ministramos o louvor</p>
          </Piece>
          <Piece>
            <p>Coroamos a Ti, ó, Rei Jesus</p>
            <p>Coroamos a Ti, ó, Rei Jesus</p>
          </Piece>
          <Piece>
            <p>Adoramos o Teu nome</p>
            <p>Nos rendemos aos Teus pés</p>
            <p>Consagramos todo o nosso ser a Ti</p>
          </Piece>
          <Piece>
            <p>Ao único que é digno de receber</p>
            <p>A honra e a glória, a força e o poder</p>
            <p>Ao Rei eterno, imortal, invisível, mas real</p>
            <p>A Ele ministramos o louvor</p>
          </Piece>
          <Piece bis={2}>
            <p>Coroamos a Ti, ó, Rei Jesus</p>
            <p>Coroamos a Ti, ó, Rei Jesus</p>
            <p></p>
            <p>Adoramos o Teu nome</p>
            <p>Nos rendemos aos Teus pés</p>
            <p>Consagramos todo o nosso ser a Ti</p>
          </Piece>
          <Piece>
            <p>Consagramos todo o nosso ser a Ti</p>
          </Piece>
        </section>
        <section id='corintios 13' className='mt-24 max-w-5xl px-6'>
          <h1 className='mb-8 text-center font-alice'>I Coríntios 13</h1>
          <Corintios13 />
        </section>
        <section
          id='louvor2'
          className='mt-24 flex max-w-sm flex-col items-center justify-center gap-4 px-6 text-center text-base sm:text-lg'
        >
          <h1 className='mb-8 font-alice'>Digno É O Senhor</h1>
          <Piece>
            <p>Pela cruz dou graças</p>
            <p>Pelo preço pago ali</p>
            <p>Meu pecado suportou</p>
            <p>Por seu amor, a graça recebi</p>
          </Piece>
          <Piece>
            <p>Pelo amor dou graças</p>
            <p>Pelos pregos em suas mãos</p>
            <p>Com seu sangue me lavou</p>
            <p>E me mostrou, seu amor e seu perdão</p>
          </Piece>
          <Piece>
            <p>Digno é o Senhor</p>
            <p>Que no trono está</p>
            <p>Coroai o rei dos reis</p>
            <p>Pra sempre reinará</p>
          </Piece>
          <Piece>
            <p>Exaltado está</p>
            <p>Cristo salvador</p>
            <p>Cordeiro de Deus por mim morreu</p>
            <p>Digno é o Senhor</p>
            <p>Digno é o Senhor</p>
          </Piece>
        </section>{' '}
        <section id='joao 13' className='my-24 max-w-5xl px-6'>
          <h1 className='mb-8 text-center font-alice'>João 13:1-17</h1>
          <Joao13 />
        </section>
      </main>
    </Layout>
  );
}
