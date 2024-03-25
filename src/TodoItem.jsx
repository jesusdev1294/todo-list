
import React, { useState } from 'react';
function TodoItem({ todo, index, toggleComplete, deleteTodo, editTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.text);
  
    const handleToggleComplete = () => {
      toggleComplete(index);
    };
  
    const handleDeleteTodo = () => {
      deleteTodo(index);
    };
  
    const handleEditChange = (e) => {
      setEditedText(e.target.value);
    };
  
    const handleEditSubmit = () => {
      if (editedText.trim() !== '') {
        editTodo(index, editedText);
        setIsEditing(false);
      }
    };
  
    return (
      <li className={todo.completed ? 'completed' : ''}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggleComplete}
          disabled={todo.completed}
        />
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={handleEditChange}
            onBlur={handleEditSubmit}
            autoFocus
          />
        ) : (
          <span
            onClick={() => setIsEditing(true)}
            style={{ marginRight: '10px', marginLeft: '10px', cursor: 'pointer' }}
          >
            {todo.text}
          </span>
        )}
        {isEditing ? null : (
          <button onClick={() => setIsEditing(true)}>Editar</button>
        )}
        <button onClick={handleDeleteTodo}>Eliminar</button>
        <span style={{ marginLeft: '10px' }}>
          {todo.completed ? 'Completo' : 'Por hacer'}
        </span>
      </li>
    );
  }

  export default TodoItem;