"use client"

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./Navbar";
import { faBarsStaggered, faBars, faMagnifyingGlass, faPizzaSlice, faCartShopping } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <header className="relative w-full h-15 md:h-20 flex items-center justify-between gap-20 base-gradient p-3 md:px-20">
      <div className="absolute inset-0 bg-[url(/assets/img/BG_1.png)]  bg-center "></div>
      <div className="flex items-end justify-center z-20">
        <button className="menu-btn " onClick={() => setNavOpen((prev) => !prev)}>
          <FontAwesomeIcon
            icon={navOpen ? faBarsStaggered : faBars}
            size="xl"
            style={{ color: '#fdf2f8' }}
          />
        </button>
        <Navbar navOpen={navOpen} />
      </div>
      <div className="flex-box gap-1 z-30">
        <a href="#">
          <h2 className="md:text-lg font-semibold text-zinc-50/80 ">
            PizzaHouse
          </h2>
        </a>
        <FontAwesomeIcon icon={faPizzaSlice} size="xl" style={{ color: '#fdf2f8' }} />
      </div>
      <button className="">
        <FontAwesomeIcon icon={faCartShopping} size="xl" style={{ color: '#fdf2f8' }} />
      </button>
      <button className="">
        <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" style={{ color: '#fdf2f8' }} />
      </button>
    </header >
  );
}

export default Header