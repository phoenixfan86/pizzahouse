
import React, { useState } from "react";

const PizzaSettings: React.FC = () => {
  const [pizzaSize, setPizzaSize] = useState<string | null>(null);
  const [pizzaCrust, setPizzaCrust] = useState<string | null>(null);
  const [pizzaToppingStyle, setPizzaToppingStyle] = useState<string | null>(null);
  const [pizzaToppings, setPizzaToppings] = useState<string | null>(null);
  const [pizzaSauces, setPizzaSauces] = useState<string | null>(null);
  const [toppingItems, setToppingItems] = useState<string[]>([]);

  const setSize = pizzaSize;
  const setCrust = pizzaCrust;
  const setToppingStyle = pizzaToppingStyle;
  const setToppings = toppingItems;
  const setSauce = pizzaSauces;

  const sizes = [
    { value: "7 inch", name: "7 inch", price: 5.99 },
    { value: "9.5 inch", name: "9.5 inch", price: 11.99 },
    { value: "11.5 inch", name: "11.5 inch", price: 13.99 },
    { value: "13.5 inch", name: "13.5 inch", price: 15.99 }
  ];

  const crusts = [
    { value: "Classic crust", name: "Classic crust", price: 0 },
    { value: "Italian crust", name: "Italian crust", price: 1 }
  ];

  const toppingStiles = [
    { value: "More Tomato", imgSrc: "./assets/icons/topping_style_1.png", price: 2 },
    { value: "More Cheese", imgSrc: "./assets/icons/topping_style_2.png", price: 3 }
  ];

  const sauces = [
    { value: "BBQ", price: 1.99 },
    { value: "Tomato", price: 2.99 },
    { value: "Garlic Hurb", price: 2.5 }
  ];

  const toppingParts = [
    { value: "Left Half", imgSrc: "./assets/icons/pizza_left.png", price: 2 },
    { value: "Right Half", imgSrc: "./assets/icons/pizza_right.png", price: 3 }
  ];

  const toppings = [
    { value: "Pineapple", price: 2.5 },
    { value: "Jalapenos", price: 2.99 },
    { value: "Sweet Corn", price: 3.5 },
    { value: "Pepperoni ", price: 3.99 },
    { value: "Red Onions", price: 5.99 },
    { value: "Anchovies", price: 2.99 },
    { value: "Ground Beef", price: 5.99 },
    { value: "Chicken Tikka ", price: 1.99 },
    { value: "Mushroom", price: 3.99 },
    { value: "Tuna ", price: 4.99 }
  ];

  const handleSelect = (value: string, type: "size" | "crust" | "toppingStyle" | "pizzaSauce" | "pizzatopping") => {
    if (type === "size") {
      setPizzaSize(value);
    } else if (type === "crust") {
      setPizzaCrust(value);
    } else if (type === "toppingStyle") {
      setPizzaToppingStyle(value);
    } else if (type === "pizzaSauce") {
      setPizzaSauces(value);
    } else if (type === "pizzatopping") {
      setToppingItems((prevItems) => prevItems.includes(value) ? prevItems.filter((item) => item !== value) : [...prevItems, value]
      );
    }
  }

  return (
    <section className="w-full flex-box flex-col gap-5">
      <form action="" className="w-full flex flex-col gap-5">
        {/*Pizza Size*/}
        <div className="w-full flex flex-col gap-2">
          <div className="w-full flex items-baseline justify-baseline">
            <h4 className="setting-title">
              Size
            </h4>
            <span className="">{setSize}</span>
          </div>
          <div className="w-full flex items-center justify-around  gap-2 px-[15px]">
            {sizes.map((size) => (
              <div
                key={size.value}
                className={`tile ${pizzaSize === size.value ? "ring-2 ring-amber-400 bg-white" : ""
                  } transition-all duration-250`}
                onClick={() => handleSelect(size.value, "size")}
              >
                <h4 className={`text-sm text-(--second-descr-color) ${pizzaSize === size.value ? "text-[#3E404A]" : ""}  transition-all duration-250`}>
                  {size.name}
                </h4>
                <span className={`no-selected text-(--second-dark) ${pizzaSize === size.value ? "text-orange-400" : ""}  transition-all duration-250 `}>
                  {size.price}$
                </span>
              </div>
            ))}
            <input type="hidden" name="ingredient" value={pizzaSize || ""} />
          </div>
        </div>

        {/*Pizza Crust*/}
        <div className="w-full flex flex-col gap-2">
          <div className="w-full flex items-baseline justify-baseline">
            <h4 className="setting-title">
              Crust
            </h4>
            <span className="">{setCrust}</span>
          </div>
          <div className="w-full flex items-center justify-around  gap-2 px-[15px]">
            {crusts.map((crust) => (
              <div
                key={crust.value}
                className={`tile ${pizzaCrust === crust.value ? "ring-2 ring-amber-400 bg-white" : ""
                  } transition-all duration-250`}
                onClick={() => handleSelect(crust.value, "crust")}
              >
                <h4 className={`text-sm text-(--second-descr-color) ${pizzaCrust === crust.value ? "text-[18px] font-semibold text-orange-400" : ""}  transition-all duration-250`}>
                  {crust.name}
                </h4>
                <span className={`no-selected text-(--second-dark) ${pizzaCrust === crust.value ? "text-orange-400 hidden" : ""}  transition-all duration-250 `}>
                  {crust.price}$
                </span>
              </div>
            ))}

            <input type="hidden" name="ingredient" value={pizzaCrust || ""} />
          </div>
        </div>

        {/*Pizza Topping Style*/}
        <div className="w-full flex flex-col gap-2">
          <div className="w-full flex items-baseline justify-baseline">
            <h4 className="setting-title">
              Topping Style
            </h4>
            <span className="">{setToppingStyle}</span>
          </div>
          <div className="w-full flex items-center justify-around  gap-2 px-[15px]">
            {toppingStiles.map((toppingStyle) => (
              <div
                key={toppingStyle.value}
                className=""
                onClick={() => handleSelect(toppingStyle.value, "toppingStyle")}
              >

                <div className={`rounded-tile ${pizzaToppingStyle === toppingStyle.value ? "scale-120 bg-white" : "grayscale-75"
                  } transition-all duration-250`}>
                  <img src={toppingStyle.imgSrc} alt="Topping Stile" className="" />
                </div>

              </div>
            ))}

            <input type="hidden" name="ingredient" value={pizzaToppingStyle || ""} />
          </div>
        </div>

        {/*Pizza Toppings*/}
        <div className="w-full flex flex-col gap-2">
          <div className="w-full flex items-baseline justify-baseline">
            <h4 className="setting-title">
              Choose Topping part
            </h4>
            <span className=""></span>
          </div>

          <div className="flex items-center justify-around w-full px-[15px]">
            <div className="flex items-center justify-between gap-4">
              <div
                className={`flex items-center justify-around gap-2 ${pizzaToppingStyle === toppingParts[0]?.value ? "scale-115 bg-white" : "grayscale-75"
                  } transition-all duration-250`}
                onClick={() => handleSelect(toppingParts[0]?.value, "toppingStyle")}
              >
                <h4 className={`text-[15px] font-semibold ${pizzaToppingStyle === toppingParts[0]?.value ? "text-amber-400" : "text-(--dark-color)"} transition-all`}>{toppingParts[0]?.value}</h4>
                <img src={toppingParts[0]?.imgSrc} alt={toppingParts[0]?.value} className="" />
              </div>
              <div
                className={`flex items-center justify-around gap-2 ${pizzaToppingStyle === toppingParts[1]?.value ? "scale-115 bg-white text-amber-400" : "grayscale-75"
                  } transition-all duration-250`}
                onClick={() => handleSelect(toppingParts[1]?.value, "toppingStyle")}
              >
                <img src={toppingParts[0]?.imgSrc} alt={toppingParts[0]?.value} className="rotate-180" />
                <h4 className={`text-[15px] font-semibold ${pizzaToppingStyle === toppingParts[1]?.value ? "text-amber-400" : "text-(--dark-color)"} transition-all`}>{toppingParts[1]?.value}</h4>
              </div>
            </div>
          </div>

          {/*  <div className="w-full flex items-center justify-around  gap-2 px-[15px]">
            {toppingParts.slice(0, 2).map((toppingPart) => (
              <div
                key={toppingPart.value}
                className=""
                onClick={() => handleSelect(toppingPart.value, "toppingStyle")}
              >
                <h4 className="text-sm font-semibold text-gray-600">{toppingPart.value}</h4>
                <img src={toppingParts[0]?.imgSrc} alt={toppingParts[0]?.value} className="w-16 h-16 object-cover" />
                <div className={`w-full mb-12  ${pizzaToppingStyle === toppingPart.value ? "scale-120 bg-white" : "grayscale-75"
                  } transition-all duration-250`}>
                  <div className="relative w-full flex items-center justify-between">

                    <img src={toppingParts[1]?.imgSrc} alt={toppingParts[1]?.value} className="w-16 h-16 object-cover" />
                    <h4 className="">{toppingPart.value}</h4>
                  </div>
                </div>

              </div>
            ))}

            <input type="hidden" name="ingredient" value={pizzaToppingStyle || ""} />
          </div>*/}

          {/*Pizza Sauce*/}
          < div className="w-full flex flex-col gap-2" >
            <div className="w-full flex items-baseline justify-baseline">
              <h4 className="setting-title">
                Sauce
              </h4>
              <span className="">{setSauce}</span>
            </div>
            <div className="w-full flex items-center justify-around  gap-2 px-[15px]">
              {sauces.map((sauce) => (
                <div
                  key={sauce.value}
                  className={`tile ${pizzaSauces === sauce.value ? "ring-2 ring-amber-400 bg-white" : ""
                    } transition-all duration-250`}
                  onClick={() => handleSelect(sauce.value, "pizzaSauce")}
                >

                  <h4 className={`text-sm text-(--second-descr-color) ${pizzaSauces === sauce.value ? "text-[#3E404A]" : ""}  transition-all duration-250`}>
                    {sauce.value}
                  </h4>
                  <span className={`no-selected text-(--second-dark) ${pizzaSauces === sauce.value ? "text-orange-400" : ""}  transition-all duration-250 `}>
                    {sauce.price}$
                  </span>

                </div>
              ))}

              <input type="hidden" name="ingredient" value={pizzaSauces || ""} />
            </div>
          </div>

          {/*Pizza Toppings*/}
          <div className="w-full flex flex-col gap-2" >
            <div className="w-full flex items-baseline justify-baseline">
              <h4 className="setting-title">
                Choose Toppings
              </h4>
            </div>
            <div className="grid grid-cols-3 gap-2 px-[15px]">
              {toppings.map((topping) => (
                <div
                  key={topping.value}
                  className={`tile cursor-pointer ${toppingItems.includes(topping.value) ? "ring-2 ring-amber-400 bg-white" : ""
                    } transition-all duration-250`}
                  onClick={() => handleSelect(topping.value, "pizzatopping")}
                >

                  <h4 className={`text-[15px] font-semibold text-(--second-descr-color) ${toppingItems.includes(topping.value) ? "text-orange-400" : ""}  transition-all duration-250`}>
                    {topping.value}
                  </h4>
                </div>
              ))}

              <input type="hidden" name="ingredient" value={toppingItems.join(",")} />
            </div>
          </div>
        </div>

      </form>
    </section >
  );
}

export default PizzaSettings;