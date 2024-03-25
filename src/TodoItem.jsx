function TodoItem({ todo, index, toggleComplete, deleteTodo }) {
    return (
      <li 
        className={todo.completed ? 'completed' : ''}
      >
        <span
          onClick={() => toggleComplete(index)}
          style={{ marginRight: '10px', cursor: 'pointer' }}
        >
          {todo.text}
        </span>
        <button onClick={() => deleteTodo(index)}>Eliminar</button>
      </li>
    );
}
export default TodoItem;