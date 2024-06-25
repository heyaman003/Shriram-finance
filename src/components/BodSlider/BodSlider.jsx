import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import "./BodSlider.css"
const BodSlider = () => {
  const cards = [
    { id: 1, img: './LandingPage-img/BOD1.webp', title: 'Ravi Subramanian', text: 'Managing Director & CEO' },
    { id: 2, img: './LandingPage-img/BOD2.webp', title: 'Yalamati Srinivasa Chakravarti', text: 'Director' },
    { id: 3, img: './LandingPage-img/BOD3.webp', title: 'Maya S Sinha', text: 'Independent Director' },
    { id: 4, img: './LandingPage-img/BOD4.webp', title: 'S Sridhar', text: 'Independent Director' },
    { id: 5, img: './LandingPage-img/BOD5.webp', title: 'Lakshminarayanan Priyadarshini', text: 'Independent Director' },
    { id: 6, img: './LandingPage-img/BOD6.webp', title: 'Gauri Shankar Agrawal', text: 'Whole Time Director and CFO' }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container bod-sect mx-auto">
            <h1>Profile of the Board of Directors</h1>

      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="p-4">
            <div className="cardx text-center border-0 bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={card.img} className="w-full h-48 object-contain" alt={card.title} />
              <div className="p-4">
                <h5 className="text-gray-800 font-bold">{card.title}</h5>
                <p className="text-gray-600">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BodSlider;
