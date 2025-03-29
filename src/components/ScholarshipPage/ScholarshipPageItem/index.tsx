'use client';

import React, { useEffect, useState } from 'react';

interface ScholarshipData {
  title: string;
  description: string;
  points: string[];
}

const ScholarshipPageItem: React.FC = () => {
  const [data, setData] = useState<ScholarshipData[]>([]);

  useEffect(() => {
    fetch('/api/scholarships/scholarshippageitem')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching scholarship data:', error));
  }, []);

  if (data.length === 0) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 space-y-6">
      {data.map((scholarship, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white bg-blue-600 p-3 rounded-md text-center">
            {scholarship.title}
          </h2>
          <p className="mt-3 text-gray-700">{scholarship.description}</p>
          <ul className="list-disc mt-4 pl-5 text-gray-700">
            {scholarship.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ScholarshipPageItem;
