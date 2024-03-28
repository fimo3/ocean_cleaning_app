import Image from "next/image";
import img1 from "../../public/kostenurka.png";
const DonationPage = () => {
  return (
    <div>
      <h1 className="text-7xl py-10">Lorem ipsum</h1>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <Image src={img1} alt="Снимка :>" className="p-4 w-auto" />
        </div>
        <div>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            imperdiet commodo felis, ac convallis neque tempus at. Vivamus
            facilisis laoreet dolor id aliquam. Morbi nisi leo, pulvinar id
            fringilla ac, sagittis ac sapien. Nulla eget congue lectus. Nam
            elementum, lorem eu sollicitudin placerat, lacus urna vehicula diam,
            et maximus eros sapien sit amet dolor. Donec auctor urna quis diam
            congue, vitae congue ligula facilisis. Integer in dictum nulla, quis
            cursus arcu. Cras sodales risus vel arcu iaculis, sed scelerisque
            diam consectetur.
          </p>
          <a href="#">
            <button className="m-5 border border-solid border-base-500 rounded-lg py-2 px-5 bg-secondary hover:bg-secondaryDark">
              Donate now!
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
