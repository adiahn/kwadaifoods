import React, { useState } from 'react';

const CategoryNav = ({ onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'fast-foods', label: 'Fast foods' },
    { id: 'grains', label: 'Grains' },
    { id: 'flours', label: 'Flours' },
    { id: 'spices', label: 'Spices' },
    { id: 'ingredients', label: 'Ingredients' },
    { id: 'beverages', label: 'Beverages' },    
    { id: 'fruits', label: 'Fruits' }
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category.label);
    onCategoryChange(category.id);
  };

  return (
    <div className="w-full px-4 ">
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-wrap justify-center gap-2 md:gap-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className={`
                relative px-4 py-2 md:px-5 md:py-2.5 rounded-full
                text-sm md:text-base font-medium
                transition-all duration-300 ease-in-out
                transform hover:-translate-y-0.5
                shadow-sm hover:shadow-md
                focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
                ${activeCategory === category.label
                  ? 'bg-orange-500 text-white hover:bg-orange-600'
                  : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-500'
                }
                min-w-[100px] md:min-w-[120px]
                overflow-hidden
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
                before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000
              `}
            >
              <span className="relative z-10">
                {category.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;