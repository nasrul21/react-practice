import { ChangeEvent, SubmitEvent, useMemo, useState } from "react";

interface TodoFormProps {
  onSubmitTodo: (value: string) => void
}

const TodoForm = ({ onSubmitTodo }: TodoFormProps) => {
  const [task, setTask] = useState("");

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  }

  const onSubmitForm = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmitTodo(task);
    setTask("");
  }

  const isFormEmpty = useMemo(() => task.trim() === '', [task])

  return (
    <form onSubmit={onSubmitForm} className="form-container">
      <input type="text" onChange={onInputChange} value={task} />
      <button type="submit" disabled={isFormEmpty}>Add Task</button>
    </form>
  )
}

export default TodoForm;
