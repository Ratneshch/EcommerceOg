import React from "react";

const Category = () => {
  return (
    <div className="w-full bg-white shadow-md sticky top-[60px] z-50">
      <ul
        className="
          flex 
          items-center 
          justify-between
          gap-15
          px-10 
          py-3 
          text-sm 
          font-medium 
          text-gray-600 
          overflow-x-auto 
          scrollbar-hide 
          whitespace-nowrap
        "
      >
        <li className="cursor-pointer hover:text-blue-600 transition-colors">Computer</li>
        <li className="cursor-pointer hover:text-blue-600 transition-colors">Smart Phone</li>
        <li className="cursor-pointer hover:text-blue-600 transition-colors">TV</li>
        <li className="cursor-pointer hover:text-blue-600 transition-colors">Kitchen</li>
        <li className="cursor-pointer hover:text-blue-600 transition-colors">Gaming</li>
        <li className="cursor-pointer hover:text-blue-600 transition-colors">Smart Watch</li>
        <li className="cursor-pointer hover:text-blue-600 transition-colors">HeadPhones</li>
        <li className="cursor-pointer hover:text-blue-600 transition-colors">Accessories</li>
      </ul>
    </div>
  );
};

export default Category;
