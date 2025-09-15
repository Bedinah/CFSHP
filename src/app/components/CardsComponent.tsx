import React from "react";
import Image, { StaticImageData } from "next/image";

interface CoffeeCardProps {
  name: string;
  image: StaticImageData;
  description: string;
  price: number;
  onChoose?: () => void;
}

const CardsComponent: React.FC<CoffeeCardProps> = ({
  name,
  image,
  description,
  price,
  onChoose,
}) => {
  return (
    <div className="relative p-6 min-w-[20em] max-w-[24em] rounded-2xl bg-[#ededed50] shadow-lg hover:scale-105 transition-transform flex flex-col items-center">
      <p className="absolute right-4 top-4 text-xl font-semibold">
        RWF {price}
      </p>
      <Image
        className="w-68 transition-transform hover:scale-105"
        src={image}
        alt={name}
      />
      <p className="text-[#8F9931] text-2xl font-normal">
        {name.toUpperCase()}
      </p>
      <p className="text-lg font-light text-center">{description}</p>
      <div className="w-[70%] mt-5">
        <button className="Button" onClick={onChoose}>
          Choose
        </button>
      </div>
    </div>
  );
};
export default CardsComponent;
