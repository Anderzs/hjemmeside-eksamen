import React from 'react'

export default function Navbar() {
  return (
    <div class="bg-cyan-400">
    <nav class="p-5 bg-white shadow md:flex md:items-center md:justify-between">
      <div class="flex justify-between items-center ">
        <span class="text-2xl font-[Poppins] cursor-pointer">
        <a href="/"><img className="h-10 inline hover:scale-125"
            src="Billede1.png" /></a>
        </span>
  
        <span class="text-3xl cursor-pointer mx-2 md:hidden block">
        <ion-icon name="menu" onclick="Menu(this)"></ion-icon>
        </span>
      </div>
  
      <ul class="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
        <li class="mx-4 my-6 md:my-0 ">
          <a href="/" class="text-xl hover:text-cyan-500 duration-500 transition delay-150 duration-300 ease-in-out">Hjem</a>
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a href="/about" class="text-xl hover:text-cyan-500 duration-500">Om os</a>
        </li>
        <li class="mx-4 my-6 md:my-0">
          <a href="#" class="text-xl hover:text-cyan-500 duration-500">Kontakt</a>
        </li>
        </ul>
    </nav>
    </div>
  )
}
