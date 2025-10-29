import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import React from 'react';

const KeenSliderCarousel = ({ slides }: { slides: { id: string; content: React.ReactNode }[] }) => {
  const pending = React.useRef(0);
  const anim = React.useRef(false);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    defaultAnimation: { duration: 600 },
    animationEnded: () => {
      anim.current = false;
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      pump();
    }
  });

  const pump = React.useCallback(() => {
    if (!slider || anim.current || pending.current === 0) return;
    anim.current = true;
    const step = pending.current > 0 ? 1 : -1;
    pending.current += step > 0 ? -1 : 1;
    step > 0 ? slider.current?.next() : slider.current?.prev();
  }, [slider]);

  return (
    <div>
      <button
        onClick={() => {
          pending.current--;
          pump();
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          pending.current++;
          pump();
        }}
      >
        Next
      </button>
      <div ref={sliderRef} className="keen-slider">
        {slides.map(s => (
          <div className="keen-slider__slide" key={s.id}>
            {s.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeenSliderCarousel;
