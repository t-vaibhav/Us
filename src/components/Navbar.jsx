import React, { useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import './navbar.css'
import { FaUserAlt } from "react-icons/fa";
import Main from './Main'


export default function Navbar() {
    return (
        <section className="w-full">

            <nav className=" flex items-center justify-between right-0  h-16 w-full bg-blue-300 text-white font-bold fixed ">
                <div className=" content-start  w-1/3 cursor-pointer">
                    <div className=' pl-5'>

                    </div>
                </div>


                <div className="login-area content-end justify-end flex mr-7 w-1/3 ">
                    <button className=" px-4 py-1 mx-2 border-2 bg-blue-500  border-blue-500 hover:bg-blue-700 shadow-xl rounded-2xl font-bold">Sign Up</button>
                    <button className=" px-4 py-1 mx-2 border-2 bg-blue-500  border-blue-500 hover:bg-blue-700 shadow-xl rounded-2xl font-bold">Login</button>
                    <button className=" px-4 py-1 mx-2 border-2 bg-blue-500  border-blue-500 hover:bg-blue-700 shadow-xl rounded-2xl font-bold"><FaUserAlt /></button>
                </div>
            </nav >
            <Main className='' />
        </section>
    )
}