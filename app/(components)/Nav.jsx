import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleDollarToSlot,
  faGamepad,
  faHome,
  faShoppingCart,
  faSquareRss,
  faUser,
  faUserAlt,
  faUserAltSlash,
} from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  return (
    <nav className="flex justify-between bg-secondary p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <Link href="../../Simulation">
          <FontAwesomeIcon icon={faGamepad} />
        </Link>
        <Link href="../../Blog">
          <FontAwesomeIcon icon={faSquareRss} />
        </Link>
        <Link href="../../Shop">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="../../Donation">
          <FontAwesomeIcon icon={faCircleDollarToSlot} />
        </Link>
        <Link href="#">
          <FontAwesomeIcon icon={faUserAlt} />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
