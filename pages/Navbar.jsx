import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";

const links = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#portfolio" }, // Fixed duplicate "About"
  { title: "Contact", path: "#contact" }, // Fixed capitalization
];

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  
  const toggleNav = () => {
    setNav(!nav);
  };
  
  const closeNav = () => {
    setNav(false);
  };

  return (
    <>
      <div className="fixed z-50 flex justify-center w-full text-white font-bold">
        <div className="border border-white/20 mt-8 backdrop-blur-3xl rounded-3xl hidden md:flex items-center justify-center p-2 max-w-[400px] mx-auto">
          <ul className="flex flex-row p-2 space-x-8">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  className="transform hover:skew-x-12 hover:text-white/50 transition-all duration-300 ease-in-out"
                  href={link.path}
                  onClick={closeNav}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden fixed top-8 right-8">
          <button
            onClick={toggleNav}
            className="text-white text-2xl p-2 backdrop-blur-3xl border border-white/20 rounded-full"
          >
            {nav ? <MdOutlineClose /> : <IoMenuOutline />}
          </button>
        </div>

        {/* Mobile menu */}
        {nav && (
          <div className="md:hidden fixed top-0 left-0 w-full h-full bg-black/90 backdrop-blur-3xl flex items-center justify-center">
            <ul className="flex flex-col space-y-8 text-center">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    className="text-2xl transform hover:skew-x-12 hover:text-white/50 transition-all duration-300 ease-in-out"
                    href={link.path}
                    onClick={closeNav}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};