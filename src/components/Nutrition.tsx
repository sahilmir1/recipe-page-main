import React from "react";

interface Nutrition {
  [key: string]: string;
}

interface Props {
  data: Nutrition;
}

const Nutrition: React.FC<Props> = ({ data }) => {
  return (
    <div className="pb-10">
      <h1 className="text-4xl font-youngSerif text-nutmeg mb-4">Nutrition</h1>
      <p className="text-lg text-nutmeg font-outfit">
        The table below shows nutritional values per serving without the
        additional fillings
      </p>
      <table className="text-nutmeg font-outfit text-xl w-full mt-6">
        {Object.keys(data).map((key) => (
          <tr
            key={key}
            className="[&:not(:last-child)]:border-b border-lightGrey"
          >
            <td className="capitalize py-4 ps-6">{key}</td>
            <td>
              <strong>{data[key]}</strong>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Nutrition;
