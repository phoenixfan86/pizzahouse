
"use client"

import { useEffect, useState } from "react";
import { OurMenuButton } from "./Button"

const VarietiesTab = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/categories");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="w-full flex-box" >
      <nav className="p-2.5">
        {categories.map((category) => (
          <OurMenuButton key={category} href={category} label={category} />
        ))}
      </nav>
    </section>
  )
}

export default VarietiesTab