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
    <div className="relative p-4 min-w-[16em] max-w-[22em] h-[25rem] rounded-2xl bg-white shadow-md flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl">
      <p className="absolute right-4 top-4 text-2xl font-bold text-[#3E2723] p-1">
        RWF {price?.toLocaleString()}
      </p>
      <div className=" w-40 h-40 flex items-center justify-center overflow-hidden rounded-full mt-10">
        <Image
          className="w-full h-full object-contain transition-transform hover:scale-105"
          src={image}
          alt={name}
        />
      </div>
      <p className="text-[#3E2723] text-2xl font-normal mb-2">
        {name.toUpperCase()}
      </p>
      <p className="text-lg font-light text-center opacity-80">{description}</p>
      <div className="w-[50%] absolute bottom-6">
        <button className="Button cursor-pointer" onClick={onChoose}>
          Choose
        </button>
      </div>
    </div>
  );
};
export default CardsComponent;
