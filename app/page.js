import React from "react";
import ShopCard from "./(components)/ShopCard";
import BlogPostCard from "./(components)/BlogPostCard";

const Dashboard = () => {
  return (
    <div>
      <h1 className="pb-5 pt-10 justify-center">Welcome to OceanOvation!</h1>
      <div className="">
        <h4>
          Have money you want to donate but do not know where? <br />
          <br />
          That means you have come to the right place.
          <br /> <br />
          OceanOvation is an app where you can donate money for various causes
          related to the waters, or create your own cause if you need some
          support. <br />
          <br />
          Not familiar with the issues yet? <br />
          <br /> No problem, <br />
          the app also has an ocean game where you can learn about the very
          serious climate catastrophes of our time and try to save the water on
          earth from total pollution for 7 days.
        </h4>
      </div>
      <hr className="text-bluey" />
      <h2>Most recent blog entry: </h2>
      <BlogPostCard />
      <hr className="text-bluey" />
      <h4 className="p-2">Your progress: </h4>
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
