import React from "react";
import Image from "next/image";
import img1 from "@/public/kostenurka.png";
const ShoppingCartItems = () => {
  return (
    <div className="lg:grid grid-cols-2">
      <div className="w-28 m-3">
        <Image
          src={img1}
          alt="Снимка :>"
          className="p-0 object-cover w-28 rounded-3xl"
        />
      </div>
      <div>
        <h4 id="card">Title</h4>
        <p id="card">Price: 30$</p>
        <a href="#">
          <button className="p-3">Remove</button>
        </a>
      </div>
    </div>
  );
};

export default ShoppingCartItems;
