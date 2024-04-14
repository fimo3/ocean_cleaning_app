import Image from "next/image";
import img1 from "@/public/kostenurka.png";
const game = () => {
  return (
    <div>
      <h1 className="mt-5 ml-5">Game</h1>
      <hr className="text-default-text" />
      <link src="index.html" />
      <div className="lg:grid grid-cols-1 xl:grid-cols-2">
        <div className="bg-secondary">
          <a target="_blank" href="https://fimo155.free.bg/Tuesfest/game/">
            <Image src={img1} alt="Снимка :>" className="p-4 w-auto" />
          </a>
        </div>
        <h2>Click on the image to get to the game.</h2>
      </div>
    </div>
  );
};

export default game;
