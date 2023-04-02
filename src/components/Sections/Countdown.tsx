import { useEffect, useState } from 'react';

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date('04/07/2023 13:30:00');

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference <= 0) return;

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      // if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
      //   setPartyTime(true);
      // }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-[1] flex-col items-center justify-center text-center'>
      <p>
        Vamos ser felizes para sempre, <br /> dentro de:
      </p>
      <p className='text-2xl font-bold'>
        <span className='mr-[0.1rem]'>{days}</span>
        <span className='mr-3 text-base'>Dias</span>
        <span className='mr-[0.1rem]'>{hours}</span>
        <span className='mr-1 text-base'>H</span>
        <span className='mr-[0.1rem]'>{minutes}</span>
        <span className='mr-1 text-base'>M</span>
        <span className='mr-[0.1rem]'>{seconds}</span>
        <span className='text-base'>S</span>
      </p>
    </div>
  );
};

export default Countdown;
