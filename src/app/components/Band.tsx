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
    pauseOnHover: true,
  };

  const slideData = [
    {
      id: 0,
      img: "https://i.imgur.com/fRI6HyU.png",
      title: "Coleção retorna",
      desc: "Roupas e acessórios",
      price: "R$ 25",
    },
    {
      id: 1,
      img: "https://i.imgur.com/PgNmKWc.png",
      title: "Coleção Retorna",
      desc: "Roupas e acessórios",
      price: "R$ 44",
    },
    {
      id: 2,
      img: "https://i.imgur.com/zTeF2VN.png",
      title: "Coleção do mês",
      desc: "Roupas e acessórios",
      price: "R$ 35",
    },

    {
      id: 3,
      img: "https://i.imgur.com/gW4sJ2O.png",
      title: "Nova coleção",
      desc: "Roupas e acessórios",
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
