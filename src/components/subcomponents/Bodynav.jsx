import React from 'react'
import { BsSearch } from 'react-icons/bs'
export default function Bodynav() {
    return (
        <nav className='flex fixed  z-20'>
            <div className=' p-2 px-8 mr-5 bg-gray-200 flex justify-between w-[78vw]      '>

                <div className='w-[40%]'>
                    <div className='relative'>
                        <input type="text" name="" id="" className='  w-[100%] border-[2px] rounded-lg py-1 px-3 ' placeholder='Search with CHAT GPT' />
                        <BsSearch className='absolute top-2 right-3 text-xl cursor-pointer' />
                    </div>

                </div>
                <ul className='flex' >
                    <div className='flex space-x-2 mr-auto'>
                        <a href="#"><li className='text-sm border px-5 py-1  bg-slate-100 hover:bg-slate-200 rounded-3xl text-sky-500 font-bold flex items-center'><img src='./images/hot.png' className='h-4 mr-1' />Hot</li></a>
                        <a href="#"><li className='text-sm border px-5 py-1  bg-slate-100 hover:bg-slate-200 rounded-3xl text-sky-500 font-bold flex items-center' ><img src='./images/down-arrow.png' className='h-4 mr-1' />India</li></a>
                        <a href="#"><li className='text-sm border px-5 py-1  bg-slate-100 hover:bg-slate-200 rounded-3xl font-bold flex items-center'><img src='./images/star.png' className='h-4 mr-1' />New</li></a>
                        <a href="#"><li className='text-sm border px-5 py-1  bg-slate-100 hover:bg-slate-200 rounded-3xl font-bold flex items-center mr-auto'><img src='./images/top.png' className='h-4 mr-1' />Top</li ></a>
                        {/* <a href="#"><li className='text-sm border px-5 py-1  bg-slate-100 hover:bg-slate-200 rounded-3xl font-bold flex items-center'><img src="./images/grid.png" className='h-5 w-5' /><img src="./images/down.png" className='h-4' /></li ></a> */}
                    </div>
                </ul >
            </div >



        </nav >
    )
}
