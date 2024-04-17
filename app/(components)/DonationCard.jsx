/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import img1 from "@/public/noImage.png";
const DonationCard = ({ donation }) => {
  return (
    <div className="m-2 text-black rounded-2xl bg-secondary hover:bg-secondary-hover">
      <Image src={img1} alt="Снимка :>" className="p-4 w-auto" />
      <h2 id="card">{donation.title}</h2>
      <p id="card">{donation.description}</p>
      <hr />
      <p id="card">35$ from {donation.maxMoney}$</p>
      <div
        className="bg-default-text rounded-full h-2.5 m-2"
        style={{ width: "90%" }}
      >
        <div className="bg-bluey h-2.5 rounded-full" style={{ width: "80%" }}>
          80%
        </div>
      </div>
      <div>
        <Link href={"../DonationPage"}>
          <button className="p-1 m-2" style={{ width: "90%" }}>
            Donate
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DonationCard;
