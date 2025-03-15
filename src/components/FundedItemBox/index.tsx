import React from 'react';

interface FundedItemBoxProps {
  thumbnail: string;
  title: string;
  category: string;
  date: string;
}

const FundedItemBox: React.FC<FundedItemBoxProps> = ({ thumbnail, title, category, date }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={thumbnail} alt={title} className="w-full h-70 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600">{category}</p>
        <p className="text-sm text-gray-500 mt-2">{date}</p>
      </div>
    </div>
  );
};

export default FundedItemBox;
