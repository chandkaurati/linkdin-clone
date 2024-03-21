import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo  from '../assets/login-logo.svg'
import heroNav  from '../assets/login-hero.svg'
import google  from '../assets/google.svg'
function Login(props) {
  return (
    <div>
      <nav 
       className="m-auto max-w-7xl
       sm:px-4  sm:py-3 items-center
       justify-between flex
       "
      >
        <Link to="/">
         <div className="p-4">
         <img className='w-36' src={logo} alt="" />
         </div>
        </Link>
         <div className="lg:w-56 
         flex justify-between items-center">
        <Link to='/'>
        <button 
         className=' hover:bg-gray-200
          rounded-md py-2 px-3 mr-3'
         >Join Now</button>
        </Link>
        <Link to='/'>
         <button className='py-2 px-5 rounded-full border
           hover:bg-blue-100 text-blue-700
           border-blue-600 font-semibold text-sm' >Sign in</button>
        </Link>
         </div>
      </nav>
      <main className='pt-14 px-4  sm:px-7 mx-auto max-w-7xl'>
       <div className='
        flex  flex-col items-center sm:items-start sm:flex-row
       '>
        <h1 className='text-blue-500 font-light text-lg 
          sm:text-4xl
        '>well come to your professional network</h1>
        <img  className="sm:w-[600px]  mt-16" src={heroNav} alt="" />
       </div>
        <button className='flex gap-5 mt-14 m-auto rounded-full border border-gray-400 px-12 py-2 sm:px-24 '><img src={google} alt="" /> sign up with google</button>
      </main>
    </div>
  );
}

export default Login
