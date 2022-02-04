import React from 'react';
import { FaCog, FaMicrophone, FaAlignJustify } from 'react-icons/fa';
import logo from '../assets/football.png';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between px-2 py-3 bg-gray-300 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a href="/" className="flex items-center gap-4">
              <img src={logo} alt="A football icon" style={{ width: '2rem', height: '2rem' }} />
              <h1 className="text-2xl font-semibold">Football Fan Companion</h1>
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
            data-testid="hamburger"
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
