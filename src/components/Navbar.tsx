import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-30 ${
          isOpen ? "h-full bg-black" : "lg:h-20"
        }`}
      >
        {!isOpen && (
          <div className="lg:hidden absolute top-10 right-7 z-20">
            <button onClick={toggleMenu} className="text-white text-3xl">
              <FaBars />
            </button>
          </div>
        )}

        <ul
          className={`lg:hidden lg:flex lg:flex-row lg:space-x-8 transition-transform duration-300 ease-in-out
                      ${
                        isOpen
                          ? "flex flex-col items-center justify-center space-y-6 bg-black absolute top-0 right-0 h-full w-full z-10"
                          : "hidden"
                      }`}
        >
          {isOpen && (
            <div className="absolute top-5 right-7 z-20">
              <button onClick={toggleMenu} className="text-white text-3xl">
                <FaTimes />
              </button>
            </div>
          )}

          <li className="mb-6">
            <Image src={logo} alt="logo" width={60} height={60} />
          </li>

          <li>
            <Link
              href="/proyectos"
              className="text-white text-2xl uppercase"
              onClick={toggleMenu}
            >
              PROYECTOS
            </Link>
          </li>
          <li>
            <Link
              href="/contactar"
              className="text-white text-2xl uppercase"
              onClick={toggleMenu}
            >
              CONTACTO
            </Link>
          </li>
        </ul>

        <ul className="hidden lg:flex lg:flex-col lg:space-y-6 lg:items-center lg:justify-center lg:absolute lg:right-10 lg:top-10">
          <li>
            <Link
              href="/proyectos"
              className="text-white text-xl uppercase border-b-2 border-white pb-1"
            >
              PROYECTOS
            </Link>
          </li>
          <li>
            <Link
              href="/contactar"
              className="text-white text-xl uppercase border-b-2 border-white pb-1"
            >
              CONTACTO
            </Link>
          </li>
        </ul>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-80 z-0 pointer-events-none"></div>
      )}
    </>
  );
};

export default Navbar;
