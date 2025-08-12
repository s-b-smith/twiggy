import Carousel from 'react-material-ui-carousel';
import { CarouselProps } from 'react-material-ui-carousel/dist/components/types';

interface TwiggyCarouselProps extends CarouselProps {
  isNavDrawerOpen: boolean;
  isEnabled?: boolean;
}
const TwiggyCarousel = (props: TwiggyCarouselProps) => {
  const isEnabled = props.isEnabled === undefined || props.isEnabled;

  return (
    <Carousel
      autoPlay={false}
      navButtonsAlwaysVisible={isEnabled}
      navButtonsAlwaysInvisible={!isEnabled}
      swipe={isEnabled}
      animation="slide"
      duration={500}
      indicators={false}
      height="200px"
      {...props}
    />
  );
};

export default TwiggyCarousel;
