import { NewTodo } from "@/components";
import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";

export const metadata = {
  title: "Rest Todos",
  description: "Rest Todos",
}
export default async function ServerTodosPage() {

  const todos = await prisma.todo.findMany({orderBy: {description: "asc"}});

  return (
    <div>
      <div className="px-10 mb-10">
      <NewTodo />
      </div>
      {
        <TodosGrid todos={todos} />
      }
    </div>
  );
}