import React from "react";
import payMethodsCard from "./payMethodsCard";

const DonationForm = () => {
  return (
    <div className="flex justify-center">
      <form className="flex flex-col gap-3 w-1/2" method="post">
        <h3>Donation</h3>
        <label>Whome will you donate?</label>
        <select name="campaign">
          <option value="WaterAid">WaterAid</option>
          <option value="WWF">WWF</option>
          <option value="4 paws">4 paws</option>
        </select>
        <label>How much?</label>
        <select name="currency">
          <option value="BG">levs (BG)</option>
          <option value="US">dolars (US)</option>
          <option value="SRB">dinars (SRB)</option>
        </select>
        <input id="money" name="money" type="number" required={true} />
        <label>How will you pay?</label>
        <div>
          <payMethodsCard />
          <payMethodsCard />
        </div>
      </form>
    </div>
  );
};

export default DonationForm;
