/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
const DonationCard = () => {
  return (
    <div className="m-2 text-black rounded-2xl bg-secondary hover:bg-secondary-hover">
      <img
        src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSh_BYQYGH7b0y-nMFhJsMKsqbbCM9TfuM5IwGGxActFLz8v0p7SYlZ8cHvPUq8mPpqx9mInE4FqIov1Ak"
        alt="Снимка :>"
        className="p-4 w-auto"
      ></img>
      <h2 class="card">Title</h2>
      <p class="card">Description.......</p>
      <hr />
      <p class="card">35$ from 60$</p>
      <div
        className="bg-default-text rounded-full h-2.5 m-2"
        style={{ width: "90%" }}
      >
        <div className="bg-bluey h-2.5 rounded-full" style={{ width: "80%" }}>
          80%
        </div>
      </div>
      <div>
        <button className="p-1 m-2" style={{ width: "90%" }}>
          Donate
        </button>
      </div>
    </div>
  );
};

export default DonationCard;
