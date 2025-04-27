import React from 'react'

const Status = ({tasks}) => {
  return (
    <div className='text-white flex justify-between mb-8 pointer-events-none'>
      <p>Your List</p>
      <p>Done ( {tasks.filter((task)=>task.isDone === true ).length}/{tasks.length} )</p>
    </div>
  )
}

export default Status
