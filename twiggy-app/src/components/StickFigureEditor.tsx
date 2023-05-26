import { Box, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { CarouselProps } from 'react-material-ui-carousel/dist/components/types';
import Canvas from './Canvas';
import { drawCircleHead, drawOvalHorizontalHead, drawOvalVerticalHead } from '../shapes/heads';

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

type StickFigureProps = {
  isNavDrawerOpen: boolean;
};
const StickFigureEditor = ({ isNavDrawerOpen }: StickFigureProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        ml: isNavDrawerOpen ? '240px' : '65px',
        mt: '69px',
        maxWidth: `calc(100% - '65px'})`
      }}
    >
      <StickFigureCarousel isNavDrawerOpen={isNavDrawerOpen}>
        <Canvas draw={drawCircleHead} />
        <Canvas draw={drawOvalVerticalHead} />
        <Canvas draw={drawOvalHorizontalHead} />
      </StickFigureCarousel>
      <StickFigureCarousel isNavDrawerOpen={isNavDrawerOpen}>
        <Typography lineHeight="200px">Test text</Typography>
      </StickFigureCarousel>
      <StickFigureCarousel isNavDrawerOpen={isNavDrawerOpen}>
        <Typography lineHeight="200px">Test text</Typography>
      </StickFigureCarousel>
    </Box>
  );
};

export default StickFigureEditor;
