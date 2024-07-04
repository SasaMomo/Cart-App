import React from "react";
import Slider from "react-slick";
import Slide from "./Slides";
import Slides from "./Slides";

const Band = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "https://i.imgur.com/sbonfdX.png",
      title: "Slide1",
      desc: "first stuff",
      price: "R$ 25",
    },
    {
      id: 1,
      img: "https://i.imgur.com/sbonfdX.png",
      title: "Slide2",
      desc: "first stuff",
      price: "R$ 44",
    },
    {
      id: 2,
      img: "https://i.imgur.com/sbonfdX.png",
      title: "Slide3",
      desc: "first stuff",
      price: "R$ 35",
    },
  ];

  return (
    <div className="mx-auto">
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slides
              key={item.id}
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Band;
