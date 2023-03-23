import React, { useState } from 'react'
import Navbar from './Navbar';
import Main from './Main';
import Learn from './Learn';
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import Home from './Home';
import learnLand from './subcomponents/Learnland';


export default function Sidenav() {
    const [open, setOpen] = useState(true)
    const [learn, setLearn] = useState(true)
    const [home, setHome] = useState(true)
    const [col, setCol] = useState(false)
    const [res, setRes] = useState(false)
    const [ler, setLer] = useState(false)


    return (
        <section className='flex font-noto ' >
            <div className={`${open ? 'h-[100vh]' : 'h-[100vh]'} px-5 flex-row  overflow-y-auto fixed overflow-x-hidden bg-gray-100 pt-2`}>
                <div className='h-[80vh]'>
                    <div className='flex items-center space-x-5 pt-1'>
                        <img src="/images/logo2.png" alt="" className='h-7 cursor-pointer' />
                        <div onClick={() => { setLearn(!learn) }} className='text-3xl w-min cursor-pointer'>
                            {learn ? <BsToggleOff /> : <BsToggleOn />}
                        </div>
                    </div>
                    <div className='relative'>

                        <div className={`${learn ? '-translate-x-0' : '-translate-x-[250px]'} duration-500 pt-5`}>
                            <ul className={`${open ? 'w-[15vw]' : 'w-[2vw]'} ${open ? 'min-w-[15vw]' : 'min-w-[2vw]'} duration-300`} >
                                <a href="#" className={``}><li className={`flex items-center h-12 text-md  hover:underline`} onClick={() => { setCol(false), setRes(false), setLer(false) }}> <img src="/images/home.png" alt="" className='h-5 w-5 mr-2' /> <p className={` ${open ? '-translate-x-0' : 'translate-x-[250px]'} duration-1000`}>{open ? 'Home' : ''}</p></li></a>
                                <a href="#" className={``}><li className={`flex items-center h-12 text-md  hover:underline`} onClick={() => { setCol(true), setRes(false), setLer(false) }}> <img src="/images/trend.png" alt="" className='h-5 w-5 mr-2' /> <p className={` ${open ? '-translate-x-0' : 'translate-x-[250px]'} duration-1000`}>{open ? 'Colleges' : ''}</p></li></a>
                                <a href="#" className={``}><li className={`flex items-center h-12 text-md  hover:underline`} onClick={() => { setRes(true), setLer(false), setCol(false) }}> <img src="/images/learn.png" alt="" className='h-5 w-5 mr-2' /> <p className={` ${open ? '-translate-x-0' : 'translate-x-[250px]'} duration-1000`}>{open ? 'Resources' : ''}</p></li></a>
                                <a href="#" className={``}><li className={`flex items-center h-12 text-md  hover:underline`} onClick={() => { setLer(true), setCol(false, setRes(false)) }}> <img src="/images/messaging.png" alt="" className='h-5 w-5 mr-2' /> <p className={` ${open ? '-translate-x-0' : 'translate-x-[250px]'} duration-1000`}>{open ? 'Learn' : ''}</p></li></a>
                                {/* <a href="#" className={``}><li className={`flex items-center h-12 text-md  hover:underline`}> <img src="/images/premium.png" alt="" className='h-5 w-5 mr-2' /> <p className={` ${open ? '-translate-x-0' : 'translate-x-[250px]'} duration-1000`}>{open ? '' : ''}</p></li></a> */}
                                <a href="#" className={``}><li className={`flex items-center h-12 text-md  hover:underline`}> <img src="/images/setting.png" alt="" className='h-5 w-5 mr-2' /> <p className={` ${open ? '-translate-x-0' : 'translate-x-[250px]'} duration-1000`}>{open ? 'Settings' : ''}</p></li></a>
                            </ul>

                        </div>

                        <div className={`${learn ? 'translate-x-[350px]' : 'translate-x-0'} duration-500 absolute top-0 pt-5`}>
                            <ul className={`${open ? 'w-[15vw]' : 'w-[2vw]'} ${open ? 'min-w-[15vw]' : 'min-w-[2vw]'} duration-300`} >
                                <a href="#" className={``}><li className={`flex items-center h-12 text-md  hover:underline`}> <img src="/images/home.png" alt="" className='h-5 w-5 mr-2' /> <p className={` ${open ? '-translate-x-0' : 'translate-x-[250px]'} duration-1000`}>{open ? 'Home' : ''}</p></li></a>
                                <a href="#" className={``}><li className={`flex items-center h-12 text-md  hover:underline`}> <img src="/images/trend.png" alt="" className='h-5 w-5 mr-2' /> <p className={` ${open ? '-translate-x-0' : 'translate-x-[250px]'} duration-1000`}>{open ? 'Trending' : ''}</p></li></a>
                                {/* <a href="#" className={``}><li className={`flex items-center h-12 text-md  hover:underline`}> <img src="/images/learn.png" alt="" className='h-5 w-5 mr-2' /> <p className={` ${open ? '-translate-x-0' : 'translate-x-[250px]'} duration-1000`}>{open ? 'Learn' : ''}</p></li></a> */}
                                <a href="#" className={``}><li className={`flex items-center h-12 text-md  hover:underline`}> <img src="/images/messaging.png" alt="" className='h-5 w-5 mr-2' /> <p className={` ${open ? '-translate-x-0' : 'translate-x-[250px]'} duration-1000`}>{open ? 'Messaging' : ''}</p></li></a>
                                <a href="#" className={``}><li className={`flex items-center h-12 text-md  hover:underline`}> <img src="/images/premium.png" alt="" className='h-5 w-5 mr-2' /> <p className={` ${open ? '-translate-x-0' : 'translate-x-[250px]'} duration-1000`}>{open ? 'Connections' : ''}</p></li></a>
                                <a href="#" className={``}><li className={`flex items-center h-12 text-md  hover:underline`}> <img src="/images/setting.png" alt="" className='h-5 w-5 mr-2' /> <p className={` ${open ? '-translate-x-0' : 'translate-x-[250px]'} duration-1000`}>{open ? 'Settings' : ''}</p></li></a>
                            </ul>

                        </div>
                    </div>

                </div>

                <div className={`flex-row  space-y-2 ${open ? 'opacity-100 -translate-x-0' : 'opacity-100 -translate-x-[250px]'} duration-1000`}>
                    <div >
                        <a href="" className={`flex items-center justify-center bg-green-500 text-white py-2 hover:font-semibold hover:bg-green-600 `}>{open ? 'Login' : '#'}</a>
                    </div>
                    <div>
                        <a href="" className={`flex items-center justify-center bg-blue-500 py-2 text-white hover:font-semibold hover:bg-blue-700 `}>{open ? 'Join WePeek' : '#'}</a>
                    </div>
                </div>
            </div>
            {learn ? <Learn college={col} res={res} ler={ler} /> : <Main />}

        </section >)
}




