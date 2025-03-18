"use client";

import PizzaItem from "./PizzaItem";
import { PizzaProps } from "@/components/types";

const PizzaList = ({ pizzas }: { pizzas: PizzaProps[] }) => {
  if (!pizzas || pizzas.length === 0) {
    return <p>No data on pizzas</p>;
  }

  return (
    <section id="pizza" className=" w-full h-auto flex-box flex-wrap gap-x-2 gap-y-7 md:px-10 md:py-2">
      {pizzas.map((pizza) => (
        <PizzaItem
          key={pizza._id}
          _id={pizza._id}
          name={pizza.name}
          price={pizza.price}
          ingredients={pizza.ingredients}
          image={pizza.image}
        />
      ))}
    </section>
  );
};

export default PizzaList;
