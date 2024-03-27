import React from "react";
import DonationCard from "../(components)/DonationCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const page = () => {
  return (
    <div className="p-5">
      <h1>Donations: </h1>
      <hr className="text-default-text" />
      <button href="../../createDonation" className="p-3 m-2">
        <FontAwesomeIcon icon={faPlus} /> NEW
      </button>
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
