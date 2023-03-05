import React from 'react'
import { useSpring, animated } from "react-spring";
import { motion } from "framer-motion";

import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'

import bgImg from '../assets/cek.png'

let easeing = [0.6,-0.05,0.01,0.99];
const stagger = {
  animate:{
    transition:{
      delayChildren:0.4,
      staggerChildren:0.2,
      staggerDirection:1
    }
  }
}
const header={
    initial:{
      y:-60,
      opacity:0,
      transition:{duration:0.05, ease:easeing}
    },
    animate:{
      y:0,
      opacity:1,
      animation:{
        duration:0.6,
        ease:easeing
      }
    }
  };
  const fadeInUp = {
    initial:{
      y:-60,
      opacity:0,
      transition:{
        duration:0.6, ease:easeing
      }
    },
    animate:{
      y:0,
      opacity:1,
      transition:{
        duration:0.6,
        delay:0.5,
        ease:easeing
      }
    }
  };
  
  

function Number ({n}) {
    const {number} = useSpring({
        from : {number : 0}, 
        number : n,
        delay : 500,
        config : {mass: 1, tension: 20, friction: 10 }, 
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
}

const Hero = () => {
  return (
    <motion.div initial='initial' animate='animate' name='home' className='bg-zinc-200 pt-20 md:pt-0'>
        <motion.div variants={fadeInUp} className='grid md:grid-cols-2 max-w-7xl md:mx-auto mx-5'>
            <div className='flex flex-col justify-center sm:items- w-full px-2 py-8'>
                <motion.h1 variants={header} className='py-3 text-5xl md:text-6xl font-bold text-center md:text-left'>Perhimpunan Ahli Kesehatan Kerja Indonesia</motion.h1>
                <div className='grid grid-cols-1 justify-items-center sm:justify-items-start' >
                    <button className='bg-green-500 border-green-500 md: py-3 md:px-16 px-9'>Daftar</button>
                </div>
            </div>
            <div>
                <img className='xl:w-full md:pt-24' src={bgImg} alt="/" />
            </div>
            <div className='grid grid-cols-1 justify-items-center z-10 mt-[-4rem]'>
                <div className='container items-center grid grid-cols-1 md:max-w-6xl absolute py-8
                mx-6 md:left-1/2 transform md:-translate-x-1/2 md:mx-auto bg-zinc-200
                border border-slate-300 rounded-xl text-center shadow-xl'>
                    <div className='flex justify-between flex-wrap mx-3'>
                        <div><p className='pl-6'><CloudUploadIcon className='h-6 text-green-500' /></p><div className='md:text-3xl text-xl font-bold'><Number n={67}/></div><p className='md:px-4 px-2 py- text-slate-500'>Daerah</p></div>
                        <div><p className='pl-7'><CloudUploadIcon className='h-6 text-green-500' /></p><div className='md:text-3xl text-xl font-bold'><Number n={230}/></div><p className='md:px-4 px-2 py- text-slate-500'>Cabang</p></div>
                        <div><p className='pl-6'><CloudUploadIcon className='h-6 text-green-500' /></p><div className='md:text-3xl text-xl font-bold'><Number n={576}/></div><p className='md:px-4 px-2 py- text-slate-500'>Ranting</p></div>
                        <div><p className='pl-7'><CloudUploadIcon className='h-6 text-green-500' /></p><div className='md:text-3xl  text-xl font-bold'><Number n={7089}/></div><p className='md:px-4 px-2 py- text-slate-500'>Anggota</p></div>
                    </div>
                </div>
            </div>
        </motion.div>
    </motion.div>
  )
}

export default Hero