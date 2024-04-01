import Script from "next/script";
const game = () => {
  return (
    <div>
      <h1 className="mt-5 ml-5">Game</h1>
      <hr className="text-default-text" />
      <link src="index.html" />
      <iframe
        width="1000"
        height="1000"
        src="https://fimo155.free.bg"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default game;
