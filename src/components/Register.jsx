import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';

const Register = ({ openLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  useEffect(() => {
    const handleClose = () => {
      setName('');
      setEmail('');
      setPassword('');
    };

    window.addEventListener('modal-close', handleClose);
    return () => window.removeEventListener('modal-close', handleClose);
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();

    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert('Account created! Check your email for verification.');
      setName('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div className='mb-4'>
          <label className='block text-gray-700'>Name</label>
          <input
            type='text'
            className='w-full px-3 py-2 border'
            placeholder='Enter Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Email</label>
          <input
            type='email'
            className='w-full px-3 py-2 border'
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Password</label>
          <input
            type='password'
            className='w-full px-3 py-2 border'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <button type='submit' className='w-full bg-green-600 text-white py-2'>
            Sign Up
          </button>
        </div>
      </form>
      <div className='text-center'>
        <span className='text-gray-700'>Already have an account?</span>
        <button className='text-red-800' onClick={openLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Register;



