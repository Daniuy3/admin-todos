"use client"

import { Todo } from "@prisma/client";
import { TodoItem } from "./TodoItem";
import { updateTodo } from "../helpers/todos";
import { useRouter } from "next/navigation";

interface Props {
  todos?: Todo[];
}

export const TodosGrid = ({ todos = [] }: Props) => {
    
    const router = useRouter()

    async function updateTodoStatus (id: string, completed: boolean) {
        await updateTodo(id, completed)
        router.refresh()
    }

  return (
    <>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {
                todos.map((todo) => <TodoItem key={todo.id} todo={todo} updateTodoStatus={updateTodoStatus}/>)
            }
        </div>
    </>
  )
};
