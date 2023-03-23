import React from 'react'
import Bodynav from "./subcomponents/Bodynav"
import Post from "./subcomponents/Post"
import data from "../data"

export default function Main() {

    const records = data.map((item, index) => {
        return (
            <Post
                key={index}
                item={item}
            />
        )
    })


    return (
        < main className='pl-[20vw] p bg-slate-400 w-full' >
            < Bodynav />
            <div className='pt-16'>
                {records}
            </div>
        </main >
    )
}
