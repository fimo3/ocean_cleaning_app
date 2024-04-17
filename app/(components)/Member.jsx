import React from "react";
import Image from "next/image";
import img1 from "@/public/me.png";

const Member = () => {
  return (
    <div className="bg-bluey p-3 hover:bg-bluey-hover">
      <h3>Serafim Kovachevich</h3>
      <div className="flex flex-row">
        <Image src={img1} alt="Снимка :>" className="w-20 h-20 rounded-full" />
        <p>
          I am Serafim Kovachevic and I live in Sofia, Bulgaria.
          <br />I like to code and think a lot about the bad things happening in
          the world.
        </p>
      </div>
    </div>
  );
};

export default Member;
