import DonationCard from "../(components)/DonationCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const getDonations = async () => {
  try {
    const res = await fetch("http://localhost:3001/api/Donations", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

const page = async () => {
  const { donations } = await getDonations();

  const uniqueCategories = [
    ...new Set(donations?.map(({ category }) => category)),
  ];
  return (
    <div className="p-5">
      <h1>Donations: </h1>
      <hr className="text-default-text" />
      <a href="../createDonation">
        <button className="p-3 m-2">
          <FontAwesomeIcon icon={faPlus} /> NEW
        </button>
      </a>
      <div>
        {donations &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {donations
                  .filter((donation) => donation.category === uniqueCategory)
                  .map((filteredDonation, _index) => (
                    <DonationCard
                      id={_index}
                      key={_index}
                      donation={filteredDonation}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default page;
