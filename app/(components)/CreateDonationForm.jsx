import React from "react";
import payMethodsCard from "./payMethodsCard";

const DonationForm = () => {
  return (
    <div className="flex justify-center">
      <form className="flex flex-col gap-3 w-1/2" method="post">
        <h3>Donation</h3>
        <label>Title: </label>
        <input id="title" name="title" type="text" required={true} />
        <label>Description: </label>
        <textarea
          id="description"
          name="description"
          required={true}
          rows="5"
        />
        <label>How much? dolars (US)</label>
        <input id="money" name="money" type="number" min="0" required={true} />
        <button>Create cause</button>
      </form>
    </div>
  );
};

export default DonationForm;
