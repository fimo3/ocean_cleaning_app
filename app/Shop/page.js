import React from "react";
import ShopCard from "../(components)/ShopCard";

const Shop = () => {
  return (
    <div>
      <h1 className="underline decoration-secondary decoration-wavy rounded-md">
        Shop
      </h1>
      <div className="bg-primary-hover p-3 m-3  rounded-md lg:grid grid-cols-5 ">
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <ShopCard />
      </div>
    </div>
  );
};

export default Shop;
