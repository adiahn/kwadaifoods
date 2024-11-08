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
    <div className="relative w-full lg:w-4/4 xl:w-2/2 mx-auto py-2 h-3">
      <Slider {...settings} className="rounded-lg h-36 shadow-lg overflow-hidden">
        <div>
          <img src={slide1} alt="Slide 1" className="w-full h-36 object-cover bg-center" />
        </div>  
        <div>
          <img src={slide2} alt="Slide 2" className="w-full h-auto object-cover" />
        </div>
      </Slider>
    </div>
  );
};

export default MySlider;