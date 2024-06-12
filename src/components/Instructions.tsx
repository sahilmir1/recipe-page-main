import React from "react";

interface Instruction {
  description: string;
  instruction: string;
}

interface Props {
  data: Instruction[];
}

const Instructions: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <h1 className="text-4xl font-youngSerif text-nutmeg mb-4">
        Instructions
      </h1>
      <ul className="list-decimal custom-list flex flex-col space-y-2 ps-2 font-outfit">
        {data.map((item, index) => (
          <div key={index} className="flex text-lg">
            <div className="me-4 font-bold text-nutmeg">{index + 1}.</div>
            <div>
              <span className="font-bold text-nutmeg">
                {item.description}:{" "}
              </span>
              <span>{item.instruction}</span>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Instructions;
