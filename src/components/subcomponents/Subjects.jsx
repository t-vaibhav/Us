import React from 'react'

export default function Subjects() {
    const mystyle = {
        backgroundImage: 'url("/images/dora.png")',
    }

    return (
        <section className=''>
            <h1 className='text-3xl font-bold pb-5'>CHOOSE A SUBJECT!</h1>
            <div className='grid lg:grid-cols-5 gap-5'>

                <div style={mystyle} className='h-[40vh] flex justify-center bg-no-repeat bg-cover bg-center relative hover:scale-95 ease-in-out duration-300 shadow-2xl pt-5 cursor-pointer'>
                    <h2 className='text-lg absolute bottom-2 bg-black/80 w-full text-white py-1 px-1 text-center  rounded-md'>Engineering Physics</h2>
                </div>
                <div style={mystyle} className='h-[40vh] flex justify-center bg-no-repeat bg-cover bg-center relative hover:scale-95 ease-in-out duration-300 shadow-2xl pt-5 cursor-pointer'>
                    <h2 className='text-lg absolute bottom-2 bg-black/80 w-full text-white py-1 px-1 text-center  rounded-md'>Engineering Physics</h2>
                </div>
                <div style={mystyle} className='h-[40vh] flex justify-center bg-no-repeat bg-cover bg-center relative hover:scale-95 ease-in-out duration-300 shadow-2xl pt-5 cursor-pointer'>
                    <h2 className='text-lg absolute bottom-2 bg-black/80 w-full text-white py-1 px-1 text-center  rounded-md'>Engineering Physics</h2>
                </div>


            </div>
        </section>
    )
}
