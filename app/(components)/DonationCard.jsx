/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
const DonationCard = () => {
  return (
    <div>
      <Image src="@/app/images/img1.png" alt="Hello World" />
      <h1>Title</h1>
      <p>Description.......</p>
      <hr />
      <button>Donate</button>
    </div>
  );
};

export default DonationCard;
