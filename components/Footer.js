import Link from 'next/link';
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
          <span className='text-[#2B21BA]'>De forenede kålavlere</span>
        </p>
        <div className='flex gap-[5rem] pb-5 pl-7'>
          {/* Plads til ikoner */}
          <FaInstagram className='text-2xl cursor-pointer hover:text-blue-600'></FaInstagram>
          <FaFacebook className='text-2xl cursor-pointer hover:text-blue-600'></FaFacebook>
          <FaMailBulk className='text-2xl cursor-pointer hover:text-blue-600'></FaMailBulk>
        
        </div>
      </ul>
    </div>
    <div className='p-5'>
      <ul>
        <p className='text-gray-800 font-bold text-2xl pb-4'>Dansk produceret kål</p>
        <Link href="/about">
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Om os</li>
        </Link>
        <Link href="/food">
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Nem mad</li>
        </Link>
        <Link href="/contact">
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Kontakt</li>
        </Link>
      </ul>
    </div>
    <div className='p-5'>
      <ul>
        <p className='text-gray-800 font-bold text-2xl pb-4'>Kontakt</p>
        <div className='text-gray-500 text-md pb-2 font-semibold'>
          <li>Adresse:</li>
          <li>De forenede kålavlere v. Anders Balleby</li>
          <li>Døesvej 70</li>
          <li>7500 Holstebro</li>
        </div>
        <a href='https://www.google.com/maps/place/HTX+-+Teknisk+Gymnasium+UCH/@56.372311,8.6026271,17.82z/data=!4m12!1m6!3m5!1s0x464a3313f68b1cf7:0xfc2affb5e8b039ad!2sHTX+Holstebro!8m2!3d56.372336!4d8.6038801!3m4!1s0x0:0x312c0018e422a9ac!8m2!3d56.3717063!4d8.6019167' target="_blank" rel="noreferrer" title="Åben Google Maps">
          <li className='text-blue-600 text-md pt-4 font-semibold cursor-pointer '>Vis på Google Maps</li>
        </a>
      
      </ul>
    </div>
  
  </div>

  <div className='flex flex-col justify-center items-center text-center p-5 bg-gray-50'>
  <h1 className='text-gray-800 font-semibold'>© 2022 Alle rettigheder forbeholdes
  </h1>
  </div>
  </>
  )
}

export default Footer