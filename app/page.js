import React from "react";
import ShopCard from "./(components)/ShopCard";

const Dashboard = () => {
  return (
    <div>
      <h1 className="pb-5 pt-10 justify-center">Welcome to OceanOvation!</h1>
      <hr className="text-bluey" />
      <p className="p-2">Your progress: </p>
      <div
        className="bg-default-text rounded-full h-2.5 m-2"
        style={{ width: "20%" }}
      >
        <div
          className="bg-bluey h-2.5 rounded-full"
          style={{ width: "80%" }}
        ></div>
        80$ - 80%
      </div>
      <p>Next prize: at 100$.</p>
      <hr className="text-bluey" />
      <h2>Things you can find in the shop this week: </h2>
      <div className="bg-primary-hover p-3 m-3  rounded-md lg:grid grid-cols-4 ">
        <ShopCard />
        <ShopCard />
        <ShopCard />
        <div>
          <h4>And more...</h4>
          <a href="../../Shop">
            <p className="text-bluey hover:text-bluey-hover">
              Take a look at all of them ➡️
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
