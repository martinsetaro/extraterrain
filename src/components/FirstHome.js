'use client'
import React, { useEffect , useState } from 'react'
import Image from 'next/image'
import navegationweb from '../../public/img/web.png';
import movilweb from '../../public/img/movilepage.webp'
import AOS from 'aos';
import 'aos/dist/aos.css'

export default function FirstHome() {

    const [load,setLoad] = useState(false)


    useEffect(()=>{
        AOS.init();

        window.addEventListener('scroll',()=>{
            const posicionObjetivo = 500; // Define la posición vertical del elemento objetivo en píxeles

            if (window.scrollY >= posicionObjetivo) {
            setTimeout(()=>{
            setLoad(true)
        },4000)

            }

        })

        
    },[])


  return (
    <div className='w-full h-[60rem] flex'>

        <div className='flex justify-center items-center w-full'>
            {load ? <Image data-aos="flip-left" data-aos-easing="linear"
            data-aos-duration="500" src={movilweb} alt="movilweb" width={700} height={800}/> : <Image data-aos="flip-left" data-aos-easing="linear"
            data-aos-duration="500" src={navegationweb} alt="movilweb" width={700} height={800}/> }
        </div>
        {!load ? <div className='w-full flex justify-center item-center flex-col'>
            <h2 className='font-changa text-esmeralda' data-aos="fade-down">Your personal homepage</h2>
            <p className='text-2xl font-notomedium text-gris' data-aos="fade-up">You can make your e-commerce real , blog, ideas</p>
        </div> :
        <div className='w-full flex justify-center item-center flex-col'>
            <h2 className='font-changa text-esmeralda' data-aos="fade-down">Media and responsive web development</h2>
            <p className='text-2xl font-notomedium text-gris' data-aos="fade-up">Stands out from the rest</p>
        </div>  }
      
    </div>
  )
}
