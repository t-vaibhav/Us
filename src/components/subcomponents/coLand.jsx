import React from 'react'

export default function subLand() {
    const mystyle = {
        backgroundImage: 'url("/images/dora.png")',
    }

    return (
        <section>
            <h1 className='text-3xl font-bold'>CHOOSE A SUBJECT!</h1>

            <div className='grid lg:grid-cols-5 gap-5'>
                <div style={mystyle} className='h-[40vh] bg-no-repeat bg-cover bg-center relative hover:scale-95 ease-in-out duration-300 shadow-2xl pt-5 cursor-pointer'>
                    <h2 className='text-2xl absolute bottom-2 bg-black/90 text-white py-1 px-3 text-center  rounded-md'>Connect with seniors</h2>
                </div>
            </div>
            <div className='grid lg:grid-cols-5 gap-5'>
                <div style={mystyle} className='h-[40vh] bg-no-repeat bg-cover bg-center relative hover:scale-95 ease-in-out duration-300 shadow-2xl pt-5 cursor-pointer'>
                    <h2 className='text-2xl absolute bottom-2 bg-black/90 text-white py-1 px-3 text-center  rounded-md'>Alumnis</h2>
                </div>
            </div>
            <div className='grid lg:grid-cols-5 gap-5'>
                <div style={mystyle} className='h-[40vh] bg-no-repeat bg-cover bg-center relative hover:scale-95 ease-in-out duration-300 shadow-2xl pt-5 cursor-pointer'>
                    <h2 className='text-2xl absolute bottom-2 bg-black/90 text-white py-1 px-3 text-center  rounded-md'>Study Resources</h2>
                </div>
            </div>
            <div className='grid lg:grid-cols-5 gap-5'>
                <div style={mystyle} className='h-[40vh] bg-no-repeat bg-cover bg-center relative hover:scale-95 ease-in-out duration-300 shadow-2xl pt-5 cursor-pointer'>
                    <h2 className='text-2xl absolute bottom-2 bg-black/90 text-white py-1 px-3 text-center  rounded-md'>Societies</h2>
                </div>
            </div>
            <div className='grid lg:grid-cols-5 gap-5'>
                <div style={mystyle} className='h-[40vh] bg-no-repeat bg-cover bg-center relative hover:scale-95 ease-in-out duration-300 shadow-2xl pt-5 cursor-pointer'>
                    <h2 className='text-2xl absolute bottom-2 bg-black/90 text-white py-1 px-3 text-center  rounded-md'>Co-curricular</h2>
                </div>
            </div>
        </section>
    )
}
