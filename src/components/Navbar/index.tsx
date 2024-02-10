import { useEffect, useRef, useState } from "react";
import { Close, GridOutline } from "react-ionicons";

const Navbar = () => {
  const [toggleDropDown, setToggleDropDown] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setToggleDropDown(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const handleMenu = () => {
    setToggleDropDown((prev) => !prev);
  };

  const navLinks = [
    { title: "Home", path: "/", active: true },
    { title: "About", path: "#about", active: false },
    { title: "Services", path: "#features", active: false },
    { title: "Plans", path: "#plans", active: false },
    { title: "Blog", path: "#blog", active: false },
    { title: "Newspaper", path: "#newspaper", active: false },
  ];
  return (
    <div className="z-[2] w-full my-auto mx-0 h-16 md:px-20 px-8 py-5 flex items-center justify-between absolute top-[20px]">
      <span className="text-white text-2xl font-semibold">Sovereign Air</span>
      <div className="lg:flex hidden items-center gap-7">
        {navLinks.map((navLink) => {
          return (
            <a href={navLink.path} key={navLink.title}>
              <span
                className={`font-medium ${
                  navLink.active ? "text-blue-400" : "text-white"
                }`}
              >
                {navLink.title}
              </span>
            </a>
          );
        })}
        <button className="bg-blue-400 rounded-full text-gray-900 px-6 py-3 font-semibold hover:bg-gray-700 hover:text-white">
          Book Now
        </button>
      </div>
      <div className="cursor-pointer lg:hidden block">
        <GridOutline color="#fff" onClick={handleMenu} />
      </div>

      <div
        className={`h-full fixed top-0 items-start px-8 ${
          toggleDropDown ? "right-0" : "-right-96"
        } bg-white w-[200px]`}
        ref={menuRef}
      >
        <div className="my-12 cursor-pointer">
          <Close color="#000" onClick={handleMenu} />
        </div>
        <div className="flex flex-col gap-8">
          {navLinks.map((navLink) => {
            return (
              <a href={navLink.path} key={navLink.title}>
                <span
                  className={`font-medium text-xl hover:text-blue-400 ${
                    navLink.active ? "text-blue-400" : "text-black"
                  }`}
                >
                  {navLink.title}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
