import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import {
  faSquareFacebook,
  faSquareGithub,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div
      id="card"
      className="mt-10 flex bg-[url('../public/background.gif')] bg-fixed bg-no-repeat bg-cover p-10 justify-around"
    >
      <a href="#">
        <FontAwesomeIcon
          className="text-[#A0415A] rounded text-3xl"
          icon={faSquareInstagram}
        />
      </a>
      <a href="#">
        <FontAwesomeIcon
          className="text-[#0866FF] rounded text-3xl"
          icon={faSquareFacebook}
        />
      </a>
      <a href="#">
        <FontAwesomeIcon
          className="text-[#bc1919] rounded text-3xl"
          icon={faSquareEnvelope}
        />
      </a>
      <a href="#">
        <FontAwesomeIcon
          className="text-[#000000] rounded text-3xl"
          icon={faSquareGithub}
        />
      </a>
    </div>
  );
};

export default Footer;
