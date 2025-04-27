import React, { useState } from 'react';
import './App.css';
import Heading from './components/Heading';
import Form from './components/Form';
import Status from './components/Status';
import ListGroup from './components/ListGroup';
import TodoList from './components/TodoList';




const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, job: 'Complete homework', isDone: false },
    { id: 2, job: 'Go to the gym', isDone: true },
    { id: 3, job: 'Read a book', isDone: false },
    { id: 4, job: 'Buy groceries', isDone: false },
    { id: 5, job: 'Write a blog post', isDone: true }
  ]);
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((element) => element.id != id));
  };
  const checkTask = (id) => {
    setTasks(tasks.map((element) => element.id === id ? {...element,isDone:!element.isDone} : element));
  };
  const updateTask = (id,newJob) =>{
    setTasks(tasks.map((element) =>element.id === id ? {...element,job: newJob } : element))
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-2xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">Todo App</h1>
        </div>
      </header>
      <main className="py-8">
        <TodoList />
      </main>
    </div>
  );
};

export default App;
