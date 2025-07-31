// import React, { useState, useEffect } from 'react';
// import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import Modal from './Modal';
// import Register from './Register';
// import Login from './Login';
// import { setSearchTerm } from '../redux/productSlice';

// const Navbar = () => {
//   const [isModelOpen, setIsModelOpen] = useState(false);
//   const [isLogin, setIsLogin] = useState(true);
//   const [search, setSearch] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkLogin = () => {
//       const user = localStorage.getItem('user');
//       setIsLoggedIn(!!user);
//     };

//     checkLogin();

   
//     window.addEventListener('login-status-change', checkLogin);

//     return () => {
//       window.removeEventListener('login-status-change', checkLogin);
//     };
//   }, []);

//   const openSignUp = () => {
//     setIsLogin(false);
//     setIsModelOpen(true);
//   };

//   const openLogin = () => {
//     setIsLogin(true);
//     setIsModelOpen(true);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     dispatch(setSearchTerm(search));
//     navigate('/filter-data');
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('user');
//     localStorage.removeItem('access_token');
//     setIsLoggedIn(false);

    
//     window.dispatchEvent(new Event('login-status-change'));

//     alert('You have been logged out.');
//     navigate('/');
//   };

//   const products = useSelector((state) => state.cart.products);

//   return (
//     <nav className='bg-white shadow-md sticky top-0 z-50'>
//       <div className='container mx-auto px-4 md:px-16 py-4 flex justify-between items-center'>
//         <div className='text-lg font-bold'>
//           <Link to="/">Welcome to-Kitty Perry</Link>
//         </div>

//         <div className='relative flex-1 mx-4'>
//           <form onSubmit={handleSearch}>
//             <input
//               type='text'
//               placeholder='Search product'
//               className='w-full border py-2 px-4'
//               onChange={(e) => setSearch(e.target.value)}
//             />
//             <FaSearch className='absolute top-3 right-3 text-red-500' />
//           </form>
//         </div>

//         <div className='flex items-center space-x-4'>
//           <Link to='/cart' className='relative'>
//             <FaShoppingCart className='text-lg' />
//             {products.length > 0 && (
//               <span className='absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center'>
//                 {products.length}
//               </span>
//             )}
//           </Link>

//           {isLoggedIn ? (
//             <button className='text-red-600 font-bold' onClick={handleLogout}>
//               Logout
//             </button>
//           ) : (
//             <button className='hidden md:block' onClick={openLogin}>
//               Login | Register
//             </button>
//           )}

//           <button className='block md:hidden'>
//             <FaUser />
//           </button>
//         </div>
//       </div>

//       <div className='flex items-center justify-center space-x-10 py-2 text-sm font-bold'>
//         <Link to='/' className='hover:underline'>Home</Link>
//         <Link to='/shop' className='hover:underline'>Shop</Link>
//         <Link to='/contact' className='hover:underline'>Contact</Link>
//       </div>

//       <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
//         {isLogin ? (
//           <Login openSignUp={openSignUp} setIsModelOpen={setIsModelOpen} />
//         ) : (
//           <Register openLogin={openLogin} />
//         )}
//       </Modal>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { FaSearch, FaShoppingCart, FaUser, FaBook } from 'react-icons/fa'; // ✅ added FaBook
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './Modal';
import Register from './Register';
import Login from './Login';
import { setSearchTerm } from '../redux/productSlice';

const Navbar = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [search, setSearch] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const checkLogin = () => {
      const user = localStorage.getItem('user');
      setIsLoggedIn(!!user);
    };

    checkLogin();
    window.addEventListener('login-status-change', checkLogin);
    return () => {
      window.removeEventListener('login-status-change', checkLogin);
    };
  }, []);

  const openSignUp = () => {
    setIsLogin(false);
    setIsModelOpen(true);
  };

  const openLogin = () => {
    setIsLogin(true);
    setIsModelOpen(true);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate('/filter-data');
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
    setIsLoggedIn(false);
    window.dispatchEvent(new Event('login-status-change'));
    alert('You have been logged out.');
    navigate('/');
  };

  const products = useSelector((state) => state.cart.products);

  return (
    <nav className='bg-white shadow-md sticky top-0 z-50'>
      <div className='container mx-auto px-4 md:px-16 py-4 flex justify-between items-center'>
        <div className='text-lg font-bold flex items-center space-x-2'>
      
          <FaBook className="text-gray-700 text-3xl" />
          <Link to="/">Welcome To-Kitty Perry</Link>
        </div>

        <div className='relative flex-1 mx-4'>
          <form onSubmit={handleSearch}>
            <input
              type='text'
              placeholder='Search product'
              className='w-full border py-2 px-4'
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch className='absolute top-3 right-3 text-red-500' />
          </form>
        </div>

        <div className='flex items-center space-x-4'>
          <Link to='/cart' className='relative'>
            <FaShoppingCart className='text-lg' />
            {products.length > 0 && (
              <span className='absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center'>
                {products.length}
              </span>
            )}
          </Link>

          {isLoggedIn ? (
            <button className='text-red-600 font-bold' onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className='hidden md:block' onClick={openLogin}>
              Login | Register
            </button>
          )}

          <button className='block md:hidden'>
            <FaUser />
          </button>
        </div>
      </div>

      <div className='flex items-center justify-center space-x-10 py-2 text-sm font-bold'>
        <Link to='/' className='hover:underline'>Home</Link>
        <Link to='/shop' className='hover:underline'>Shop</Link>
        <Link to='/contact' className='hover:underline'>Contact</Link>
      </div>

      <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
        {isLogin ? (
          <Login openSignUp={openSignUp} setIsModelOpen={setIsModelOpen} />
        ) : (
          <Register openLogin={openLogin} />
        )}
      </Modal>
    </nav>
  );
};

export default Navbar;

