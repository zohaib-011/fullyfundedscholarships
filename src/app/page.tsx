// pages/index.tsx
import React from 'react';
import NavigationMenu from '@/components/NavigationMenu';
import FundedItemBox from '@/components/FundedItemBox';

const HomePage = () => {
  const fundedItems = [
    {
      thumbnail: 'assets/images/erasmus.webp',
      title: 'Erasmus Mundus IMAPP Scholarships 2025-26 (Fully Funded)',
      category: 'Master Scholarships',
      date: 'January 25, 2025',
    },
    {
      thumbnail: 'assets/images/erasmus.webp',
      title: 'United Nations International LAW Fellowship 2025 in Netherlands (Fully Funded)',
      category: 'Fellowships',
      date: 'January 25, 2025',
    },
    {
      thumbnail: '/images/hungary-scholarships.jpg',
      title: 'Bilateral State Scholarships 2025 in Hungary (Fully Funded)',
      category: 'Fully Funded Scholarships',
      date: 'January 24, 2025',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavigationMenu />
      <div className="container mx-auto py-6 px-6">
        <h1 className="text-center text-2xl font-bold mb-6">Trending Now</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fundedItems.map((item, index) => (
            <FundedItemBox
              key={index}
              thumbnail={item.thumbnail}
              title={item.title}
              category={item.category}
              date={item.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

// // components/NavigationMenu.tsx
// import React from 'react';
// import Link from 'next/link';

// const NavigationMenu = () => {
//   return (
//     <nav className="bg-white shadow-md">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <h1 className="text-lg font-bold text-gray-700">Bright Scholarships</h1>
//         <ul className="flex space-x-4">
//           <li>
//             <Link href="/">
//               <a className="text-gray-600 hover:text-gray-900">Home</a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/scholarships">
//               <a className="text-gray-600 hover:text-gray-900">Scholarships</a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/fellowships">
//               <a className="text-gray-600 hover:text-gray-900">Fellowships</a>
//             </Link>
//           </li>
//           <li>
//             <Link href="/internships">
//               <a className="text-gray-600 hover:text-gray-900">Internships</a>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default NavigationMenu;

// // components/FundedItemBox.tsx
// import React from 'react';

// interface FundedItemBoxProps {
//   thumbnail: string;
//   title: string;
//   category: string;
//   date: string;
// }

// const FundedItemBox: React.FC<FundedItemBoxProps> = ({ thumbnail, title, category, date }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden">
//       <img src={thumbnail} alt={title} className="w-full h-40 object-cover" />
//       <div className="p-4">
//         <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
//         <p className="text-sm text-gray-600">{category}</p>
//         <p className="text-sm text-gray-500 mt-2">{date}</p>
//       </div>
//     </div>
//   );
// };

// export default FundedItemBox;
