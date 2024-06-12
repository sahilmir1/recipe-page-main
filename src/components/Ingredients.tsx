import React from "react";

interface Props {
  data: string[];
}

const Ingredients: React.FC<Props> = ({ data }) => {
  return (
    <div className="text-nutmeg">
      <h1 className="text-4xl font-youngSerif mb-4">Ingredients</h1>
      <ul className="list-disc custom-list flex flex-col space-y-2 ps-2">
        {data.map((item, index) => (
          <li key={index} className="custom-list-item font-outfit text-lg">
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
