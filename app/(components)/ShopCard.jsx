import React from "react";
import Image from "next/image";
import img1 from "@/public/kostenurka.png";
import { Meow_Script } from "next/font/google";

const ShopCard = () => {
  return (
    <div className="p-0 bg-secondary rounded-md rounded-t-2xl">
      <Image src={img1} alt="Снимка :>" className="p-0 w-auto rounded-t-2xl" />
      <div className="lg:grid grid-cols-2 xs:grid-cols-1">
        <form>
          <label>Quantity: </label>
          <input
            id="Quantity"
            name="Quantity"
            type="number"
            min="1"
            max="10"
            required={true}
          ></input>
          <button className="p-2">Buy</button>
        </form>
        <div>
          <h4 id="card">Title</h4>
          <p id="card">Price:30$</p>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
