import React from 'react';
import Image from 'next/image';
import logo from '../../public/img/logo.png';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='w-full h-[6rem] bg-marino flex '>
      <div className='w-1/2 flex ml-8 p-4'>
        <Image src={logo} alt="logo" width={90} height={90}/>
      </div>
      <nav className='w-1/2 text-white flex gap-8 font-notoregular items-center justify-end mr-[10rem] text-2xl'> 
        <Link className="hover:text-esmeralda " href="#">Home</Link>
        <Link className="hover:text-esmeralda " href="#">About Us</Link>
        <Link className="hover:text-esmeralda " href="#">Projects</Link>
        <Link className="hover:text-esmeralda " href="#">Contact</Link>
      </nav>
    </div>
  )
}
