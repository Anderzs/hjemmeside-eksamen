import React from 'react'
import Head from 'next/head'
import {AiOutlineFieldTime} from 'react-icons/ai';
import {BsPeople} from 'react-icons/bs';


export default function food() {
  return (
    <>
      <Head>
        <title>De forenede kålavlere</title>
        <link rel="icon" href="/cabbage.png" />
      </Head>
      <div className='w-full my-40 h-auto flex flex-col justify-center items-center md:flex md:items-center md:justify-between'>
      <p className='text-sm uppercase text-gray-400'>I samarbejde med <a className='text-[#2B21BA] cursor-pointer' target='_blank' rel='noreferrer' href='http://www.svinningegaard.dk'>svinningegaard</a></p>
      <h1 className='text-[#41a950] text-6xl font-bold text-center'>Månedens nemme og lækre retter med kål</h1>
      <p className='text-gray-700 text-base pt-5 uppercase'>Følg med løbende når <span className='text-[#2B21BA] uppercase'>svinningegaard</span> månedligt opdaterer deres lækre retter</p>
      <div className='flex justify-items-start items-center mx-40 gap-10 mt-20'>
        <div className='flex flex-col justify-center'>
          {/* First Block - Pizza */}
          <a href='http://www.svinningegaard.dk/nem-mad/pizzabund-med-blomkaal/' target='_blank' rel='noreferrer'><img src='pizza.jpeg' className='w-3/5 h-3/5 m-3 p-1 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer block ml-auto mr-auto' /></a>
          <div className='flex justify-center items-center'>
          <a href='http://www.svinningegaard.dk/nem-mad/pizzabund-med-blomkaal/' target='_blank' rel='noreferrer'><h2 className='text-[#41a950] font-semibold text-lg text-center break-words hover:text-[#2B21BA] cursor-pointer transition-all ease-in duration-250'>Pizza med blomkålsbund, pesto, mozarella, tomat, skinke, cocktailpølser og ananas</h2></a>
          </div>
          <div>
            <ul className=' px-28 pt-3'>
            <li><svg className="w-8 h-8 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap='round' strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg><span className='pl-1 text-lg'>Personer: 3-4</span></li>
              <li><svg className="w-8 h-8 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap='round' strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span className='pl-1 text-lg'>Tid: 40 minutter</span></li>
            </ul>
          </div>
          
        </div>
        <div className='flex flex-col justify-center'>
          {/* Second Block - Burger */}
          <a href='http://www.svinningegaard.dk/nem-mad/nem-burger-coleslaw-salatkaal/' rel='noreferrer' target='_blank'><img src='burger.jpeg' className='w-3/5 h-3/5 m-3 p-1 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer block ml-auto mr-auto' /></a>
          <div className='flex justify-center items-center'>
          <a href='http://www.svinningegaard.dk/nem-mad/nem-burger-coleslaw-salatkaal/' rel='noreferrer' target='_blank'><h2 className='text-[#41a950] font-semibold text-lg text-center break-words hover:text-[#2B21BA] cursor-pointer transition-all ease-in duration-250'>Nem burger med coleslaw af salatkål eller spidskål</h2></a>
          </div>
          <div>
            <ul className=' px-28 pt-3'>
            <li><svg className="w-8 h-8 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg><span className='pl-1 text-lg'>Personer: 4</span></li>
              <li><svg className="w-8 h-8 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span className='pl-1 text-lg'>Tid: 15 minutter</span></li>
            </ul>
          </div>
        </div>        
      </div>
      <div className='flex justify-items-start items-center mx-40 gap-10 mt-20'>
        <div className='flex flex-col justify-center'>
            {/* Third Block - Smoothie */}
            <a href='http://www.svinningegaard.dk/nem-mad/nem-smoothie-spidskaal-mango/' rel='noreferrer' target='_blank'><img src='smoothie.jpeg' className='w-3/5 h-3/5 m-3 p-1 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer block ml-auto mr-auto' /></a>
            <div className='flex justify-center items-center'>
            <a href='http://www.svinningegaard.dk/nem-mad/nem-smoothie-spidskaal-mango/' rel='noreferrer' target='_blank'><h2 className='text-[#41a950] font-semibold text-lg text-center break-words hover:text-[#2B21BA] cursor-pointer transition-all ease-in duration-250'>Smoothie med spidskål & mango</h2></a>
            </div>
            <div>
            <ul className=' px-28 pt-3'>
            <li><svg className="w-8 h-8 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg><span className='pl-1 text-lg'>Personer: 2</span></li>
              <li><svg className="w-8 h-8 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span className='pl-1 text-lg'>Tid: 10 minutter</span></li>
            </ul>
          </div>
          </div>
          <div className='flex flex-col justify-center'>
            {/* Third Block - Smoothie */}
            <a href='http://www.svinningegaard.dk/nem-mad/blomkaal-i-ovnen-med-ost-parmaskinke/' rel='noreferrer' target='_blank'><img src='blomkål.jpeg' className='w-3/5 h-3/5 m-3 p-1 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer block ml-auto mr-auto' /></a>
            <div className='flex justify-center items-center'>
            <a href='http://www.svinningegaard.dk/nem-mad/blomkaal-i-ovnen-med-ost-parmaskinke/' rel='noreferrer' target='_blank'><h2 className='text-[#41a950] font-semibold text-lg text-center break-words hover:text-[#2B21BA] cursor-pointer transition-all ease-in duration-250'>Blomkål i ovnen med Ost & Parmaskinke</h2></a>
            </div>
            <div>
            <ul className=' px-28 pt-3'>
            <li><svg className="w-8 h-8 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg><span className='pl-1 text-lg'>Personer: 4</span></li>
              <li><svg className="w-8 h-8 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span className='pl-1 text-lg'>Tid: 20 minutter</span></li>
            </ul>
          </div>
          </div>
        </div>
        <div className='flex justify-items-start items-center mx-40 gap-10 mt-20'>
        <div className='flex flex-col justify-center'>
            {/* Third Block - Smoothie */}
            <a href='http://www.svinningegaard.dk/nem-mad/wok-med-kaal-kylling-soed-mango-chutney/' rel='noreferrer' target='_blank'><img src='wok.jpeg' className='w-3/5 h-3/5 m-3 p-1 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer block ml-auto mr-auto' /></a>
            <div className='flex justify-center items-center'>
            <a href='http://www.svinningegaard.dk/nem-mad/wok-med-kaal-kylling-soed-mango-chutney/' rel='noreferrer' target='_blank'><h2 className='text-[#41a950] font-semibold text-lg text-center break-words hover:text-[#2B21BA] cursor-pointer transition-all ease-in duration-250'>Wok med Kål, Kylling og Sød Mango Chutney</h2></a>
            </div>
            <div>
            <ul className=' px-28 pt-3'>
            <li><svg className="w-8 h-8 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg><span className='pl-1 text-lg'>Personer: 4</span></li>
              <li><svg className="w-8 h-8 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span className='pl-1 text-lg'>Tid: 25 minutter</span></li>
            </ul>
          </div>
          </div>
          <div className='flex flex-col justify-center'>
            {/* Third Block - Smoothie */}
            <a href='http://www.svinningegaard.dk/nem-mad/pastasalat-kylling-spidskaal-paprika-dressing/' target='_blank' rel='noreferrer' title="Pastasalat"><img src='pastasalat.jpeg' className='w-3/5 h-3/5 m-3 p-1 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer block ml-auto mr-auto' /></a>
            <div className='flex justify-center items-center'>
            <a href='http://www.svinningegaard.dk/nem-mad/pastasalat-kylling-spidskaal-paprika-dressing/' target='_blank' rel='noreferrer' title="Pastasalat"><h2 className='text-[#41a950] font-semibold text-lg text-center break-words hover:text-[#2B21BA] cursor-pointer transition-all ease-in duration-250'>Pastasalat med spidskål, kylling & paprika dressing</h2></a>
            </div>
            <div>
            <ul className=' px-28 pt-3'>
            <li><svg className="w-8 h-8 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg><span className='pl-1 text-lg'>Personer: 4</span></li>
              <li><svg className="w-8 h-8 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span className='pl-1 text-lg'>Tid: 30 minutter</span></li>
            </ul>
          </div>
          </div>
        </div>
    </div>
    
    </>
  )
}
