import { useState } from "react";
import { close, logo, menu} from "../assets";
import bd from "../assets/bd.svg";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* <object data="true1.svg" width="300" height="300"></object> */}

      <img src={bd} alt="bDbank"  className="w-[200px] h-[62px]"/>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }
           text-white`}
          >
            {/* last element then will have margin of 10x */}
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>



      {/*sm:hidden flex flex-1 justify-end items-center for mobile view */}

      <div className="sm:hidden flex justify-end items-center">
        <img
          src={toggle ? close : menu}
          //here if already toggled clicking near the screen it will show as a cancel and also a menu bar
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          // in js previous state should not be used to change the current callback function ranther use a
          // inline callback function
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient
         absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-x1 sidebar`}
        >
          <div
            className={`${
              toggle ? 'flex' : 'hidden'
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-x1 sidebar`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? "mr-0" : "mb-4"
                  }
           text-white`}
                >
                  {/* last element then will have margin of 10x */}
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
