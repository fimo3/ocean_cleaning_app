import React from "react";
import ShopCard from "../(components)/ShopCard";

const Shop = () => {
  return (
    <div className="bg-primary p-3 m-3  rounded-md lg:grid grid-cols-2 xs:grid-cols-1">
      <h1 className="text-decortion-none underline decoration-secondary decoration-wavy">
        Shop
      </h1>
      <ShopCard />
      <ShopCard />
      <ShopCard />
      <ShopCard />
      <ShopCard />
    </div>
  );
};

export default Shop;
