import React from 'react'
import {HiColorSwatch} from 'react-icons/hi';
import {GiCabbage, GiBodyBalance } from 'react-icons/gi';
import {RiHeartPulseFill} from 'react-icons/ri';


export default function Content() {
  return (
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
  

  )
}
