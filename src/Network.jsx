import React, { useRef, useState } from 'react'
import { bombs } from "./bombs"
export default function Network() {
    const clicks = []
    const [message, setMessage] = useState("")
    const boms = useRef(bombs())
    console.log(boms.current);
    
    const [count, setCount] = useState(boms.current.length)
    const network = []
    for (let i = 1; i <= 100; i++) {
        network.push(i)
    }

    function onClick(e, num) {
        if (!clicks.includes(num)) {
            console.log(clicks);
            clicks.push(num)
            console.log(clicks);
            if (!boms.current.includes(num)) {
                e.target.className = "cell is-x"
                e.target.textContent = "X"
                setMessage("Keep Searching!")

            }
            else {
                e.target.className = "cell is-boom"
                e.target.textContent = "💣"
                setCount(count - 1)
                if (count === 0) {
                    setMessage("Sucress")
                }
            }

        }
    }

    return (
        <div className='main'>
            <div className='count'>{count}</div>
            <div className={message === "Sucress" ? "suc" : "keep"}>{message}</div>
            <div className='network'>
                {network.map((num) =>
                    <div key={num} className='cell' onClick={(e) => {
                        if(count === 0) return
                        onClick(e, num)
                    }}></div>
                )}</div>
        </div>
    )
}
