import React from "react";
import ShoppingCartItems from "./ShoppingCartItems";

const profile = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-3 w-1/2 bg-secondary rounded-lg mt-20">
        <h2 id="card">User</h2>
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
