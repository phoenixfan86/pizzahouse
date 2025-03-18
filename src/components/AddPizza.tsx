"use client";

import { useState } from "react";


const AddPizza = () => {
  const [loading, setLoading] = useState(false);

  const handleAddPizza = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/pizzas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Meat",
          price: 13,
          ingredients: ["Smoked sausages", "Semi-smoked sausages", "salami", "Hum", "Cheese"],
          image: "assets/img/pizza_8.png",
        }),
      });

      const data = await response.json();
      console.log("Піца додана:", data);
    } catch (error) {
      console.error("Помилка додавання піци:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleAddPizza} disabled={loading}>
        {loading ? "Додається..." : "Додати піцу"}
      </button>
    </div>
  );
};

export default AddPizza;
