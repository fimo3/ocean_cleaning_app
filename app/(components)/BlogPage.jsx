import React from "react";
import img1 from "@/public/kostenurka.png";
import Image from "next/image";
const BlogPage = () => {
  return (
    <div className="xl:flex">
      <div className="w-2/3">
        <Image src={img1} alt="Снимка :>" className=" float-left xl:flex " />
      </div>
      <div>
        <h1>etxt</h1>
        <p>etxt</p>
      </div>
    </div>
  );
};
export default BlogPage;
