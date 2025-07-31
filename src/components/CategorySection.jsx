import React from 'react';
import FantasyCategory from '../assets/images/Mermaid-cuate.png';
import HorrorCategory from '../assets/images/Horror movie-amico.png';
import CartoonCategory from '../assets/images/Hidden person-pana.png';

const categories = [
  {
    title: 'Fantasy',
    imageUrl: FantasyCategory,
  },
  {
    title: 'Scroll on ',
    imageUrl: HorrorCategory,
  },
  {
    title: 'Cartoon',
    imageUrl: CartoonCategory,
  },
];

const CategorySection = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <img
            src={category.imageUrl}
            alt={category.title}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          <div className="absolute top-20 left-12 text-white">
            <p className="text-xl font-bold">{category.title}</p>
            <p className="text-sm">All YOURS</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
