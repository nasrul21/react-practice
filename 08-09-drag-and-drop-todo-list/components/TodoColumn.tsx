import { useDroppable } from "@dnd-kit/react";
import { CollisionPriority } from '@dnd-kit/abstract';
import { HTMLAttributes, useMemo } from "react";
import TodoTrash from "./TodoTrash";

interface TodoColumnProps extends HTMLAttributes<HTMLDivElement> {
  id: string
}

const TodoColumn = ({ id, children, ...props }: TodoColumnProps) => {
  const { isDropTarget, ref } = useDroppable({
    id,
    type: 'column',
    accept: 'item',
    collisionPriority: CollisionPriority.Low
  });

  const style: React.CSSProperties | undefined = useMemo(() =>
    isDropTarget ? { backgroundColor: '#00000030' } : undefined,
    [isDropTarget]
  );

  return (
    <div ref={ref} className="border column" style={style} {...props}>
      <div className="padding background-muted">{id}</div>
      {children}
    </div>
  )
}

export default TodoColumn;
