import React from "react";

interface Perk {
  id: number;
  title: string;
  description: string;
}

const perks: Perk[] = [
  { id: 1, title: "Flexible Hours", description: "Work at your own pace with flexible work hours." },
  { id: 2, title: "Health Benefits", description: "Comprehensive health coverage for you and your family." },
  { id: 3, title: "Remote Work", description: "Option to work remotely from anywhere." }
];

const Perks: React.FC = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Perks</h2>
      <ul>
        {perks.map((perk) => (
          <li key={perk.id} className="mb-2 p-2 bg-white shadow rounded">
            <h3 className="font-semibold">{perk.title}</h3>
            <p className="text-gray-600">{perk.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Perks;

// This component can be used in Next.js pages by importing it as needed.
