import Image from 'next/image';
import { HTMLAttributes } from 'react';

type Props = {
  imageSrc: string;
  reverse?: boolean;
  imageClassName?: string;
};

type NativeAttrs = Omit<HTMLAttributes<unknown>, keyof Props>;

type DoubleTileProps = Props & NativeAttrs;

const DoubleTile = ({
  imageSrc,
  children,
  reverse,
  imageClassName,
  ...props
}: DoubleTileProps) => {
  return (
    <section
      className='grid min-h-screen w-screen grid-rows-2 md:grid-cols-2 md:grid-rows-1'
      {...props}
    >
      <div
        className={`relative ${
          reverse ? 'order-2' : 'order-2 md:order-1'
        } h-full w-full `}
      >
        <Image
          src={imageSrc}
          fill
          // sizes='100vw'
          style={{
            objectFit: 'cover',
          }}
          alt='main'
          className={imageClassName}
        />
      </div>
      <div
        className={`${
          reverse ? 'order-1' : 'order-1 md:order-2'
        } flex flex-col items-center justify-between gap-10 px-6 py-8 text-center  md:py-0`}
      >
        {children}
      </div>
    </section>
  );
};

export default DoubleTile;