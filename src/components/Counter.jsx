import React, { useState } from 'react'

const Counter = () => {
    const [counter,setCounter] = useState(0);
  return (
    <div className='font-mono text-white border border-white rounded p-5 text-center'>
        <div className='font-bold text-3xl mb-3'>Counter : {counter}</div>
        <div className='flex justify-center gap-5'>
            <button onClick={()=>counter>0 &&setCounter(counter-1)} className=' bg-red-600 px-4'>-</button>
            <button onClick={()=>setCounter(0)}>reset</button>
            <button onClick={()=>setCounter(counter+1)} className='bg-green-600 px-4'>+</button>
        </div>
    </div>
  )
}

export default Counter
