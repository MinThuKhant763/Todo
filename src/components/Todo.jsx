import { useState } from 'react';
import { Checkbox } from './ui/checkbox';
import { Button } from './ui/button';
import { Trash2, Edit2 } from 'lucide-react';

const Todo = ({ todo, onDelete, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedDescription, setEditedDescription] = useState(todo.description);

  const handleEdit = () => {
    onEdit(todo._id, {
      title: editedTitle,
      description: editedDescription,
    });
    setIsEditing(false);
  };

  return (
    <div className="flex items-start space-x-4 p-4 border rounded-lg shadow-sm">
      <Checkbox
        checked={todo.completed}
        onCheckedChange={() => onToggle(todo._id)}
        className="mt-1"
      />
      <div className="flex-1">
        {isEditing ? (
          <div className="space-y-2">
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              className="w-full p-2 border rounded"
              rows="2"
            />
            <Button onClick={handleEdit} size="sm">
              Save
            </Button>
          </div>
        ) : (
          <div>
            <h3 className={`text-lg font-medium ${todo.completed ? 'line-through text-gray-500' : ''}`}>
              {todo.title}
            </h3>
            <p className={`text-sm text-gray-600 ${todo.completed ? 'line-through' : ''}`}>
              {todo.description}
            </p>
          </div>
        )}
      </div>
      <div className="flex space-x-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsEditing(!isEditing)}
        >
          <Edit2 className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onDelete(todo._id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Todo; 