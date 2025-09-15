import React from "react";
import CoffeDrink from "../images/drinks/drinksimg.png";
import CardsComponent from "../components/CardsComponent";

const coffeObj = [
  {
    name: "Caffe Latte",
    image: CoffeDrink,
    description: "1 shot espresso, steamed milk, light foam",
    price: 3.5,
  },
  {
    name: "Cappuccino",
    image: CoffeDrink,
    description: "1 shot espresso, equal parts steamed milk and milk foam",
    price: 3.5,
  },
  {
    name: "Flat White",
    image: CoffeDrink,
    description: "1 shot espresso, steamed milk, thin microfoam",
    price: 3.75,
  },
  {
    name: "Americano",
    image: CoffeDrink,
    description: "1 shot espresso, hot water",
    price: 2.5,
  },
  {
    name: "Espresso",
    image: CoffeDrink,
    description: "1 shot concentrated espresso",
    price: 2.0,
  },
  {
    name: "Mocha",
    image: CoffeDrink,
    description:
      "1 shot espresso, steamed milk, chocolate syrup, whipped cream",
    price: 4.0,
  },
  {
    name: "Macchiato",
    image: CoffeDrink,
    description: "1 shot espresso, small amount of milk foam",
    price: 3.0,
  },
  {
    name: "Hot Chocolate",
    image: CoffeDrink,
    description: "Steamed milk, cocoa powder, sugar, whipped cream (optional)",
    price: 300000,
  },
];

const DrinksComponent = () => {
  return (
    <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {coffeObj.map((item, idx) => (
        <CardsComponent
          key={item.name + idx}
          name={item.name}
          image={item.image}
          description={item.description}
          price={item.price}
          //   onChoose={() => console.log(`Chosen: ${item.name}`)}
        />
      ))}
    </div>
  );
};
export default DrinksComponent;
