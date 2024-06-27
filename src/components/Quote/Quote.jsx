import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Quote.css'; // Add your custom styles here

const Quote = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <div className='quote-section pt-2'>
      <h1 className='text-center'>Message from WTD & CFO</h1>
    <div className="carousel-container">
    <Slider {...settings}>
      <div>
        <div className="slide">
          <img src="./LandingPage-img/Group 8.webp" className='object-cover h-full w-full' alt="Quote 1" />
        </div>
      </div>
      <div>
        <div className="slide">
          <img src="./LandingPage-img/Group 9.webp" className='object-cover h-full w-full' alt="Quote 2" />
        </div>
      </div>
    </Slider>
  </div>
  </div>
  );
};

export default Quote;
