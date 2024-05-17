import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDollarToSlot,
  faGamepad,
  faPhone,
  faPhoneAlt,
  faPhoneSlash,
  faShoppingCart,
  faSquareRss,
  faUserAlt,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Tooltip from "./Tooltip";
import Image from "next/image";
import UserPicture from "@/public/logo.png";
import TooltipLastChild from "./TooltipLastChild";
import { faPhoenixFramework } from "@fortawesome/free-brands-svg-icons";
const Nav = () => {
  return (
    <nav className=" bg-secondary ">
      <div className="flex justify-between bg-primary  mr-3 ml-3 mt-2 p-4">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Tooltip message={"Home"}>
              <Image
                src={UserPicture}
                alt="Снимка :>"
                className="object-cover w-10"
              />
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
          <Link href="../../Donation">
            <Tooltip message={"Donate"}>
              <FontAwesomeIcon icon={faCircleDollarToSlot} />
            </Tooltip>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="../../Contact">
            <Tooltip message={"Contact"}>
              <FontAwesomeIcon icon={faPhone} />
            </Tooltip>
          </Link>
          <Link href="../../Profile">
            <Tooltip message={"User"}>
              <FontAwesomeIcon icon={faUserAlt} />
            </Tooltip>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
