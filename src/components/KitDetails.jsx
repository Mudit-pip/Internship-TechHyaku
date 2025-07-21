import React from "react";

const KitDetail = ({ kit }) => {
  const { title, price, duration, features, components, image } = kit;

  return (
    <div className="border border-gray-200 rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6 text-left">
        <h3 className="text-xl font-bold text-[#2c5f55] mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{duration}</p>
        
        <ul className="list-disc ml-5 text-gray-700 text-sm mb-4">
          {features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        <div className="text-sm text-gray-600">
          <strong>Kit Includes:</strong> {components.join(", ")}
        </div>
      </div>
    </div>
  );
};

export default KitDetail;