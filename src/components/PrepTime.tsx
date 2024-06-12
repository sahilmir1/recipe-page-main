import React from "react";

interface Preparation {
  total: number;
  preparation: number;
  cooking: number;
}

interface Props {
  data: Preparation;
}

const PrepTime: React.FC<Props> = ({ data }) => {
  return (
    <div className="font-outfit bg-roseWhite p-6 rounded-lg text-nutmeg">
      <h1 className="font-bold text-darkRaspberry mb-4 text-2xl">
        Preparation Time
      </h1>
      <ul className="list-disc custom-list flex flex-col space-y-2 ps-2 text-lg">
        <li className="custom-list-item">
          <span className="font-bold text-nutmeg">Total time: </span>
          <span>Approximately {data.total} minutes</span>
        </li>
        <li className="custom-list-item">
          <span className="font-bold text-nutmeg">Preparation time: </span>
          <span>{data.preparation} minutes</span>
        </li>
        <li className="custom-list-item">
          <span className="font-bold text-nutmeg">Cooking time: </span>
          <span>{data.cooking} minutes</span>
        </li>
      </ul>
    </div>
  );
};

export default PrepTime;
