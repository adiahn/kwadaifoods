import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../../Assets/Images/slide1.png';
import slide2 from '../../Assets/Images/slide2.png';

const MySlider = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) return null;  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    appendDots: dots => (
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          background: '#ccc',
          margin: '0 5px',
        }}
      ></div>
    )
  };

  return (
    <div className="w-full mx-auto">
      <div className="relative h-[200px]">
        <Slider {...settings} className="rounded-lg shadow-lg overflow-hidden h-full">
          <div className="h-full">
            <img src={slide1} alt="Slide 1" className="w-full h-full object-cover" />
          </div>  
          <div className="h-full">
            <img src={slide2} alt="Slide 2" className="w-full h-full object-cover" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default MySlider;