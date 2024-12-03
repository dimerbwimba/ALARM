'use client';
import React from "react";
import Slider from "react-slick";

const SimpleSliderResponsive = ({children,slidesToShow = 2}:{children: React.ReactNode, slidesToShow:number}) => {
  var settings = {
    dots: false,
    className: "center",
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: slidesToShow ,
    slidesToScroll: 2,
    initialSlide: 0,
    arrows: false, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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
    <div className="about-middle-images slider-container">
      <Slider  {...settings}>
       {children}
      </Slider>
    </div>
  );
}

export default SimpleSliderResponsive;
