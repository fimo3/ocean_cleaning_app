import React from "react";
import ShoppingCartItems from "./ShoppingCartItems";
import Image from "next/image";
import UserPicture from "@/public/kostenurka.png";
const profile = () => {
  return (
    <div className="flex justify-center m-2">
      <div className="flex flex-col gap-3 w-1/2 bg-secondary hover:bg-secondary-hover rounded-lg mt-20">
        <div className="lg:grid grid-cols-1 xl:grid-cols-3">
          <Image
            src={UserPicture}
            alt="Снимка :>"
            className="m-3 object-cover w-20 h-20 rounded-3xl"
          />
          <div className="grid grid-cols-1">
            <h2 id="card">Username</h2>
            <div>
              <a href="#">
                <button className="p-3">Edit info</button>
              </a>
              <a href="#">
                <button className=" m-1 p-3">Log out</button>
              </a>
            </div>
          </div>
          <div>
            <p id="card">email: example@email.com</p>
          </div>
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
