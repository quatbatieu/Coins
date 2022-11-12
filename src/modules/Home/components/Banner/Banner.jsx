import React from "react";
import scss from "./style.module.scss";
import data from "./data.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={scss.center}>
      <div className="container">
        <Slider {...settings} className="row">
          {data.map((value) => {
            return (
              <div className="col-sm-3 p-3" key={value.id}>
                <img
                  width={"100%"}
                  height={"300px"}
                  className="rounded-3"
                  src="./img/c6.jpg"
                  alt=""
                />
                <span>{value.bannerImageReferUrl}</span>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
