import React, { useRef, useState } from 'react'
import {bomds} from "./bombs"
export default function Network() {
    const [network, setNetwork] = useState([])
    for (let i = 1; i <= 100; i++) {
        network.push(i)
    }
    const boms = useRef(bomds())
    
    return (
        <div className='main'>
            <div className='network'>
                {network.map((num) => 
                    <div key={num} className='cell'></div>
                    )}</div>
        </div>
    )
}
