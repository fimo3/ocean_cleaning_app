/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
const DonationCard = () => {
  return (
    <div className="m-2 text-black rounded-2xl bg-secondary hover:bg-secondary-hover">
      <h2 class="card">Title</h2>
      <p class="card">Description.......</p>
      <hr />
      <p class="card">35$ from 60$</p>
      <button className="p-1 m-2">Donate</button>
    </div>
  );
};

export default DonationCard;
