import React from "react";
import ShopCard from "../(components)/ShopCard";

const Shop = () => {
  return (
    <div className="p-4">
      <h1 className="underline decoration-secondary decoration-wavy rounded-md">
        Shop
      </h1>
      <p>
        Here you can buy some really cool merch with sea turtles on them and
        with the logo of OceanOvation!!!
      </p>
      <div className="p-3 m-3  rounded-md lg:grid grid-cols-5 ">
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
