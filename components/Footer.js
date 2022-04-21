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
        <p className='text-gray-800 font-bold text-2xl pb-4'>Danske kål fra friland</p>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Stocks</li>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Futures & Options</li>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Mutual Funds</li>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Fixed deposits</li>
      </ul>
    </div>
    <div className='p-5'>
      <ul>
        <p className='text-gray-800 font-bold text-2xl pb-4'>Kontakt</p>
        <div className='text-gray-500 text-md pb-2 font-semibold'>
          <li>Adresse:</li>
          <li>Svinningegaard v. Henrik Buhman</li>
          <li>Fogedgårdsvej 14</li>
          <li>4760 Vordingborg</li>
        </div>
        <a href='https://www.google.com/maps/place/Svinningeg%C3%A5rd,+G%C3%A5rdejer+Henrik+Buhmann/@55.0796194,11.8827502,16.51z/data=!4m13!1m7!3m6!1s0x4652c8866699b209:0xe0de331a34a42adc!2sFogedg%C3%A5rdsvej+14,+4760+Vordingborg!3b1!8m2!3d55.0796101!4d11.8850777!3m4!1s0x4652c88666b8f989:0xb8f45090442f7554!8m2!3d55.0796798!4d11.8848129' target="_blank" rel="noreferrer" title="Åben Google Maps">
          <li className='text-blue-600 text-md pt-4 font-semibold cursor-pointer '>Vis på Google Maps</li>
        </a>
      
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