import { Button } from '@mui/material';
import { useState } from 'react';
import Carousel from 'react-material-ui-carousel';

const MyCarouselWithManualControl = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Function to move to the next slide
  const goToNext = () => {
    setCarouselIndex(prevIndex => (prevIndex + 1) % 3);
  };
  const goToPrev = () => {
    setCarouselIndex(prevIndex => (prevIndex - 1) % 3);
  };

  const items = [{ name: 'Item #1' }, { name: 'Item #2' }, { name: 'Item #3' }];

  return (
    <div>
      <Button onClick={goToPrev}>Prev Slide</Button>
      <Button onClick={goToNext}>Next Slide</Button>
      <Carousel
        index={carouselIndex}
        onChange={now => setCarouselIndex(now ?? 0)}
        autoPlay={false}
        // navButtonsAlwaysVisible={true}
        navButtonsAlwaysInvisible={true}
        swipe={false}
        animation="slide"
        duration={500}
        indicators={false}
        height={'200px'}
      >
        {items.map((item, i) => (
          <h1 key={i}>{item.name}</h1>
        ))}
      </Carousel>
    </div>
  );
};

export default MyCarouselWithManualControl;
