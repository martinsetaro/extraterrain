import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='w-full h-[12rem] bg-marino flex text-white pt-3'>
    <div className='w-full font-notoregular p-2 leading-8'>
      <p>Contact: <span className='text-esmeralda font-notobold'>extraterrain</span>@online.com</p>
      <p>Phone: +54 261 7228662</p>
      <ul className="social-media">
        <li><Link href="#" ><i className="fab fa-facebook"></i></Link></li>
        <li><Link href="#" ><i className="fab fa-twitter"></i></Link></li>
        <li><Link href="#" ><i className="fab fa-instagram"></i></Link></li>
      </ul>
    </div>
    <nav className='w-full font-notoregular p-2 leading-8'>
      <ul>
        <li><Link href="#">Services</Link></li>
        <li><Link href="#">About Us</Link></li>
        <li><Link href="#">Contact</Link></li>
        <li><Link href="#">Frequent questions</Link></li>
        <li><Link href="#">Team work</Link></li>
      </ul>
    </nav>
    <div className="w-full font-notoregular p-2 leading-8">
    <p>&copy; 2023 <span className='text-esmeralda font-notobold'>ExtraTerrain</span>. Todos los derechos reservados.</p>
    <ul>
      <li><a href="#">Privacy policy</a></li>
      <li><a href="#">Terms of use</a></li>
      <li><a href="#">Cookie Policy</a></li>
    </ul>
  </div>
  

 </div>
  
  )
}
