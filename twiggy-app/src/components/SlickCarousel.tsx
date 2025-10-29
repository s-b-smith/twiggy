import { useTheme } from '@mui/material';
import { useAppSelector } from 'hooks/react-redux-hooks';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const SlickCarousel = () => {
  const settings: Settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    nextArrow: (
      <div>
        <div style={{ display: 'block', background: 'red' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="black"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
          </svg>
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div style={{ display: 'block', background: 'red' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="black"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
          </svg>
        </div>
      </div>
    )
    // prevArrow: (
    //   <div>
    //     <PrevNavButton onClick={() => {}} />
    //   </div>
    // ),
    // nextArrow: (
    //   <div>
    //     <NextNavButton onClick={() => {}} />
    //   </div>
    // )
  };

  const { isOpen: isNavDrawerOpen } = useAppSelector(state => state.navBar);
  const theme = useTheme();

  return (
    <div
      style={{
        // Drawer open comes from "drawerOpenWidth" in NavDrawer
        marginLeft: isNavDrawerOpen ? '240px' : `calc(${theme.spacing(8)} / 2)`,
        width: `calc(100% - ${isNavDrawerOpen ? '10%' : '50%'})`,
        height: '200px'
        // marginTop: props.marginTop ?? undefined
      }}
    >
      <Slider {...settings}>
        <div>
          <h3>FIRST SLIDE</h3>
        </div>
        <div>
          <h3>SECOND SLIDE</h3>
        </div>
        <div>
          <h3>THIRD SLIDE</h3>
        </div>
        <div>
          <h3>FOURTH SLIDE</h3>
        </div>
      </Slider>
    </div>
  );
};

export default SlickCarousel;
