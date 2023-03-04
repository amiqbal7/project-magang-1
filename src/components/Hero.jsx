import React from 'react'
import { useSpring, animated } from "react-spring";
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'

import bgImg from '../assets/cek.png'

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
    <div name='home' className='bg-zinc-200 pt-20 md:pt-0'>
        <div className='grid md:grid-cols-2 max-w-7xl md:mx-auto mx-5'>
            <div className='flex flex-col justify-center sm:items- w-full px-2 py-8'>
                <h1 className='py-3 text-5xl md:text-6xl font-bold text-center md:text-left'>Perhimpunan Ahli Kesehatan Kerja Indonesia</h1>
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
        </div>
    </div>
  )
}

export default Hero