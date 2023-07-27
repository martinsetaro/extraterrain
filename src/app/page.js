'use client'
import React , { useEffect } from 'react';
import logohome from '../../public/img/logohome.png';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css'


const Home = () => {

useEffect(()=>{

  AOS.init();


},[])

  return (
    <div className='w-full h-[40rem] bg-marino flex justify-around'>
      <div className='w-1/2 text-white font-notomedium flex flex-col justify-center items-center'>
        <h2 className='text-center uppercase text-6xl' data-aos="flip-left" data-aos-duration="3000">Transforming Ideas</h2>
        <h3 className='text-center mt-3' data-aos="flip-left" data-aos-duration="4500">into Digital Reality</h3>
        <p className='text-sm text-center font-notoregular mt-3' data-aos="flip-left" data-aos-duration="6000">Our approach is to create web solutions and applications tailored to your needs. We work hand in hand with you to understand your objectives and provide you with a personalized service that highlights your brand and provides an exceptional experience to your users.</p>
      </div>
      <div className='w-1/2 flex justify-center items-center'>
        <Image data-aos="fade-right" src={logohome} alt="logohome" width={400} height={400}/>
      </div>
     
    </div>
  )
}

export default Home
