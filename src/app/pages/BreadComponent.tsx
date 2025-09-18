import React from "react";
import BreadImg from "../images/breads/bread img.png";
import CardsComponent from "../components/CardsComponent";

const breadObj = [
    {
        name: "Baguette",
        image: BreadImg,
        description: "Classic French bread with a crisp crust and soft interior",
        price: 2.5,
    },
    {
        name: "Croissant",
        image: BreadImg,
        description: "Buttery, flaky pastry with a golden crust",
        price: 3.0,
    },
    {
        name: "Sourdough",
        image: BreadImg,
        description: "Artisan bread with a chewy crust and tangy flavor",
        price: 3.5,
    },
    {
        name: "Ciabatta",
        image: BreadImg,
        description: "Italian bread with a crisp crust and airy texture",
        price: 3.0,
    },
    {
        name: "Brioche",
        image: BreadImg,
        description: "Soft, slightly sweet bread rich with butter and eggs",
        price: 3.75,
    },
    {
        name: "Focaccia",
        image: BreadImg,
        description: "Flat Italian bread topped with olive oil and herbs",
        price: 3.25,
    },
    {
        name: "Banana Bread",
        image: BreadImg,
        description: "Moist, sweet loaf made with ripe bananas",
        price: 2.75,
    },
    {
        name: "Cinnamon Roll",
        image: BreadImg,
        description: "Sweet roll filled with cinnamon sugar and topped with icing",
        price: 3.5,
    },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BreadsComponent = (props: any) => {
    return (
        <div className={`grid ${props?.showPage ? 'grid-cols-4' : ' grid-cols-5'} rounded-xl gap-6`}>
            {breadObj.map((item, idx) => (
                <CardsComponent
                    key={item.name + idx}
                    name={item.name}
                    image={item.image}
                    description={item.description}
                    price={item.price}
                    onChoose={() => props?.onChoose(item)}
                />
            ))}
        </div>
    );
};
export default BreadsComponent;
