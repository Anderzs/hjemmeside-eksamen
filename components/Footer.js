import React from 'react'
import {FaInstagram, FaLink} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {FaMailBulk} from 'react-icons/fa';


function Footer() {
  return (
  <>
  <div className='bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20'>
    <div className='p-5'>
      <ul>
        <p className='text-gray-800 font-bold text-3xl pb-6'>
          <span className='text-[#2B21BA]'>Svinningegaard</span>
        </p>
        <div className='flex gap-[4rem] pb-5'>
          {/* Plads til ikoner */}
          <a href="https://www.instagram.com/svinningegaard_kaal/" target="_blank" rel="noreferrer" title="Instagram"><FaInstagram className='text-2xl cursor-pointer hover:text-blue-600'></FaInstagram></a>
          <a href="https://www.facebook.com/Nem-mad-med-k%C3%A5l-1565838127062901/" rel="noreferrer" target="_blank" title="Facebook"><FaFacebook className='text-2xl cursor-pointer hover:text-blue-600'></FaFacebook></a>
          <a href="mailto:svinningegaard@tdcadsl.dk" target="_blank" rel="noreferrer" title="Email"><FaMailBulk className='text-2xl cursor-pointer hover:text-blue-600'></FaMailBulk></a>
        
        </div>
      </ul>
    </div>
    <div className='p-5'>
      <ul>
        <p className='text-gray-800 font-bold text-2xl pb-4'>Product</p>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Stocks</li>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Futures & Options</li>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Mutual Funds</li>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Fixed deposits</li>
      </ul>
    </div>
    <div className='p-5'>
      <ul>
        <p className='text-gray-800 font-bold text-2xl pb-4'>Company</p>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>About</li>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Products</li>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Pricing</li>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Careers</li>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Press & Media</li>
      </ul>
    </div>
    <div className='p-5'>
      <ul>
        <p className='text-gray-800 font-bold text-2xl pb-4'>Support</p>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Contact</li>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Support portals</li>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>List of Charges</li>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Downloads & Resources</li>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Videos</li>
      </ul>
    </div>
  </div>

  <div className='flex flex-col justify-center items-center text-center p-5 bg-gray-50'>
  <h1 className='text-gray-800 font-semibold'>© 2022 All rights reserved
  </h1>
  </div>
  </>
  )
}

export default Footer