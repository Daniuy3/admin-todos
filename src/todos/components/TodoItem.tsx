"use client"

import { Todo } from "@prisma/client";
import styles from "./TodoItem.module.css";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";
import { useOptimistic } from "react";

interface Props {
  todo: Todo;
  updateTodoStatus : (id: string, completed: boolean) => void;
}
export const TodoItem = ({ todo, updateTodoStatus }: Props) => {

  const [ todoOptimistic, toggleTodoOptimistic ] = useOptimistic(
    todo, 
    (state, newCompleteValue: boolean) => ({...state, completed: newCompleteValue})
  );

    const onToggle = async () => {
        try {
          toggleTodoOptimistic(!todoOptimistic.completed);
          await updateTodoStatus(todoOptimistic.id, !todoOptimistic.completed);
        }
        catch{
          toggleTodoOptimistic(!todoOptimistic.completed);
        }
    }
    
  return (
    <div className={todoOptimistic.completed? styles.todoDone : styles.todoPending}>
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <div className={
            `flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 ${todoOptimistic.completed ? 'bg-blue-100' : 'bg-red-100'}`
        }
            /* onClick={() => onToggle(todoOptimistic.id, !todoOptimistic.completed)} */
            onClick={onToggle}
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
