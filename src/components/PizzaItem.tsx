"use client";

import React, { useState } from "react";
import { PizzaProps } from "@/components/types";
import { AddButton } from "./Button";

const PizzaItem = ({ name, price, ingredients, image }: PizzaProps & { isHovered?: boolean }) => {

  const [isHovered, setIsHovered] = useState(false);

  const descriptStyle = isHovered ? "base-gradient" : "";

  const textStyle = isHovered ? "text-white" : "";


  return (
    <div className="relative w-45 h-55 md:w-65 md:h-80 " onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className="w-full h-full flex items-center justify-between flex-col bg-white shadow-2xl md:justify-between gap-1 md:gap-1.5 rounded-md ring-1 ring-zinc-400/40 transition-all delay-200 overflow-hidden">
        <div className="size-25 md:size-[130px] flex-box rounded-full overflow-hidden hover:border-6 border-amber-600 mt-2 transition-all">
          <img src={image} alt={name} className="size-full" />
        </div>
        <div className=""><span className="price">{price}$</span></div>
        <div className={`w-full h-23 md:h-30 flex items-center justify-baseline flex-col gap-2 font-semibold md:gap-4 ${descriptStyle}`}>
          <h3 className={`text-sm md:text-xl font-semibold text-(--dark-color) mt-2 ${textStyle}`}>
            {name}
          </h3>
          {ingredients && <p className={`text-xs md:text-sm text-center text-(--description-color) ${textStyle}`}>
            {ingredients.join(", ")}
          </p>}
        </div>
      </div>
      <AddButton label={isHovered ? "Create Now" : "Add"} isHovered={isHovered} />
    </div >
  );
};

export default PizzaItem;
