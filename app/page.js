import React from "react";

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
    </div>
  );
};

export default Dashboard;
