import { IconButton, styled } from '@mui/material';
import { useState } from 'react';
import { sleep } from 'utils/asyncUtils';
import CarouselNextArrowIcon from './CarouselNextArrowIcon';
import CarouselPrevArrowIcon from './CarouselPrevArrowIcon';

const NavIconButton = styled(IconButton, { shouldForwardProp: prop => prop !== 'isClicked' })(
  ({ isClicked }: { isClicked: boolean }) => ({
    position: 'relative',
    zIndex: 10,
    padding: 0,
    '& .MuiSvgIcon-root': {
      fontSize: '200px',
      transition: 'font-size 0.1s ease-in-out'
    },
    '&:hover .MuiSvgIcon-root': {
      fontSize: isClicked ? '240px' : '250px',
      backgroundColor: 'transparent',
      filter: 'brightness(125%)'
    }
  })
);

const PrevNavButton = ({ onClick }: { onClick: () => void }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <NavIconButton
      tabIndex={0}
      type="button"
      aria-label="Previous"
      disableRipple={true}
      onClick={async () => {
        onClick();

        setIsClicked(true);
        await sleep(100);
        setIsClicked(false);
      }}
      isClicked={isClicked}
    >
      <CarouselPrevArrowIcon />
    </NavIconButton>
  );
};
const NextNavButton = ({ onClick }: { onClick: () => void }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <NavIconButton
      tabIndex={1}
      type="button"
      aria-label="Next"
      disableRipple={true}
      onClick={async () => {
        onClick();

        setIsClicked(true);
        await sleep(100);
        setIsClicked(false);
      }}
      isClicked={isClicked}
    >
      <CarouselNextArrowIcon />
    </NavIconButton>
  );
};

interface CarouselNavArrowsProps {
  isEnabled: boolean;
  prevOnClick: () => void;
  nextOnClick: () => void;
  height?: string;
  marginBottom?: string;
}
const CarouselNavArrows = ({
  prevOnClick,
  nextOnClick,
  isEnabled,
  height,
  marginBottom
}: CarouselNavArrowsProps) => {
  if (!isEnabled) {
    return <></>;
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: height ?? '200px',
        marginBottom: marginBottom ?? '0px'
      }}
    >
      <div>
        <PrevNavButton onClick={prevOnClick} />
      </div>
      <div>
        <NextNavButton onClick={nextOnClick} />
      </div>
    </div>
  );
};

export default CarouselNavArrows;
