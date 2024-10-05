import { Todo } from "@prisma/client";
import styles from "./TodoItem.module.css";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";
interface Props {
  todo: Todo;
  updateTodoStatus : (id: string, completed: boolean) => void;
}
export const TodoItem = ({ todo, updateTodoStatus }: Props) => {
  return (
    <div className={todo.completed? styles.todoDone : styles.todoPending}>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <div className={
            `flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 ${todo.completed ? 'bg-blue-100' : 'bg-red-100'}`
        }
            onClick={() => updateTodoStatus(todo.id, !todo.completed)}
        >
            {
                todo.completed ? <IoCheckboxOutline className="text-2xl" /> : <IoSquareOutline className="text-2xl text-gray-400" />
            }

        </div>
        <div className="text-center sm:text-left">
            {todo.description}
        </div>
      </div>
    </div>
  );
};
