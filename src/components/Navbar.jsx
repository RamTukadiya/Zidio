import React, { useEffect, useState } from "react";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme); // To dynamically change the theme for Tailwind
  };

  const navItems = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="About">About</a>
      </li>
      <li>
        <a href="#team">Contact US</a>
      </li>
      <li>
        <a href="Team">Our Team</a>
      </li>
    </>
  );

  return (
    <>
      <div
        className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${
          sticky
            ? "sticky-navbar shadow-md bg-base-200 duration-300 transition-all ease-in-out"
            : ""
        }`}
      >
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <button tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navItems}
              </ul>
            </div>
            <a className="text-2xl font-bold cursor-pointer">Zidio</a>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>

          <div className="navbar-end flex items-center gap-4">
            {/* Search bar visible on all screens */}
            <div className="md:block">
              <label className="px-3 py-2 border rounded-md flex items-center gap-2">
                <input
                  type="text"
                  className="grow outline-none"
                  placeholder="Search"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>

            {/* Dark Mode Toggle */}
            <label className="swap swap-rotate">
              <input type="checkbox" onChange={toggleTheme} />

              {/* Sun icon (swap-off for light mode) */}
              <svg
                className="swap-on fill-current w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 3C6.48 3 2 7.48 2 12s4.48 9 10 9 10-4.48 10-9-4.48-9-10-9zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
              </svg>

              {/* Moon icon (swap-on for dark mode) */}
              <svg
                className="swap-off fill-current w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 3c1.1 0 2.09.31 2.93.85l2.14-2.14c-.74-.62-1.65-1-2.73-1C8.03 1.71 4.5 5.23 4.5 9.5c0 1.16.37 2.23.99 3.12L2.44 15.74a9.456 9.456 0 0 0-.72-2.4C3.1 10.25 6.44 6 12 6c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7c0-1.86.71-3.54 1.87-4.79l-1.46-1.46c-1.13 1.51-1.9 3.42-1.9 5.25 0 4.66 3.74 8.5 8.5 8.5s8.5-3.74 8.5-8.5-3.74-8.5-8.5-8.5z" />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
