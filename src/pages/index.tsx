import Image from 'next/image';

import Layout from '@/components/layout/Layout';
import Countdown from '@/components/Sections/Countdown';
import DoubleTile from '@/components/Sections/DoubleTile';
import Seo from '@/components/Seo';

import AtSymbol from '../../public/svg/at-symbol.svg';
import Bank from '../../public/svg/bank.svg';
import Gift from '../../public/svg/gift.svg';
import Ikea from '../../public/svg/ikea.svg';
import MBWay from '../../public/svg/mb-way.svg';
import Phone from '../../public/svg/phone.svg';

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

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main className='-mt-16'>
        <section id='home' className='relative h-screen max-h-screen md:mb-32'>
          <Image
            src='/images/hero.png'
            fill
            sizes='100vw'
            style={{
              objectFit: 'cover',
            }}
            alt='main'
            className='object-[65%] md:object-center'
          />
        </section>
        <div className='grid grid-cols-1 grid-rows-2'>
          <DoubleTile
            imageSrc='/images/hands-ring.png'
            imageClassName='object-[65%] md:object-center'
            id='where-and-when'
          >
            <div className='flex flex-[3] flex-col items-center justify-center gap-5'>
              <h2 className='text-lg font-normal md:text-xl'>Onde & Quando</h2>
              <h2 className='text-center text-xl md:text-4xl'>
                7 de Abril, 2023 <br />
                13h30
              </h2>
              <div>
                <p className='font-bold'>Quinta da Morgadinha</p>
                <p>R. Pedro Álvares Cabral 345, 4435-448 Rio Tinto</p>
              </div>
              <button className='border-1 rounded-md border border-black px-4 py-2 text-sm transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 md:mt-12'>
                Deste dia não me posso esquecer...
              </button>
            </div>
            <Countdown />
          </DoubleTile>
          <DoubleTile
            reverse
            imageSrc='/images/hugging.png'
            id='about-us'
            imageClassName='object-[25%]'
          >
            <div className='flex h-full max-w-sm flex-col items-center justify-center gap-5'>
              <h2 className='text-lg font-normal md:text-xl'>Sobre Nós</h2>
              <p className='flex flex-col gap-2 text-left'>
                <span>
                  Conhecemo-nos a 25 de Julho, 2016 e a verdade é que não foi
                  amor à primeira vista. Foi uma amizade que cresceu durante
                  três anos e com ela amor, que nos fez começar a namorar a 5 de
                  Outubro 2019.
                </span>
                <span>
                  Queremos agora dar o nó final, depois três anos de namoro,
                  importantes para que o nó seja perfeito e inquebrável.
                </span>
                <span>
                  Acreditamos que todo este trajecto foi graças ao Senhor, que
                  nos tem vindo a preparar para participar numa das suas
                  maravilhosas criações, o casamento.
                </span>
              </p>
            </div>
          </DoubleTile>
        </div>
        <section id='galery' className='layout py-16'>
          <div className='m-auto grid h-full max-w-[300px] grid-cols-1 grid-rows-5 gap-6 md:max-w-5xl md:grid-cols-3 md:grid-rows-2'>
            <div className='relative md:row-span-2'>
              <Image
                src='/images/hugging-look.png'
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: '50% 20%',
                }}
                alt='main'
              />
            </div>
            <div className='relative h-[300px]'>
              <Image
                src='/images/showing-ring.png'
                fill
                style={{
                  objectFit: 'cover',
                }}
                alt='main'
              />
            </div>
            <div className='relative'>
              <Image
                src='/images/walking-narrow.png'
                fill
                style={{
                  objectFit: 'cover',
                }}
                alt='main'
              />
            </div>
            <div className='relative'>
              <Image
                src='/images/resting-heads.png'
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: 'bottom',
                }}
                alt='main'
              />
            </div>
            <div className='relative'>
              <Image
                src='/images/loving-stair.png'
                fill
                style={{
                  objectFit: 'cover',
                }}
                className='object-[20%] md:object-[35%]'
                alt='main'
              />
            </div>
          </div>
        </section>
        <section
          id='contacts'
          className='flex flex-col gap-16 py-12 text-center'
        >
          <div className='flex flex-col gap-10 bg-[#F3EAEA] px-6 py-24 md:gap-16'>
            <div>
              <h2>Esperamos poder contar contigo!</h2>
              <p className='mt-2'>
                Por favor, confirme a sua presença até{' '}
                <strong>7 de Março, 2023</strong>. <br />
                Estamos ansiosos de celebrar este dia contigo.
              </p>
            </div>
            <div className='flex flex-col justify-evenly gap-6 md:flex-row'>
              <div className='flex flex-col gap-2'>
                <h3>Sophie</h3>
                <ul className='flex flex-col gap-1 self-center'>
                  <li className='flex items-center gap-2'>
                    <AtSymbol /> sophiepousinho@gmai.com
                  </li>
                  <li className='flex items-center gap-2'>
                    <Phone /> 924 109 640
                  </li>
                </ul>
              </div>
              <div className='flex flex-col gap-2'>
                <h3>Daniel</h3>
                <ul className='flex flex-col gap-1 self-center'>
                  <li className='flex items-center gap-2'>
                    <AtSymbol /> rui.daniel.simao@gmail.com
                  </li>
                  <li className='flex items-center gap-2'>
                    <Phone /> 916 961 068
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className='layout grid grid-cols-1 grid-rows-2 gap-6 py-16 text-center lg:grid-cols-2 lg:grid-rows-1'>
          <div className='flex flex-col items-center justify-center gap-8'>
            <Gift className='h-16 w-16' />
            <div className='max-w-md'>
              <p>
                A tua presença é-nos mais importante do que qualquer presente
                que algumas vez nos pudesses dar.
              </p>
              <br />
              <p>
                Porém, se for da tua vontade apoiar-nos neste novo capítulo das
                nossas vidas, deixamos aqui formas de o conseguires.
              </p>
            </div>
            <div className='flex flex-col gap-12 md:my-10 md:flex-row'>
              <div className='flex flex-col gap-2'>
                <h3>Monetário</h3>
                <ul className='flex flex-col gap-1'>
                  <li className='flex items-center gap-2'>
                    <MBWay /> 916 961 068
                  </li>
                  <li className='flex items-center gap-2'>
                    <Bank /> PT5003300002398002700436
                  </li>
                </ul>
              </div>
              <div className='flex flex-col gap-2'>
                <div>
                  <h3>Lista de Presentes</h3>
                  <p className='text-xs'>(disponível a partir de 01/02)</p>
                </div>
                <ul className='flex flex-col gap-1'>
                  <li className='flex items-center justify-center gap-2'>
                    <Ikea className='h-12 w-24' />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <div className='relative h-[300px] w-[300px] md:h-[400px] md:w-[400px]'>
              <Image
                src='/images/holding-hands-ring.png'
                fill
                style={{
                  objectFit: 'cover',
                }}
                alt='main'
                className='h-[400px] w-[400px]'
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
