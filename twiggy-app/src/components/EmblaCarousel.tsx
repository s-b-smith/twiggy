import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import useEmblaCarousel from 'embla-carousel-react';
import React from 'react';

export type Slide = { id: string; content: React.ReactNode };

const EmblaCarousel = ({
  slides,
  // Embla’s duration is a *speed factor* (not ms). 20–60 recommended; higher = slower.
  duration = 20, // ~“500ms-ish” feel; tweak to taste
  loop = true
}: {
  slides: Slide[];
  duration?: number;
  loop?: boolean;
}) => {
  const [emblaRef, embla] = useEmblaCarousel({ align: 'start', loop, duration });
  const pending = React.useRef(0); // +N nexts, -N prevs
  const animating = React.useRef(false);
  const [direction, setDirection] = React.useState<'left' | 'right' | 'none'>('none');

  const pump = React.useCallback(() => {
    if (!embla || animating.current || pending.current === 0) return;
    animating.current = true;
    const step = pending.current > 0 ? 1 : -1;
    pending.current += step > 0 ? -1 : 1;
    setDirection(step > 0 ? 'left' : 'right');
    step > 0 ? embla.scrollNext() : embla.scrollPrev();
  }, [embla]);

  // Chain the queue strictly at animation end
  React.useEffect(() => {
    if (!embla) return;
    const onSettle = () => {
      animating.current = false;
      pump();
    };
    embla.on('settle', onSettle);

    return () => {
      embla.off('settle', onSettle);
    };
  }, [embla, pump]);

  const next = () => {
    pending.current += 1;
    pump();
  };
  const prev = () => {
    pending.current -= 1;
    pump();
  };

  return (
    <div className="relative" data-slide-direction={direction}>
      <div className="absolute inset-y-0 left-0 z-10 flex items-center pl-2">
        <IconButton onClick={prev} size="large" aria-label="Previous">
          <ChevronLeft />
        </IconButton>
      </div>
      <div className="absolute inset-y-0 right-0 z-10 flex items-center pr-2">
        <IconButton onClick={next} size="large" aria-label="Next">
          <ChevronRight />
        </IconButton>
      </div>

      {/* Embla structure */}
      <section className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map(s => (
              <div className="embla__slide" key={s.id}>
                <div className="embla__slide__number">{s.content}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmblaCarousel;

/* Minimal CSS (Tailwind-ish sizes already in your app are fine)
.embla { overflow: hidden; }
.embla__container { display: flex; }
.embla__slide { flex: 0 0 100%; min-width: 0; } 
*/
