import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    img: "https://i.imgur.com/wyd9Jzm.jpeg",
    title: "Blusa branca básica feminina",
    desc: "Blusa de viscose e algodão",
    rating: 5,
    price: 45.0,
  },
  {
    img: "https://i.imgur.com/jCsDkzx.jpeg",
    title: "Blusa verde básica feminina",
    desc: "Blusa de viscose e algodão",
    rating: 4,
    price: 45.0,
  },
  {
    img: "https://i.imgur.com/rxVxANi.jpeg",
    title: "Blusa Branca UV feminina",
    desc: "Blusa de fibras, a Poliamida e o Poliéster",
    rating: 4,
    price: 45.0,
  },
  {
    img: "https://i.imgur.com/UBdXfEO.jpeg",
    title: "Blusa branca Leg masculina",
    desc: "Blusa de viscose e algodão",
    rating: 5,
    price: 45.0,
  },
  {
    img: "https://i.imgur.com/UBdXfEO.jpeg",
    title: "Blusa branca básica masculina",
    desc: "Blusa de viscose e algodão",
    rating: 5,
    price: 45.0,
  },
  {
    img: "https://i.imgur.com/UBdXfEO.jpeg",
    title: "Blusa branca UV masculina",
    desc: "Blusa de fibras, a Poliamida e o Poliéster",
    rating: 4,
    price: 45.0,
  },
];

const Products = () => {
  return (
    <div>
      <div className="container pt-16 ">
        <h2 className="font-medium text-3xl pb-4 text-center">
          Peças em Promoção!
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-3 gap-10 sm:gap-x-2 sm:gap-y-10 xl:gap-x-20 xl:gap-y-10 place-items-center">
          {productsData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
