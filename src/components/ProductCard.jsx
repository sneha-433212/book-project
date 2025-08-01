import React from 'react';
import { FaStar } from 'react-icons/fa';
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    alert("Product added successfully");
  };

  return (
    <Link to={`/product/${product.id}`}>
    <div className='bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105'>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain mb-4"
      />

      <h3 className='text-lg font-semibold'>{product.name}</h3>
      <p className='text-gray-500'>${product.price}</p>

      <div className='flex items-center mt-2'>
        <FaStar className='text-yellow-600' />
        <FaStar className='text-yellow-600' />
        <FaStar className='text-yellow-600' />
        <FaStar className='text-yellow-600' />
      </div>

      <div
        className='absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-yellow-600 group text-white text-sm rounded-full hover:w-32 hover:bg-gray-800 transition-all duration-100 cursor-pointer overflow-hidden'
        onClick={(e) => handleAddToCart(e, product)}
      >
        <span className=" text-black text-2xl group-hover:hidden">+</span>
        <span className="hidden group-hover:block px-2">Add to cart</span>
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;

