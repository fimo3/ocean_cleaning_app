import React from "react";
import img1 from "@/public/kostenurka.png";
import Image from "next/image";
const BlogPostCard = () => {
  return (
    <div className="bg-secondary p-3 m-3  rounded-md lg:grid grid-cols-2 xs:grid-cols-1">
      <Image src={img1} alt="Снимка :>" className="p-4 w-auto" />
      <div>
        <h3 id="card">Title</h3>
        <p id="card">description</p>
      </div>
    </div>
  );
};

export default BlogPostCard;
