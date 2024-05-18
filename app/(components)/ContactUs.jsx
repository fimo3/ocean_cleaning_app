import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareGithub,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneSquareAlt,
  faSquareEnvelope,
} from "@fortawesome/free-solid-svg-icons";
const ContactUs = () => {
  return (
    <div className="flex">
      <div>
        <h1>Contact Us</h1>
        <hr />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002591.5985288247!2d22.903376665445588!3d42.699097011744776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a8fec1c85bf089%3A0xa01269bf4c10!2z0JHRitC70LPQsNGA0LjRjw!5e0!3m2!1sbg!2sbg!4v1715939191366!5m2!1sbg!2sbg"
          width="600"
          height="450"
          loading="lazy"
          className="p-4"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div id="card" className="mt-10  p-10 justify-around">
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
        <FontAwesomeIcon
          className="text-[#5bc801] rounded text-3xl"
          icon={faPhoneSquareAlt}
        />
        <p>
          0696776977566786786786786587678675858756676676767875675876578678766855
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
