const TodoItem = ({ todo, handleToggleTodo = () => { } }) => {
  return (
    <li key={todo.id} className="form-group" style={styles.todoItem}>
      <label htmlFor={`checkbox-${todo.id}`} className="paper-check">
        <input
          id={`checkbox-${todo.id}`}
          type="checkbox"
          checked={todo.done}
          onChange={() => handleToggleTodo(todo)}
        />
        <span style={{ maxWidth: '240px' }}>{todo.text}</span>
      </label>
    </li>
  )
}

const styles = {
  todoItem: {
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
    margin: 0
  }
}

export default TodoItem;
