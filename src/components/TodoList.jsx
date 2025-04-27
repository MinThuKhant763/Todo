import { useState, useEffect } from 'react';
import axios from 'axios';
import Todo from './Todo';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({
    title: '',
    description: '',
  });

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleAddTodo = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/todos', newTodo);
      setTodos([response.data, ...todos]);
      setNewTodo({ title: '', description: '' });
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/todos/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const handleToggleTodo = async (id) => {
    try {
      const todoToUpdate = todos.find(todo => todo._id === id);
      const response = await axios.put(`http://localhost:5001/api/todos/${id}`, {
        ...todoToUpdate,
        completed: !todoToUpdate.completed,
      });
      setTodos(todos.map(todo => todo._id === id ? response.data : todo));
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const handleEditTodo = async (id, updatedTodo) => {
    try {
      const response = await axios.put(`http://localhost:5001/api/todos/${id}`, updatedTodo);
      setTodos(todos.map(todo => todo._id === id ? response.data : todo));
    } catch (error) {
      console.error('Error editing todo:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <form onSubmit={handleAddTodo} className="space-y-4">
        <Input
          type="text"
          placeholder="Title"
          value={newTodo.title}
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
          required
        />
        <Textarea
          placeholder="Description"
          value={newTodo.description}
          onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
        />
        <Button type="submit">Add Todo</Button>
      </form>

      <div className="space-y-4">
        {todos.map(todo => (
          <Todo
            key={todo._id}
            todo={todo}
            onDelete={handleDeleteTodo}
            onToggle={handleToggleTodo}
            onEdit={handleEditTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList; 