import { useEffect, useRef, useState } from 'react';
import { marqueeRowOne, marqueeRowTwo } from '../data/marquee';

/** Repeat each row three times so the strip never runs out of tiles. */
const tripled = (images: string[]) => [...images, ...images, ...images];

const rowOne = tripled(marqueeRowOne);
const rowTwo = tripled(marqueeRowTwo);

function Tile({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt=""
      loading="lazy"
      className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
    />
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const shift = offset - 200;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
    >
      <div className="flex flex-col gap-3">
        <div
          className="flex w-max gap-3"
          style={{ transform: `translateX(${shift}px)`, willChange: 'transform' }}
        >
          {rowOne.map((src, i) => (
            <Tile key={`row1-${i}`} src={src} />
          ))}
        </div>

        <div
          className="flex w-max gap-3"
          style={{ transform: `translateX(${-shift}px)`, willChange: 'transform' }}
        >
          {rowTwo.map((src, i) => (
            <Tile key={`row2-${i}`} src={src} />
          ))}
        </div>
      </div>
    </section>
  );
}
