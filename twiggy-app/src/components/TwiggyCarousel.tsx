import { useAppSelector } from 'hooks/react-redux-hooks';
import Carousel from 'react-material-ui-carousel';
import { CarouselProps } from 'react-material-ui-carousel/dist/components/types';

interface TwiggyCarouselProps extends CarouselProps {
  isEnabled?: boolean;
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
      navButtonsAlwaysVisible={isEnabled}
      navButtonsAlwaysInvisible={!isEnabled}
      swipe={isEnabled}
      animation="slide"
      duration={500}
      indicators={false}
      height={props.height ?? '200px'}
      sx={{
        marginLeft: isNavDrawerOpen ? '-87.5px' : '0px',
        width: `calc(100% + ${isNavDrawerOpen ? '175px' : '0%'})`,
        marginTop: props.marginTop ?? undefined
      }}
      navButtonsWrapperProps={{
        style: {
          margin: isNavDrawerOpen ? 'auto 87.5px' : 'auto',
          paddingTop: props.navButtonPaddingTop ?? 'auto',
          paddingBottom: props.navButtonPaddingBottom ?? 'auto'
        }
      }}
      {...props}
    />
  );
};

export default TwiggyCarousel;
