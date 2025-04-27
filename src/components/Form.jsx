
import React, { useState } from 'react';

const Form = ({addTask}) => {
    const [input,setInput] = useState("");
    const handler = (event) =>{
        setInput(event.target.value);
    }
    const addData = () =>{
        const newData = {
            id : Date.now(),
            job :input,
            isDone : false
        };
        addTask(newData);
        setInput("");
    }
    return (
        <div className='flex justify-evenly items-center  bg-[#504F4F] rounded-lg mb-12' >
            <input type="text" placeholder="Task name" className='px-6 py-4 bg-[#504F4F] rounded-lg outline-none text-white' value={input} onChange={handler}/>
            <div className='px-4 py-3 bg-[#030303] text-white rounded-lg mr-2 cursor-pointer' onClick={addData}>Add</div>
        </div>
    );
};

export default Form;
