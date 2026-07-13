import { useSortable } from "@dnd-kit/react/sortable"
import { HTMLAttributes } from "react"

interface TodoItemProps extends HTMLAttributes<HTMLDivElement> {
  id: string
  index: number
  column: string
  text: string
}

const TodoItem = ({ id, text, index, column, ...props }: TodoItemProps) => {
  const { ref, isDragging } = useSortable({
    id,
    index,
    type: 'item',
    accept: 'item',
    group: column,
  });

  return (
    <div
      ref={ref}
      data-dragging={isDragging}
      className="item border padding margin-left margin-right"
      {...props}
    >
      {text}
    </div>
  )
}

export default TodoItem;
