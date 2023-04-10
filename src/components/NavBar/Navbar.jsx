import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuBarToggle, setMenuBarToggle] = useState(false);
  return (
    <header>
      <nav className={`navBar ${menuBarToggle ? "h-auto" : "h-28"}`}>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-extrabold">HireMeNow</h1>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 lg:hidden"
            onClick={() => setMenuBarToggle(!menuBarToggle)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div className="navLinks">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-400 lg:mx-5 " : "lg:mx-5"
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-400 lg:mx-5 " : "lg:mx-5"
            }
            to={"/statistics"}
          >
            Statistics
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-400 lg:mx-5 " : "lg:mx-5"
            }
            to={"/appliedJobs"}
          >
            Applied Jobs
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-400 lg:mx-5 " : "lg:mx-5 "
            }
            to={"/blog"}
          >
            Blog
          </NavLink>
        </div>
        <button className="btnPrimary">Star Applying</button>
      </nav>
    </header>
  );
};

export default Navbar;
