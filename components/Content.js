import React from 'react'
import {HiColorSwatch} from 'react-icons/hi';
import {GiCabbage, GiBodyBalance, GiFarmTractor, GiOpenedFoodCan } from 'react-icons/gi';
import {RiHeartPulseFill} from 'react-icons/ri';
import {BiRun} from 'react-icons/bi';
import Link from 'next/link';


export default function Content() {
  return (
    <div>
      <div className='w-full my-40 h-auto flex flex-col justify-center items-center '>
      <p className='text-sm uppercase text-gray-400'><a className='text-[#2B21BA]'>de forenede kålavlere</a> præsenterer</p>
      <h1 className='text-[#41a950] text-6xl font-bold text-center'>Gode grunde til at spise kål</h1>

      <div className='flex justify-items-start items-center mx-40 gap-10 mt-20'>
        <div className='flex flex-col justify-center items-center'>
          {/* First Block */}
          <div className='flex justify-center items-center'>
            <GiCabbage className='w-10 h-10 text-[#41a950] m-3 p-1 rounded-md shadow-xl' />
            <h2 className='text-xl text-[#2B21BA] font-semibold'>Kål er dejligt mættende</h2>
          </div>
          <p className='md:text-base text-gray-400 md-text-center sm:text-left sm:text-sm'>Kål er en mættende ingrediens til dine måltider. Når man spiser kål, behøver det ikke være den kedelige salat uden smag. Du kan tilføje kål til dine måltider på mange måder, uden du lægger mærke til en forskel! </p>
        </div>
        <div className='flex flex-col justify-center items-center '>
          {/* Second Block */}
          <div className='flex justify-center items-center'>
            <GiFarmTractor className='w-10 h-10 text-[#41a950] m-3 p-1 shadow-xl rounded-md' />
            <h2 className='text-xl text-[#2B21BA] font-semibold'>Et godt økonomisk alternativ</h2>
          </div>
          <p className='md:text-base text-gray-400 md-text-center sm:text-left sm:text-sm'>Kål er et fantastisk økonomisk alternativ til andre fødevarer. Det er det naturlige valg for at passe på din sundhed, ved at undgå fødevarer sprøjtet med syntetiske pesticider og tilsætningsstoffer</p>
        </div>
        
      </div>
      <div className='flex justify-items-start items-center mx-40 gap-10 mt-20'>
        <div className='flex flex-col justify-center items-center'>
          {/* First Block */}
          <div className='flex justify-center items-center'>
            <BiRun className='w-10 h-10 text-[#41a950] m-3 p-1 rounded-md shadow-xl' />
            <h2 className='text-xl text-[#2B21BA] font-semibold'>Skønt til en travl hverdag</h2>
          </div>
          <p className='md:text-base text-gray-400 md-text-center sm:text-left sm:text-sm'>Det er ikke alle der har tid til at forberede et lækkert og sundt måltid, når hverdagens pligter står på. Så er det godt, at kål er en enestående ingrediens, som ikke kræver meget tid i køkkenet, for at lave super simple retter. Se eksempler på lækre retter <span className='text-[#2B21BA] font-semibold' ><Link href='/food'>her</Link> </span></p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          {/* Second Block */}
          <div className='flex justify-center items-center'>
            <GiOpenedFoodCan className='w-10 h-10 text-[#41a950] m-3 p-1 shadow-xl rounded-md' />
            <h2 className='text-xl text-[#2B21BA] font-semibold'>Indeholder vitaminer og næringsstoffer</h2>
          </div>
          <p className='md:text-base text-gray-400 md:text-center sm:text-left sm:text-sm'>Kål er proppet med vitaminer og gode næringsstoffer for kroppen. De forskellige kåltyper har alle deres gode egenskaber for kroppen, så du kan eksperimentere med dem og gøre god nytte af mulighederne</p>
        </div>
        
      </div>
    </div>
    <div className='border-double mx-auto my-auto sm:text-left sm:text-sm border-black pb-32 pt-10'>
      <h1 className='font-bold text-5xl text-center text-[#41a950]'>De forenede kålavlere</h1>
      <h2 className=' text-gray-400 text-xl text-center py-2'>De forenede kålavlere er et samarbejde mellem <span className='text-[#41a950]'>Svinningegaard</span>, <span className='text-[#41a950]'>Månsson</span> og <span className='text-[#41a950]'>Kroghs Grønt</span></h2>
      <div className='flex gap-32 pt-10'>
        <img src='Billede1.png' className='w-[25%] h-[25%] pt-5 px-5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer block ml-auto mr-auto'/>
        <img src='mansson.png' className='w-[30%] h-[30%] px-5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer block ml-auto mr-auto'/>
        <img src='cropped-logo2.jpeg' className='w-[25%] h-[25%] px-5 pl-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer block ml-auto mr-auto'/>
      </div>
    </div>

  </div>

  )
}
