/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import img1 from "@/public/kostenurka.png";
const DonationCard = () => {
  return (
    <div className="m-2 text-black rounded-2xl bg-secondary hover:bg-secondary-hover">
      <Image src={img1} alt="Снимка :>" className="p-4 w-auto" />
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
