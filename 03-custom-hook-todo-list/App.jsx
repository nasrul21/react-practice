import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="container">
      <h4 style={{ marginBottom: 0 }}>Custom Hook</h4>
      <h1 style={{ marginTop: 0 }}>Todo List App</h1>
      <TodoList />
    </div>
  )
}
