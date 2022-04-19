import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="bg-cyan-400">
    <nav className="p-5 bg-gray-50 shadow md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center ">
        <span className="text-2xl font-[Poppins] cursor-pointer">
        <Link href="/">
            <img className="h-10 inline hover:scale-125"
            src="Billede1.png" />
        </Link>
        </span>
  
        <span className="text-3xl cursor-pointer mx-2 md:hidden block">
        <ion-icon name="menu" onclick="Menu(this)"></ion-icon>
        </span>
      </div>
  
      <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
        <li className="mx-4 my-6 md:my-0 ">
            <Link href="/">
                <p className="font-bold text-xl hover:text-[#2B21BA] duration-500 cursor-pointer">Hjem</p>
            </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
            <Link href="/about">
                <p className="font-bold text-xl hover:text-[#2B21BA] duration-500 cursor-pointer">Om os</p>
            </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
            <Link href="/contact">
                <p className="font-bold text-xl hover:text-[#2B21BA] duration-500 cursor-pointer">Kontakt</p>
            </Link>
        </li>
        </ul>
    </nav>
    </div>
  )
}
