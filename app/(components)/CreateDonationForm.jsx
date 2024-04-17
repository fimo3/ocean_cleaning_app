"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
//import payMethodsCard from "./payMethodsCard";

const DonationForm = () => {
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("api/Donations", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });

    if (!res.ok) {
      throw new Error(res.body);
    }
    router.refresh();
    router.push("/");
  };
  const startingDonationData = {
    title: "",
    description: "",
    maxMoney: 1,
  };

  const [formData, setFormData] = useState(startingDonationData);
  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2 bg-secondary rounded-lg mt-20"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3 id="card">Cause</h3>
        <label>Title: </label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          value={formData.title}
          required={true}
        />
        <label>Description: </label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          value={formData.description}
          required={true}
          rows="5"
        />
        <label>How much? dolars (US)</label>
        <input
          id="maxMoney"
          name="maxMoney"
          onChange={handleChange}
          value={formData.maxMoney}
          type="number"
          min="0"
          required={true}
        />
        <input type="submit" value="Submit cause" />
      </form>
    </div>
  );
};

export default DonationForm;
