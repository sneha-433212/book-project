import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase';

const Login = ({ openSignUp, setIsModelOpen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert('Login successful!');

      localStorage.setItem('user', JSON.stringify(data.user));
      if (data.session) {
        localStorage.setItem('access_token', data.session.access_token);
      }

      window.dispatchEvent(new Event('login-status-change'));

      setEmail('');
      setPassword('');
      setIsModelOpen(false);
      navigate('/');
    }
  };

  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Login</h2>
      <form onSubmit={handleLogin}>
        <div className='mb-4'>
          <label className='block text-gray-700'>Email</label>
          <input
            type='email'
            className='w-full px-3 py-2 border'
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
            required
          />
        </div>
        <div className='mb-4 flex items-center justify-between'>
          <label className='inline-flex items-center'>
            <input type='checkbox' className='form-checkbox' />
            <span className='ml-2 text-gray-700'>Remember me</span>
          </label>
          <a href='#' className='text-green-700'>
            Forgot Password?
          </a>
        </div>
        <div className='mb-4'>
          <button
            type='submit'
            className='w-full bg-green-600 text-white py-2'
          >
            Login
          </button>
        </div>
      </form>
      <div className='text-center'>
        <span className='text-gray-700'>Don't have an account?</span>
        <button className='text-green-800' onClick={openSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;


