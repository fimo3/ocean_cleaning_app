import React from "react";
import Image from "next/image";
import img1 from "@/public/kostenurka.png";
const ShopCard = () => {
  return (
    <div className="p-0 bg-secondary rounded-md">
      <Image src={img1} alt="Снимка :>" className="p-0 w-auto" />
      <a>
        <form>
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
      </a>
    </div>
  );
};

export default ShopCard;
