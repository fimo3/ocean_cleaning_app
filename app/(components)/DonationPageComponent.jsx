/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import DonationCard from "../(components)/DonationCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const page = async () => {
  const [donations, setDonations] = useState(null);
  const getDonations = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/Donations", {
        method: "GET",
        cache: "no-store",
      });
      const { donations } = await res.json();
      return setDonations(donations);
    } catch (error) {
      console.log("Error loading topics: ", error);
    }
  };

  useEffect(() => {
    getDonations();
  }, []);

  return (
    donations && (
      <div className="p-5">
        <h1>Donations: </h1>
        <hr className="text-default-text" />
        <a href="../createDonation">
          <button className="p-3 m-2">
            <FontAwesomeIcon icon={faPlus} /> NEW
          </button>
        </a>
        <div>
          {donations.map((donation, _index) => (
            <DonationCard id={_index} key={_index} donation={donation} />
          ))}
        </div>
      </div>
    )
  );
};

export default page;
