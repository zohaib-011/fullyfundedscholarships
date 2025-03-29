"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ScholarshipPageItem from "./ScholarshipPageItem";

// Define TypeScript interfaces
interface Scholarship {
  title: string;
  heading?: {
    title: string;
    description: string;
  };
  table?: {
    details: {
      title: string;
      description: string;
    }[];
  };
}

interface PopularItemProps {
  item: {
    id: number;
    title: string;
    date: string;
    image: string;
  };
}


const ScholarshipPage: React.FC = () => {
  const [scholarship, setScholarship] = useState<Scholarship | null>(null);
  const [popularItems, setPopularItems] = useState<PopularItemProps["item"][]>([]);

  useEffect(() => {
    // Fetch scholarship details from API
    axios.get<Scholarship[]>("/api/scholarships").then((response) => {
      setScholarship(response.data[0]); // Assuming you want to show the first scholarship
    });
    
    axios.get<PopularItemProps["item"][]>("/api/popular").then((response) => {
      setPopularItems(response.data);
    });
    
  }, []);

  return (
    <div className="container mx-auto p-4">
    {scholarship && (
      <div className="bg-red-600 text-white p-4 text-lg font-bold">
        {scholarship.title}
      </div>
    )}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      {/* Left Section */}
      <div className="md:col-span-2 bg-white p-4 shadow-md rounded-lg">
        {scholarship && scholarship.heading && (
          <>
            <h2 className="text-xl font-bold mb-2">{scholarship.heading.title}</h2>
            <p className="text-gray-700 mb-4">{scholarship.heading.description}</p>
            {scholarship.table?.details && (
              <table className="w-full border-collapse border border-gray-300">
                <tbody>
                  {scholarship.table.details.map((row, index) => (
                    <tr key={index} className="border-b border-gray-300">
                      <td className="font-bold bg-green-500 text-white p-2">
                        {row.title}
                      </td>
                      <td className="p-2">{row.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            <ScholarshipPageItem />
          </>
        )}
      </div>
      {/* Right Section */}
      <div className="bg-gray-100 p-4 shadow-md rounded-lg">
        <h3 className="text-lg font-bold bg-green-500 text-white p-2 rounded">
          Most Popular
        </h3>
        <div className="mt-2">
          {popularItems.map((item, index) => (
            <PopularItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  </div>
  
  );
};

// Define the PopularItem component with proper TypeScript types
const PopularItem: React.FC<PopularItemProps> = ({ item }) => (
  <div className="p-2 border-b border-gray-300 flex gap-4">
    <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
    <div>
      <h4 className="font-bold">{item.title}</h4>
      <p className="text-gray-600">{item.date}</p>
    </div>
  </div>
);


export default ScholarshipPage;
