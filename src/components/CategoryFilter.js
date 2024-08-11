import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div>
      {categories.map(category => (
        <button 
          key={category} 
          className={selectedCategory === category ? 'selected' : ''} 
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
