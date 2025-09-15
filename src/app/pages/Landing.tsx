import React from "react";
import DrinksComponent from "./DrinkCard";
import TabsComponent from "../components/TabsComponent";

const LandingPage = () => {
  return (
    <>
      <h1> PLACE YOUR ORDER</h1>
      <div>
        <TabsComponent
          tabs={[
            { label: "Coffee" },
            { label: "Bread" },
            { label: "Ice Cream" },
            { label: "Pastries" },
          ]}
        />
        <DrinksComponent />
      </div>
    </>
  );
};
export default LandingPage;
