import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
      setScrolled(true);
    } else {
      setHidden(false);
      if (latest <= 150) setScrolled(false);
    }
  });

  return (
    <header className="fixed w-full bg-transparent z-50 xl:top-[5.5vh] top-[7.5vh]">
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        className={`flex justify-between items-center w-full px-[2%] mx-auto h-[56px] transition-colors duration-300
        ${
          scrolled
            ? "bg-white text-[#171a20] w-full"
            : "bg-transparent text-white"
        }`}
      >
        <div className="items-start">
          <h1 className="w-[132px]" alt="This is a Tesla Logo">
            <a aria-label="Tesla Logo" className="tds-site-logo-link" href="/">
              <svg
                className="tds-icon tds-icon-logo-wordmark tds-site-logo-icon"
                viewBox="0 0 342 35"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7"
                ></path>
              </svg>
            </a>
          </h1>
        </div>

        <div
          className={`nav-links absolute bg-transparent left-0 w-full flex items-center px-5 
          xl:static xl:min-h-fit xl:w-auto transition-all duration-500 top-[-100%] ${
            menuOpen ? "top-0 min-h-[60vh]" : "top-[-9%]"
          }`}
        >
          <ol className="xl:flex xl:flex-row flex-col xl:items-center xl:gap-[2vw] hidden gap-8 text-gray font-[universalSans] font-medium text-sm">
            <li>Vehicles</li>
            <li>Energy</li>
            <li>Charging</li>
            <li>Discover</li>
            <li>Shop</li>
          </ol>
        </div>

        <div>
          <ol className="xl:flex hidden items-end gap-3">
            <li>
              <a href="">
                <i className="fa-regular fa-circle-question text-xl"></i>
              </a>
            </li>
            <li>
              <button type="button" aria-label="Region &amp; Language">
                <i className="fa-regular fa-globe text-xl"></i>
              </button>
            </li>
            <li>
              <a href="/teslaaccount" aria-label="Account">
                <i className="fa-regular fa-circle-user text-xl"></i>
              </a>
            </li>
          </ol>

          <button
            className={`xl:hidden transition-all duration-300 ${
              scrolled
                ? "bg-gray-100 font-medium px-4 py-2 rounded-md shadow-sm hover:bg-gray-200 text-[#171a20] w-full"
                : "bg-[rgba(0,0,0,0.1)] text-white font-medium px-4 py-2 rounded-md backdrop-blur-md hover:bg-[rgba(0,0,0,0.2)]  cursor-pointer"
            }`}
            type="button"
            onClick={toggleMenu}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </motion.nav>
    </header>
  );
}

export default Navbar;
