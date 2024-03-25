import { faGamepad, faHome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Nav = () => {
  return (
    <nav className="flex justify-between bg-secondary p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="#">
          <FontAwesomeIcon icon={faGamepad} className="icon" />
        </Link>
      </div>
      <div>
        <p class="email">jake.lower17@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;
