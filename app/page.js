import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h1 className="pb-5 pt-10 justify-center">
        Welcome to Expanding our horizon
      </h1>
      <hr className="text-bluey" />
      <p className="p-2">Hello! :)</p>
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
    </div>
  );
};

export default Dashboard;
