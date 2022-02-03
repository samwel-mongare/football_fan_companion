import React from 'react';
import { FaCog, FaMicrophone, FaAlignJustify } from 'react-icons/fa';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between px-2 py-3 bg-gray-300 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
              href="/"
            >
              Football Fan Companion
            </a>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border
              border-solid border-transparent rounded bg-transparent block
              lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FaAlignJustify />
            </button>
          </div>
          <div
            className={
              `lg:flex flex-grow items-center${
                navbarOpen ? ' flex' : ' hidden'}`
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="/"
                >
                  <FaMicrophone className="text-lg leading-lg text-black opacity-75" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="/"
                >
                  <FaCog className="fab fa-pinterest text-lg leading-lg text-black opacity-75" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
