import { useAppSelector } from 'hooks/react-redux-hooks';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { CarouselProps } from 'react-material-ui-carousel/dist/components/types';

interface TwiggyCarouselProps extends CarouselProps {
  isEnabled?: boolean;
  prevRef?: React.MutableRefObject<(() => void) | null>;
  nextRef?: React.MutableRefObject<(() => void) | null>;
  onNextClick?: () => void; // Delete this
  onPrevClick?: () => void; // Delete this
  navButtonPaddingTop?: string;
  navButtonPaddingBottom?: string;
  marginTop?: string;
}
const TwiggyCarousel = (props: TwiggyCarouselProps) => {
  // TODO: Calculate ANY viewport changes, instead of just when the nav drawer is open
  const { isOpen: isNavDrawerOpen } = useAppSelector(state => state.navBar);
  const isEnabled = props.isEnabled === undefined || props.isEnabled;

  return (
    <Carousel
      autoPlay={false}
      // navButtonsAlwaysVisible={isEnabled}
      // navButtonsAlwaysInvisible
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
      // navButtonsWrapperProps={{
      //   className: 'carousel-nav-wrapper',
      //   style: {
      //     // position: 'absolute', // ← ensure zIndex takes effect
      //     // zIndex: 1000,
      //     margin: isNavDrawerOpen ? 'auto 87.5px' : 'auto',
      //     paddingTop: props.navButtonPaddingTop ?? 'auto',
      //     paddingBottom: props.navButtonPaddingBottom ?? 'auto'
      //   }
      // }}
      // NextIcon={<CarouselNextArrowIcon />}
      // PrevIcon={<CarouselPrevArrowIcon />}
      // NavButton={({ onClick, next }) => {
      //   return next
      //     ? props.nextButton || (
      //         <NextNavButton
      //           onClick={() => {
      //             onClick();
      //             if (props.onNextClick) props.onNextClick();
      //           }}
      //         />
      //       )
      //     : props.prevButton || (
      //         <PrevNavButton
      //           onClick={() => {
      //             onClick();
      //             if (props.onPrevClick) props.onPrevClick();
      //           }}
      //         />
      //       );
      // }}
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
