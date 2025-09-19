"use client";
import React, { useState } from "react";
import DrinksComponent from "./DrinkCard";
import TabsComponent from "../components/TabsComponent";
import BreadsComponent from "./BreadComponent";
import CheckoutPage from "./Checkout";

const LandingPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showPage, setShowPage] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [cartItems, setCartItems] = useState<any[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAddToCart = (item: any) => {
    setShowPage(true);
    setCartItems((prev) => [...prev, item]);
  };

  const renderActiveTab = () => {
    switch (activeIndex) {
      case 0:
        return (
          <DrinksComponent
            onChoose={handleAddToCart}
            showPage={showPage}
            setShowPage={setShowPage}
          />
        );
      case 1:
        return (
          <BreadsComponent
            onChoose={handleAddToCart}
            showPage={showPage}
            setShowPage={setShowPage}
          />
        );
      case 2:
        return <div className="p-4">🍨 Ice Cream coming soon!</div>;
      case 3:
        return <div className="p-4">🥐 Pastries coming soon!</div>;
      default:
        return null;
    }
  };

  return (
    <>
      <h1 className="text-4xl font-extrabold mb-4">
        <span className="text-[#3E2723]">Bites & Brews ☕</span>{" "}
        <span className="text-[#C4A484]">Coffee Shop</span>
      </h1>
      <div>
        <TabsComponent
          tabs={[
            { label: "Coffee" },
            { label: "Bread" },
            { label: "Ice Cream" },
            { label: "Pastries" },
          ]}
          activeIndex={activeIndex}
          onTabChange={setActiveIndex}
        />
        <h2 className="text-xl font-semibold mb-10">
          <span className="text-[#C4A484]">What would you like</span>{" "}
          <span className="text-[#3E2723]">to enjoy today?</span>
        </h2>
        {/* Shared layout for tabs + checkout */}
        <div
          className={`flex ${showPage ? "flex-row gap-7" : "flex-col"} w-full`}
        >

          <div>
            {renderActiveTab()}
          </div>

          {showPage && (
            <div className="flex-1">
              <CheckoutPage cartItems={cartItems} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default LandingPage;
