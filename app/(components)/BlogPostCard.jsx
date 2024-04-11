import React from "react";
import img1 from "@/public/kostenurka.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
const BlogPostCard = () => {
  return (
    <div className="bg-secondary p-3 m-3  rounded-md lg:grid grid-cols-2 xs:grid-cols-1">
      <Image src={img1} alt="Снимка :>" className="p-4 w-auto" />
      <div>
        <h3 id="card">Title</h3>
        <p id="card">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          accumsan mollis urna eget vestibulum. Sed eget porta justo, sed varius
          sem. Maecenas at nisl vitae lectus vehicula luctus. Sed vel nulla ut
          felis porttitor maximus ut venenatis purus. Nulla maximus diam eget
          tellus pellentesque ultricies. Morbi leo justo, consectetur id quam
          ut, ultrices condimentum justo. Ut ultrices, dui eu condimentum
          commodo, massa eros tincidunt tellus, eget pretium neque nisi eu odio.
          Fusce cursus tellus ut pharetra egestas. Vestibulum in eros ut tellus
          efficitur ullamcorper. Phasellus condimentum efficitur diam, sed
          pretium libero pharetra sit amet. Aliquam ut mi vitae nunc interdum
          iaculis ut ut sapien. Nulla at nisi elit.
        </p>
        <a href="#Seefull">
          <p id="card">
            See full
            <FontAwesomeIcon icon={faChevronRight} className="space-x-2" />
          </p>
        </a>
      </div>
    </div>
  );
};

export default BlogPostCard;
