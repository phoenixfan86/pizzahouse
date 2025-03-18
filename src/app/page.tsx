"use client"

import { useEffect, useState } from "react";
import AddPizza from "@/components/AddPizza";
import Header from "@/components/Header";
import PizzaList from "@/components/PizzaList";
import VarietiesTab from "@/components/VarietiesTab";
import { Pizza } from "@/components/types";
import OrderBadge from "@/components/OrderBadge";

export default function Home() {

  const [pizzas, setPizzas] = useState<Pizza[]>([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("/api/pizzas");
        if (!response.ok) {
          throw new Error("Error fetching pizzas");
        }
        const data: Pizza[] = await response.json();
        console.log("Pizza data:", data);
        setPizzas(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchPizzas();
  }, []);

  return (
    <>
      <Header />
      <main>
        <VarietiesTab />
        <PizzaList pizzas={pizzas} />
        <OrderBadge />
        <AddPizza />
      </main>
    </>
  );
}
