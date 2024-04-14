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
      <a href="https://www.instagram.com/fimo.155/">
        <FontAwesomeIcon
          className="text-[#A0415A] rounded text-3xl"
          icon={faSquareInstagram}
        />
        <p>fimo.155</p>
      </a>
      <a href="https://www.facebook.com/profile.php?id=100094361867302">
        <FontAwesomeIcon
          className="text-[#0866FF] rounded text-3xl"
          icon={faSquareFacebook}
        />
        <p>Serafim Kovacevic</p>
      </a>
      <a href="https://gmail.com/">
        <FontAwesomeIcon
          className="text-[#bc1919] rounded text-3xl"
          icon={faSquareEnvelope}
        />
        <p>serafimkovacevic@gmail.com</p>
      </a>
      <a href="https://github.com/fimo3">
        <FontAwesomeIcon
          className="text-[#000000] rounded text-3xl"
          icon={faSquareGithub}
        />
        <p>fimo3</p>
      </a>
    </div>
  );
};

export default Footer;
