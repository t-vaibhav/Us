import React from 'react'
import Colleges from './subcomponents/Colleges'
import Bodynav from './subcomponents/Bodynav'
import Subjects from './subcomponents/Subjects'
import subLand from './subcomponents/coLand'
import Learnland from './subcomponents/Learnland'
import Home from './Home'


export default function Learn(props) {

    let college = props.college
    let result = props.res
    let learn = props.ler

    let mode;

    if (college) {
        mode = <Colleges />
    } else if (result) {
        mode = <Subjects />
    } else if (learn) {
        mode = <Learnland />
    } else {
        mode = <Home />
    }

    return (
        <div className=' w-full pl-[20vw]'>
            <Bodynav />

            <div className='pt-16'>

                {mode}
            </div>
            {/* {props.college ? <Colleges /> : <Home />}
            {props.res ? <Subjects /> : <Home />}
            {props.ler ? <Learnland /> : <Home />} */}


        </div>
    )
}
