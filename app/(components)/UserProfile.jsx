import React from "react";
import ShoppingCartItems from "./ShoppingCartItems";
import Image from "next/image";
import UserPicture from "@/public/kostenurka.png";
const profile = () => {
  return (
    <div className="flex justify-center m-2">
      <div className="flex flex-col gap-3 w-1/2 bg-secondary hover:bg-secondary-hover rounded-lg mt-20">
        <Image
          src={UserPicture}
          alt="Снимка :>"
          className="m-3 object-cover w-20 h-20 rounded-3xl"
        />
        <div className="lg:grid grid-cols-2 xs:grid-cols-1">
          <h2 id="card">Username</h2>
          <a href="#">
            <button className="p-3">Edit info</button>
          </a>
        </div>
        <hr id="card" />
        <h3 id="card">Shopping cart:</h3>
        <ShoppingCartItems />
        <ShoppingCartItems />
        <ShoppingCartItems />
        <ShoppingCartItems />
      </div>
    </div>
  );
};

export default profile;
