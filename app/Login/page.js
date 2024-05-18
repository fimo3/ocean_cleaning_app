import React from "react";
import LoginPage from "../(components)/LoginPage";

const Login = () => {
  return (
    <div className="bg-primary pr-3">
      <div className="bg-[url('../public/img1.png')] bg-fixed bg-no-repeat bg-cover">
        <LoginPage />
      </div>
    </div>
  );
};

export default Login;
