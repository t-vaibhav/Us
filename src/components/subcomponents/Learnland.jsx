import React from 'react'

export default function Learnland() {
    const mystyle = {
        backgroundImage: 'url("/images/dora.png")',
    }
    return (
        <section>
            <h1 className='text-3xl pb-5 font-bold'>SELECT YOUR INTERESET!</h1>
            <div className='grid grid-cols-5 gap-5 overflow-y-auto'>


                <div style={mystyle} className='h-[40vh] justify-center flex bg-no-repeat bg-cover bg-center relative hover:scale-95 ease-in-out duration-300 shadow-2xl pt-5 cursor-pointer'>
                    <h2 className='text-lg w-full absolute bottom-2 bg-black/80 text-white py-1 px-1 text-center  rounded-md'>PROMGRAMMING</h2>
                </div>
                <div style={mystyle} className='h-[40vh] justify-center flex bg-no-repeat bg-cover bg-center relative hover:scale-95 ease-in-out duration-300 shadow-2xl pt-5 cursor-pointer'>
                    <h2 className='text-lg w-full absolute bottom-2 bg-black/80 text-white py-1 px-1 text-center  rounded-md'>VIDEO EDITING</h2>
                </div>
                <div style={mystyle} className='h-[40vh] justify-center flex bg-no-repeat bg-cover bg-center relative hover:scale-95 ease-in-out duration-300 shadow-2xl pt-5 cursor-pointer'>
                    <h2 className='text-lg w-full absolute bottom-2 bg-black/80 text-white py-1 px-1 text-center  rounded-md'>DESIGNING</h2>
                </div>
                <div style={mystyle} className='h-[40vh] justify-center flex bg-no-repeat bg-cover bg-center relative hover:scale-95 ease-in-out duration-300 shadow-2xl pt-5 cursor-pointer'>
                    <h2 className='text-lg w-full absolute bottom-2 bg-black/80 text-white py-1 px-1 text-center  rounded-md'>CONTENT WRITING</h2>
                </div>
                <div style={mystyle} className='h-[40vh] justify-center flex bg-no-repeat bg-cover bg-center relative hover:scale-95 ease-in-out duration-300 shadow-2xl pt-5 cursor-pointer'>
                    <h2 className='text-lg w-full absolute bottom-2 bg-black/80 text-white py-1 px-1 text-center  rounded-md'>VIDEO EDITING</h2>
                </div>


            </div>

        </section>
    )
}
