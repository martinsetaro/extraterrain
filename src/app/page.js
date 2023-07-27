'use client'
import React , { useEffect } from 'react';
import logohome from '../../public/img/logohome.png';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css'
import FirstHome from '@/components/FirstHome';
import '../app/globals.css'


const Home = () => {

useEffect(()=>{

  AOS.init();


},[])

  return (
    <div className='w-full h-auto'> 
    <div className='w-full h-[55rem] bg-marino flex justify-around'>
      <div className='w-1/2 text-white flex flex-col justify-center items-center p-4'>
        <h2 className='text-center uppercase text-7xl font-changa' data-aos="flip-left" data-aos-duration="1000">Transforming Ideas</h2>
        <h3 className='text-center mt-3 font-notoregular' data-aos="flip-left" data-aos-duration="2000">into Digital Reality</h3>
        <p className='text-sm text-center font-notoregular mt-3' data-aos="flip-left" data-aos-duration="3000">Our approach is to create web solutions and applications tailored to your needs. We work hand in hand with you to understand your objectives and provide you with a personalized service that highlights your brand and provides an exceptional experience to your users.</p>
      </div>
      <div className='w-1/2 flex justify-center items-center'>
        <Image data-aos="fade-right" data-aos-duration="2000" data-aos-easing="ease-out-cubic" src={logohome} alt="logohome" width={600} height={600} className='animationFloat'/>
      </div>
     
    </div>
    <FirstHome/>
    </div>
  )
}

export default Home
