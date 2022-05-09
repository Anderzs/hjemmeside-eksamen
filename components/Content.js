import React from 'react'
import {HiColorSwatch} from 'react-icons/hi';
import {GiCabbage, GiBodyBalance } from 'react-icons/gi';
import {RiHeartPulseFill} from 'react-icons/ri';


export default function Content() {
  return (
    <div>
      <div className='w-full my-40 h-auto flex flex-col justify-center items-center'>
      <p className='text-sm uppercase text-gray-400'><a className='text-[#2B21BA] cursor-pointer' target='_blank' rel='noreferrer' href='http://www.svinningegaard.dk'>svinningegaard</a> præsenterer</p>
      <h1 className='text-[#41a950] text-6xl font-bold text-center'>Gode grunde til at spise kål</h1>

      <div className='flex justify-items-start items-center mx-40 gap-10 mt-20'>
        <div className='flex flex-col justify-center items-center'>
          {/* First Block */}
          <div className='flex justify-center items-center'>
            <GiCabbage className='w-10 h-10 text-[#41a950] m-3 p-1 rounded-md shadow-xl' />
            <h2 className='text-xl text-imdigo-600 font-semibold'>Forebygger kræft</h2>
          </div>
          <p className='md:text-base text-gray-400 md-text-center sm:text-left sm:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin arcu tellus, a ornare arcu sagittis vitae. Sed dignissim nibh varius augue scelerisque, a iaculis turpis ultrices. Mauris vel efficitur eros, non ornare diam. Sed vel fermentum justo. Praesent iaculis tincidunt blandit. Pellentesque a urna tempor, rutrum nunc tincidunt, rhoncus ligula. Vestibulum placerat pretium finibus. Aliquam congue fermentum lectus, sit amet porttitor magna dignissim et. Nulla finibus urna est, sit amet vehicula tellus aliquet et. Vivamus ut metus orci. In luctus tempus massa, quis auctor eros scelerisque sit amet. Pellentesque viverra diam pharetra, viverra nibh eget, volutpat risus. Quisque ac leo non ex consectetur dapibus. Maecenas pharetra sit amet lorem nec lacinia. Donec at pretium augue, vel tempus nulla.</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          {/* Second Block */}
          <div className='flex justify-center items-center'>
            <GiBodyBalance className='w-10 h-10 text-[#41a950] m-3 p-1 shadow-xl rounded-md' />
            <h2 className='text-xl text-imdigo-600 font-semibold'>Forebygger kræft</h2>
          </div>
          <p className='md:text-base text-gray-400 md-text-center sm:text-left sm:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin arcu tellus, a ornare arcu sagittis vitae. Sed dignissim nibh varius augue scelerisque, a iaculis turpis ultrices. Mauris vel efficitur eros, non ornare diam. Sed vel fermentum justo. Praesent iaculis tincidunt blandit. Pellentesque a urna tempor, rutrum nunc tincidunt, rhoncus ligula. Vestibulum placerat pretium finibus. Aliquam congue fermentum lectus, sit amet porttitor magna dignissim et. Nulla finibus urna est, sit amet vehicula tellus aliquet et. Vivamus ut metus orci. In luctus tempus massa, quis auctor eros scelerisque sit amet. Pellentesque viverra diam pharetra, viverra nibh eget, volutpat risus. Quisque ac leo non ex consectetur dapibus. Maecenas pharetra sit amet lorem nec lacinia. Donec at pretium augue, vel tempus nulla.</p>
        </div>
        
      </div>
      <div className='flex justify-items-start items-center mx-40 gap-10 mt-20'>
        <div className='flex flex-col justify-center items-center'>
          {/* First Block */}
          <div className='flex justify-center items-center'>
            <RiHeartPulseFill className='w-10 h-10 text-[#41a950] m-3 p-1 rounded-md shadow-xl' />
            <h2 className='text-xl text-imdigo-600 font-semibold'>Forebygger kræft</h2>
          </div>
          <p className='md:text-base text-gray-400 md-text-center sm:text-left sm:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin arcu tellus, a ornare arcu sagittis vitae. Sed dignissim nibh varius augue scelerisque, a iaculis turpis ultrices. Mauris vel efficitur eros, non ornare diam. Sed vel fermentum justo. Praesent iaculis tincidunt blandit. Pellentesque a urna tempor, rutrum nunc tincidunt, rhoncus ligula. Vestibulum placerat pretium finibus. Aliquam congue fermentum lectus, sit amet porttitor magna dignissim et. Nulla finibus urna est, sit amet vehicula tellus aliquet et. Vivamus ut metus orci. In luctus tempus massa, quis auctor eros scelerisque sit amet. Pellentesque viverra diam pharetra, viverra nibh eget, volutpat risus. Quisque ac leo non ex consectetur dapibus. Maecenas pharetra sit amet lorem nec lacinia. Donec at pretium augue, vel tempus nulla.</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          {/* Second Block */}
          <div className='flex justify-center items-center'>
            <HiColorSwatch className='w-10 h-10 bg-blue-600 text-green-100 m-3 p-1 shadow-xl rounded-md' />
            <h2 className='text-xl text-imdigo-600 font-semibold'>Forebygger kræft</h2>
          </div>
          <p className='md:text-base text-gray-400 md-text-center sm:text-left sm:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin arcu tellus, a ornare arcu sagittis vitae. Sed dignissim nibh varius augue scelerisque, a iaculis turpis ultrices. Mauris vel efficitur eros, non ornare diam. Sed vel fermentum justo. Praesent iaculis tincidunt blandit. Pellentesque a urna tempor, rutrum nunc tincidunt, rhoncus ligula. Vestibulum placerat pretium finibus. Aliquam congue fermentum lectus, sit amet porttitor magna dignissim et. Nulla finibus urna est, sit amet vehicula tellus aliquet et. Vivamus ut metus orci. In luctus tempus massa, quis auctor eros scelerisque sit amet. Pellentesque viverra diam pharetra, viverra nibh eget, volutpat risus. Quisque ac leo non ex consectetur dapibus. Maecenas pharetra sit amet lorem nec lacinia. Donec at pretium augue, vel tempus nulla.</p>
        </div>
        
      </div>
    </div>
    <div className='my-40 h-auto border-double flex'>
      <div className='w-1/2 h-auto border-double my-auto mx-auto items-center text-center float-left inline'>
        <h3 className='text-4xl text-[#41a950] font-bold'>Lækre retter med kål</h3>
        <p className='text-sm text-gray-400'>Tryk <span className='text-[#2B21BA]'>her</span> for at se udvalget af lækre retter</p>
      </div>
      {/* border-black border-4 */}
      <div className='w-1/2 h-auto border-double  float-right inline overflow-hidden'>
      <div className='flex flex-col justify-center'>
          <div className='border-black border-4 flex'>
          <div className='border-black border-4'>
          {/* First Block - Pizza */}
          <h3 className='text-2xl text-[#41a950] font-bold text-center py-2'>Pizza med blomkålsbund</h3>
          <a href='http://www.svinningegaard.dk/nem-mad/pizzabund-med-blomkaal/' target='_blank' rel='noreferrer'><img src='pizza.jpeg' className='w-auto h-auto m-3 p-2 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer block ml-auto mr-auto' /></a>
          <div className='flex justify-center items-center'>
          <a href='http://www.svinningegaard.dk/nem-mad/pizzabund-med-blomkaal/' target='_blank' rel='noreferrer'><h2 className='font-semibold text-lg text-center break-words hover:text-[#2B21BA] cursor-pointer transition-all ease-in duration-250 px-3 py-2 '>Pizza med blomkålsbund, pesto, mozarella, tomat, skinke, cocktailpølser og ananas</h2></a>
          </div>
          </div>
          <div className='border-black border-4'>
          {/* First Block - Pizza */}
          <h3 className='text-2xl text-[#41a950] font-bold text-center py-2'>Pizza med blomkålsbund</h3>
          <a href='http://www.svinningegaard.dk/nem-mad/pizzabund-med-blomkaal/' target='_blank' rel='noreferrer'><img src='pizza.jpeg' className='w-auto h-auto m-3 p-2 shadow-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer block ml-auto mr-auto' /></a>
          <div className='flex justify-center items-center'>
          <a href='http://www.svinningegaard.dk/nem-mad/pizzabund-med-blomkaal/' target='_blank' rel='noreferrer'><h2 className='font-semibold text-lg text-center break-words hover:text-[#2B21BA] cursor-pointer transition-all ease-in duration-250 px-3 py-2 '>Pizza med blomkålsbund, pesto, mozarella, tomat, skinke, cocktailpølser og ananas</h2></a>
          </div>
          </div>
          </div>

          
        </div>
      </div>
    </div>

  </div>

  )
}
