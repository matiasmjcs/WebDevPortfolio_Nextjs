import React from "react";
import Link from "next/link";

const Nav = (): JSX.Element => {
  return (
    <nav className="w-full h-16 border-b border-color1 flex items-center">
      <div className="grid grid-cols-2 gap-10 ml-4">
        <Link href={"/"} className="hover:text-gray-300 text-textColor1 no-underline">
          Home
        </Link>
        <Link href={"/resources"} className="hover:text-gray-300 text-textColor1 no-underline">
          Resources
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
