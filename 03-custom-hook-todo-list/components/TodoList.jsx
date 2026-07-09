import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useLocalStorage("todolist", []);
  const handleAddNewTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: uuidv4(), text: newTodo, done: false }]);
    setNewTodo("");
  };
  const handleToggleTodo = (todoToToggle) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoToToggle.id) {
          return {
            ...todoToToggle,
            done: !todoToToggle.done,
          };
        }
        return todo;
      })
    );
  };
  return (
    <div>
      <form onSubmit={handleAddNewTodo}>
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit" disabled={newTodo.trim() !== ''}>Add</button>
      </form>
      <ul>
        {todos?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleToggleTodo={handleToggleTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
