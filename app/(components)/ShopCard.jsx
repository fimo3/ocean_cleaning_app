import React from "react";
import Image from "next/image";
import img1 from "@/public/kostenurka.png";
const ShopCard = () => {
  return (
    <div className="p-0">
      <Image src={img1} alt="Снимка :>" className="p-4 w-auto" />
    </div>
  );
};

export default ShopCard;
