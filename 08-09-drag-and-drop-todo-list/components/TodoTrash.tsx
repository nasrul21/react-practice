import { useDroppable } from "@dnd-kit/react";
import TrashIcon from "./TrashIcon"
import { useMemo } from "react";

const TodoTrash = ({ id }: { id: string }) => {
  const { ref, isDropTarget } = useDroppable({
    id: `trash-${id}`,
  });

  const style: React.CSSProperties | undefined = useMemo(() =>
    isDropTarget ? { backgroundColor: '#92241b' } : undefined,
    [isDropTarget]
  );

  return (
    <div
      ref={ref}
      className="column-trash background-danger"
      style={style}
    >
      <TrashIcon width={28} height={28} fill="#a7342d" />
    </div>
  )
}

export default TodoTrash;
