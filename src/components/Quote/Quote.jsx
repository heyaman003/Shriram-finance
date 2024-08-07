import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReadMoreButton from '../ReadMore/ReadMoreButton';
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
       <div>
            <div className='quote-section pt-2'>
              
              
              <div className="carousel-container">
              <Slider {...settings}>
                <div>
                  <h1 className='text-center'>Message from MD & CEO</h1>
                  <div className="slide">
                    <img src="./LandingPage-img/Group 8.webp" className='object-cover h-full w-[90%]' alt="Quote 1" />
                  </div>
                  <div className='flex justify-center mt-8 pb-4'>
                    <a href="Chairman-message"> <ReadMoreButton/></a>
                  </div>
                </div>
                <div>
                  <h1 className='text-center'>Message from WTD & CFO</h1>
                  <div className="slide">
                    <img src="./LandingPage-img/Group 9.webp" className='object-cover h-full w-full' alt="Quote 2" />
                  </div>
                  <div className='flex justify-center mt-8 pb-4'>
                    <a href="CFO"> <ReadMoreButton/></a>
                  </div>
                </div>
                
              </Slider>
             
            </div>
           
            </div>
          
       </div>
  );
};

export default Quote;
