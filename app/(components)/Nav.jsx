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
import Tooltip from "./Tooltip";
import TooltipLastChild from "./TooltipLastChild";
const Nav = () => {
  return (
    <nav className="flex justify-between bg-secondary p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Tooltip message={"Home"}>
            <FontAwesomeIcon icon={faHome} />
          </Tooltip>
        </Link>
        <Link href="../../Simulation">
          <Tooltip message={"Game"}>
            <FontAwesomeIcon icon={faGamepad} />
          </Tooltip>
        </Link>
        <Link href="../../Blog">
          <Tooltip message={"Blog"}>
            <FontAwesomeIcon icon={faSquareRss} />
          </Tooltip>
        </Link>
        <Link href="../../Shop">
          <Tooltip message={"Shop"}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </Tooltip>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="../../Donation">
          <Tooltip message={"Donate"}>
            <FontAwesomeIcon icon={faCircleDollarToSlot} />
          </Tooltip>
        </Link>
        <Link href="#">
          <TooltipLastChild message={"User"}>
            <FontAwesomeIcon icon={faUserAlt} />
          </TooltipLastChild>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
