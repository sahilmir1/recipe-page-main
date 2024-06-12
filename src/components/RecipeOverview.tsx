import React from "react";

interface RecipeOverview {
  title: string;
  details: string;
}

const RecipeOverview: React.FC<RecipeOverview> = ({ title, details }) => {
  return (
    <div className="mt-10">
      <h1 className="font-youngSerif mb-6 lg:text-6xl text-4xl">{title}</h1>
      <p className="font-outfit lg:text-xl text-lg text-nutmeg">{details}</p>
    </div>
  );
};

export default RecipeOverview;
