import clsx from 'clsx';
import { ReactNode } from 'react';

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

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main className='-mt-[68px] flex flex-col items-center gap-6 px-6'>
        <section
          id='home'
          className='flex min-h-screen flex-col items-center justify-center text-center'
        >
          <h1 className='alice mb-8 font-alice text-3xl'>Ordem de Cerimónia</h1>
          <ol className='max-w-xl text-left text-lg'>
            <li className='flex gap-2'>
              <span className='w-6 font-bold'>1.</span> Chegada dos convidados
            </li>
            <li className='flex gap-2'>
              <span className='w-6 font-bold'>2.</span> Entrada da noiva
            </li>
            <li className='flex gap-2'>
              <span className='w-6 font-bold'>3.</span> Boas-vindas do Oficiante
              Pr. Rui Simão
            </li>
            <li className='flex gap-2'>
              <span className='w-6 font-bold'>4.</span> Louvor - Ao Único
            </li>
            <li className='flex gap-2'>
              <span className='w-6 font-bold'>5.</span> Leitura bíblica dos
              Noivos - I Coríntios 13
            </li>
            <li className='flex gap-2'>
              <span className='w-6 font-bold'>6.</span> Pregação pelo Pr.
              Roberto Santos
            </li>
            <li className='flex gap-2'>
              <span className='w-6 font-bold'>7.</span> Louvor - Digno é o
              Senhor
            </li>
            <li className='flex gap-2 '>
              <span className='w-6 font-bold'>8.</span> Lavagem Símbolica dos
              pés baseada em João 13:1-17
            </li>
            <li className='flex gap-2'>
              <span className='w-6 font-bold'>9.</span>Troca das alianças
            </li>
            <li className='flex gap-2'>
              <span className='w-6 font-bold'>10.</span> Oração final
            </li>
            <li className='flex gap-2'>
              <span className='w-6 font-bold'>11.</span> Declaração final
            </li>
          </ol>
        </section>
        <section
          id='louvor1'
          className='flex min-h-screen max-w-sm flex-col items-center justify-center gap-4 text-center text-base sm:text-lg md:mb-32'
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
        <section
          id='louvor2'
          className='flex min-h-screen max-w-sm flex-col items-center justify-center gap-4 text-center text-base sm:text-lg md:mb-32'
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
        </section>
      </main>
    </Layout>
  );
}
