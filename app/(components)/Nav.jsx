import Link from "next/link";
const Nav = () => {
  return (
    <nav className="flex justify-between bg-secondary p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">Home</Link>
        <Link href="../../Simulation">Simulation</Link>
        <Link href="../../Blog">Blog</Link>
        <Link href="../../Shop">Shop</Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="../../Donation">Donate</Link>
        <p id="email">john.doe@email.com</p>
      </div>
    </nav>
  );
};

export default Nav;
