import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
// import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex flex-row justify-between w-full h-[10vh] bg-black text-white md:pr-[6rem] md:pl-[6rem]">
      <div className="mt-auto mb-auto pl-3">
        <h1 className="font-bold text-[2rem]">FinMeUp.</h1>
      </div>
      <div className="mt-auto mb-auto pr-5">
        {/* Desktop */}
        {/* show navigation */}
        <ul className="hidden md:visible md:flex md:flex-row md:gap-6 md:align-middle ">
          <a
            href="/about"
            className="no-underline text-white hover:cursor-pointer"
          >
            <li>About</li>
          </a>
          <a
            href="/work"
            className="no-underline text-white hover:cursor-pointer"
          >
            <li>Work</li>
          </a>
          <a
            href="/contact"
            className="no-underline text-white hover:cursor-pointer"
          >
            <li>Contact</li>
          </a>
        </ul>

        {/* Mobile */}
        {/* show hamburger menu */}
        <div className="text-white visible md:hidden" onClick={handleNav}>
          {nav ? (
            <AiOutlineClose className="text-white w-[40px] h-[40px]" />
          ) : (
            <RxHamburgerMenu className="text-white w-[40px] h-[40px]" />
          )}
        </div>

        <div className="h-full w-full">
          {nav ? (
            <ul className="md:visible flex flex-col gap-5 ">
              <a
                href="/about"
                className="no-underline text-white hover:cursor-pointer"
              >
                <li>About</li>
              </a>
              <a
                href="/work"
                className="no-underline text-white hover:cursor-pointer"
              >
                <li>Work</li>
              </a>
              <a
                href="/contact"
                className="no-underline text-white hover:cursor-pointer"
              >
                <li>Contact</li>
              </a>
            </ul>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
