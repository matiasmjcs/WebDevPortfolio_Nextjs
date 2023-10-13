import React from "react";
import Link from "next/link";

/**
 * Generates the navigation component.
 *
 * @return {JSX.Element} The rendered navigation component.
 */
const Nav = (): JSX.Element => {
  return (
    <nav className="w-full h-16 flex items-center bg-black text-white ">
      <div className="grid grid-cols-2 gap-10 ml-4">
        <Link href={"/"} className="hover:text-gray-300 dark:hover:text-gray-300  text-textColor1 no-underline">
          Home
        </Link>
        <Link href={"/resources"} className="hover:text-gray-300 dark:hover:text-gray-300 text-textColor1 no-underline">
          Resources
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
