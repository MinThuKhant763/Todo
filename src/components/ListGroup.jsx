import React from 'react';
import List from './List';
import EmptyPage from './EmptyPage';
const ListGroup = ({ tasks, deleteTask, checkTask,updateTask }) => {

    return (
        <div>
            {tasks.length === 0 && <EmptyPage/>}
            { tasks.map(({ id, job, isDone }) => <List key={ id } id={ id } job={ job } isDone={ isDone } deleteTask={ deleteTask } checkTask={ checkTask } updateTask={updateTask}/>
            ) }
        </div>
    );
};

export default ListGroup;
