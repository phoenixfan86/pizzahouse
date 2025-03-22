"use client"

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./Navbar";
import { faBarsStaggered, faBars } from "@fortawesome/free-solid-svg-icons";
import PizzaSettings from "./PizzaSettings";

const CreatePizza = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <section className=" w-full flex-box">
      <div className="relative w-xl flex-box flex-col gap-6 ring-1 ring-zinc-300">
        <header className="create-header ">
          <div className=" flex flex-col gap-2 p-4">
            <h3 className="h3">
              Create Your Own Pizza
            </h3>
            <p className="create-description">
              Create your own pizza by choosing a crust, sauce and toppings! Select from three crust sizes & thincknesses, choice of sauce over 10 individual toppings
            </p>
            <p className="text-[15px] font-semibold text-(--second-dark)">
              You can choose upto 4 FREE toppins and 4 Extra
              toppings for 0.55$ each
            </p>
          </div>
        </header>
        <div className="w-full">
          <PizzaSettings />
        </div>
      </div>
    </section>
  );
}
export default CreatePizza;
