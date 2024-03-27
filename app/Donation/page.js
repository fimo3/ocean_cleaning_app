import React from "react";
import DonationCard from "../(components)/DonationCard";

const page = () => {
  return (
    <div className="p-5">
      <h1>Donations: </h1>
      <hr className="text-default-text" />
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
        <DonationCard />
        <DonationCard />
        <DonationCard />
        <DonationCard />
      </div>
    </div>
  );
};

export default page;
