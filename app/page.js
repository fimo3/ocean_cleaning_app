import React from "react";
import BlogPostCard from "./(components)/BlogPostCard";
import img1 from "@/public/kostenurka.png";
import Image from "next/image";
const Dashboard = () => {
  return (
    <div>
      <h1 className="pb-5 pt-10 justify-center">Welcome to OceanOvation!</h1>
      <div className="flex justify-around">
        <div>
          <h4>
            You have money that you want to donate but you don&#x27;t know
            where? <br />
            <br />
            That means that you have come to the right place.
            <br /> <br />
            OceanOvation is an app where you can donate money for various causes
            related to the waters, or create your own cause if you need some
            support. <br />
            <br />
            Not familiar with the issues yet? <br />
            <br /> No problem, <br />
            the app also has an ocean game where you can learn about the very
            serious climate catastrophes of our time and try to save the water
            on earth from total pollution for 7 days.
          </h4>
          <a href="/Aboutus" className="inline-block">
            <p className=" text-bluey hover:text-bluey-hover">
              Learn more about us ➡️
            </p>
          </a>
        </div>
        <Image
          src={img1}
          alt="Снимка :>"
          className="p-4 size-1/3 shadow-black shadow-lg"
        />
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
    </div>
  );
};

export default Dashboard;
