import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { CarouselProps } from 'react-material-ui-carousel/dist/components/types';
import Canvas from './Canvas';
import {
  drawCircleHead,
  drawOvalHorizontalHead,
  drawOvalVerticalHead,
  drawSquareHead
} from '../shapes/heads';
import { drawCircleTorso, drawOvalTorso, drawStickTorso } from '../shapes/torsos';
import { drawRoundLegs, drawRoundSkinnyLegs, drawStickLegs } from '../shapes/legs';
import { useAppSelector } from 'hooks/react-redux-hooks';

interface StickFigureCarouselProps extends CarouselProps {
  isNavDrawerOpen: boolean;
}
const StickFigureCarousel = (props: StickFigureCarouselProps) => (
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

// type StickFigureProps = {
//   isNavDrawerOpen: boolean;
// };
const StickFigureEditor = () => {
  const { isOpen: isNavDrawerOpen } = useAppSelector(state => state.navBar);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        ml: isNavDrawerOpen ? '240px' : '65px',
        mt: '80px',
        maxWidth: `calc(100% - '65px'})`
      }}
    >
      <StickFigureCarousel isNavDrawerOpen={isNavDrawerOpen}>
        <Canvas draw={drawCircleHead} />
        <Canvas draw={drawOvalVerticalHead} />
        <Canvas draw={drawOvalHorizontalHead} />
        <Canvas draw={drawSquareHead} />
      </StickFigureCarousel>
      <StickFigureCarousel isNavDrawerOpen={isNavDrawerOpen}>
        <Canvas draw={drawStickTorso} />
        <Canvas draw={drawOvalTorso} />
        <Canvas draw={drawCircleTorso} />
      </StickFigureCarousel>
      <StickFigureCarousel isNavDrawerOpen={isNavDrawerOpen}>
        <Canvas draw={drawStickLegs} />
        <Canvas draw={drawRoundLegs} />
        <Canvas draw={drawRoundSkinnyLegs} />
      </StickFigureCarousel>
    </Box>
  );
};

export default StickFigureEditor;
