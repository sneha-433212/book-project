import React, { useEffect } from 'react';
import { Categories, mockData } from '../assets/mockData';
import HeroImage from '../assets/images/Online gallery-bro.png';
import InfoSection from '../components/InfoSection';
import CategorySection from '../components/CategorySection';
import { setProducts } from '../redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import Shop from './Shop';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(state => state.product);

  useEffect(() => {
    dispatch(setProducts(mockData));
  }, [dispatch]);

  return (
    <div>
      <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
        <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-0 md:space-x-2'>
          {/* Left Sidebar */}
          <div className='w-full md:w-3/12'>
            <div className='bg-green-700 text-white text-1xl font-bold px-2 py-2.5'>
              Our All CATEGORIES
            </div>
            <ul>
              {Categories.map((category, index) => (
                <li key={index} className='flex items-center text-1.5xl font-medium mt-2'>
                  <div className='w-3 h-3 border border-gray-900 rounded-full mr-1'></div>
                  {category}
                </li>
              ))}
            </ul>

            
            <div className='flex justify-items-stretch mt-10'>
              <p className="text-xl mt-2.5 font-bold text-gray-700">MILLIONS + PRODUCTS</p>
              <button
                onClick={() => navigate('/shop')}
                className='bg-green-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded shadow-md'
              >
                Shop Now
              </button>
            </div>
          </div>

          {/* Hero Section */}
          <div className='w-full md:w-9/12 mt-8 md:mt-0 h-96 relative'>
            <img src={HeroImage} alt="" className='h-full w-full object-cover' />
            <div className="absolute top-16 left-8">
              <p className="text-blue-950 bg-green-200 text-2xl font-serif px-9 py-5 rounded mb-4 shadow">HELLO!! From Ketty Perry Online BookStore.com</p>
              {/* <h2 className="text-gray-800 text-2xl font-serif bg-green-600 p-5 rounded-md">Welcome To Kitty Perry</h2> */}
              <p className="text-xl mt-2.5 font-bold text-white">MILLIONS+ PRODUCTS</p>
              <button className="bg-white px-8 py-1.5 text-black mt-4 hover:bg-gray-250 transform transition-transform duration-300 hover:scale-105">
                HURRY UP!! 50% OFF is Running
              </button>
            </div>
          </div>
        </div>

        {/* Info and Category Sections */}
        <InfoSection />
        <CategorySection />

        {/* Top Products Section */}
        <div className="container mx-auto py-12">
          <h2 className='text-2xl font-bold mb-6 text-center'>Top Book Recommendations</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
            {products.products.slice(0, 5).map((product, index) => (
              <ProductCard key={product.id || index} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* Shop Component */}
      <Shop />
    </div>
  );
};

export default Home;

