import React, { useState } from 'react';
import './App.css';
import TodoItem from './TodoItem';
import Login from './Login';



function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [login,setLogin] = useState(true)
  const [isTodo,setIsTodo] = useState(false);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTodo = (index, newText) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = newText;
    setTodos(updatedTodos);
  };


  return (
    <div className="App">

      {
        login && <Login setLogin={setLogin} setIsTodo={setIsTodo}/>  
      }
      
      {

        isTodo  &&  <div>
              <h5>TODO APP</h5>
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Agregar nueva tarea"
              />
              <button onClick={addTodo}>Agregar</button>
              <ul>
                {todos.map((todo, index) => (
                  <TodoItem
                    key={index}
                    todo={todo}
                    index={index}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                  />
                ))}
              </ul>

            </div>


      }
      
    </div>
  );
}

export default Todo;
