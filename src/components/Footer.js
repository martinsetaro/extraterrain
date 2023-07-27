import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='w-full h-[12rem] bg-marino flex items-center justify-center text-white'>
    <div className='w-full font-notoregular p-4'>
      <p>Contacto: <span className='text-esmeralda font-notobold'>extraterrain</span>@online.com</p>
      <p>Teléfono: +54 261 7228662</p>
      <ul className="social-media">
        <li><Link href="#" ><i className="fab fa-facebook"></i></Link></li>
        <li><Link href="#" ><i className="fab fa-twitter"></i></Link></li>
        <li><Link href="#" ><i className="fab fa-instagram"></i></Link></li>
      </ul>
    </div>
    <nav className='w-full font-notoregular p-4'>
      <ul>
        <li><Link href="#">Inicio</Link></li>
        <li><Link href="#">Servicios</Link></li>
        <li><Link href="#">Acerca de nosotros</Link></li>
        <li><Link href="#">Contacto</Link></li>
        <li><Link href="#">Preguntas frecuentes</Link></li>
        <li><Link href="#">Equipo</Link></li>
      </ul>
    </nav>
    <div className="w-full font-notoregular p-4">
    <p>&copy; 2023 <span className='text-esmeralda font-notobold'>ExtraTerrain</span>. Todos los derechos reservados.</p>
    <ul>
      <li><a href="#">Política de privacidad</a></li>
      <li><a href="#">Términos de uso</a></li>
      <li><a href="#">Política de cookies</a></li>
    </ul>
  </div>
  

 </div>
  
  )
}
