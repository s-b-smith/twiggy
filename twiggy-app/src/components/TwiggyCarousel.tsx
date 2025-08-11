import Carousel from 'react-material-ui-carousel';
import { CarouselProps } from 'react-material-ui-carousel/dist/components/types';

interface TwiggyCarouselProps extends CarouselProps {
  isNavDrawerOpen: boolean;
}
const TwiggyCarousel = (props: TwiggyCarouselProps) => (
  <Carousel
    autoPlay={false}
    navButtonsAlwaysVisible={true}
    animation="slide"
    duration={500}
    indicators={false}
    height="200px"
    sx={{ width: props.isNavDrawerOpen ? '100%' : '75%' }}
    {...props}
  />
);

export default TwiggyCarousel;
