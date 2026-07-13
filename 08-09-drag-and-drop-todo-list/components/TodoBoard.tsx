import { HTMLAttributes } from "react"
import { TaskRecord } from "../types/task";
import TodoItem from "./TodoItem";
import TodoColumn from "./TodoColumn";
import TodoTrash from "./TodoTrash";

interface TodoBoardProps extends HTMLAttributes<HTMLDivElement> {
  tasks: TaskRecord
}

const TodoBoard = ({ tasks }: TodoBoardProps) => {
  return (
    <div className="board-container">
      {Object.entries(tasks).map(([column, items]) => (
        //column
        <TodoColumn
          key={column}
          id={column}
        >
          {items.map((task, index) => (
            //item
            <TodoItem key={task.id} id={task.id} text={task.text} index={index} column={column} />
          ))}

          <div className="spacer" />

          <TodoTrash id={column} />

        </TodoColumn>
      ))
      }
    </div >
  );
}

export default TodoBoard;
