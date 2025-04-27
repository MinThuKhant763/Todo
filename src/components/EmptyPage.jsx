import React from 'react';
import emptyPhoto from '../assets/emptyTask.png'
const EmptyPage = () => {
    return (
        <div className='w-[300px]'>
           <p className='text-center'>Empty Task</p>
           <img src={emptyPhoto} alt="" className=' w-52 mx-auto'/>
        </div>
    );
};

export default EmptyPage;
