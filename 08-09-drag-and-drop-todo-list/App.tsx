import "./styles.css";
import TodoForm from "./components/TodoForm";
import TodoBoard from "./components/TodoBoard";
import { useState } from "react";
import { Task, TaskRecord } from "./types/task";
import { DragDropProvider } from "@dnd-kit/react";
import { move } from '@dnd-kit/helpers';
import { v4 as uuidV4 } from 'uuid';
import { isSortable } from "@dnd-kit/react/sortable";

export default function App() {
  const [tasks, setTasks] = useState<TaskRecord>({
    'to-do': [],
    'in-progress': [],
    'done': []
  });

  const onSubmitTodo = (value: string) => {
    const newState: Task = {
      id: uuidV4(),
      text: value,
      status: 'to-do'
    };

    setTasks(prevState => ({
      ...prevState,
      ['to-do']: [...prevState['to-do'], newState]
    }));
  }

  return (
    <div className="container">
      <DragDropProvider
        onDragOver={event => {
          setTasks(prevState => move(prevState, event))
        }}
        onDragEnd={({ operation }) => {
          const { target, source } = operation;
          if ((target?.id as string).includes("trash-")) {
            const group = isSortable(source) ? source.group || "" : "";
            setTasks(prevState => ({
              ...prevState,
              [group]: prevState[group].filter(task => task.id !== source?.id)
            }))
          }
        }}
      >
        <h1>Drag and Drop Todo List</h1>
        <TodoForm onSubmitTodo={onSubmitTodo} />
        <TodoBoard tasks={tasks} />
      </DragDropProvider>
    </div>
  )
}
