import { useAppSelector } from 'hooks/react-redux-hooks';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { CarouselProps } from 'react-material-ui-carousel/dist/components/types';

// TODO: See if you can consolidate sx props
interface TwiggyCarouselProps extends CarouselProps {
  prevRef?: React.MutableRefObject<(() => void) | null>;
  nextRef?: React.MutableRefObject<(() => void) | null>;
  isEnabled?: boolean; // Delete this
  onNextClick?: () => void; // Delete this
  onPrevClick?: () => void; // Delete this
  navButtonPaddingTop?: string; // Delete this
  navButtonPaddingBottom?: string; // Delete this
  marginTop?: string;
  height?: string;
}
// Navigation is de-coupled, this component cannot be directly interacted with
const TwiggyCarousel = (props: TwiggyCarouselProps) => {
  // TODO: Calculate ANY viewport changes, instead of just when the nav drawer is open
  const { isOpen: isNavDrawerOpen } = useAppSelector(state => state.navBar);

  return (
    <Carousel
      autoPlay={false}
      swipe={false}
      animation="slide"
      duration={500}
      indicators={false}
      height={props.height ?? '200px'}
      sx={{
        marginLeft: isNavDrawerOpen ? '-87.5px' : '0px',
        width: `calc(100% + ${isNavDrawerOpen ? '175px' : '0%'})`,
        marginTop: props.marginTop ?? undefined
      }}
      NavButton={({ onClick, next, prev }) => {
        if (next && props.nextRef) {
          // Type is "Function", which causes a cascade of TypeScript violations
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          props.nextRef.current = onClick as any;
        }
        if (prev && props.prevRef) {
          // Type is "Function", which causes a cascade of TypeScript violations
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          props.prevRef.current = onClick as any;
        }
        return null; // don't render the default buttons
      }}
      {...props}
    />
  );
};

export default TwiggyCarousel;
