import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";

export const metadata = {
  title: "Rest Todos",
  description: "Rest Todos",
}
export default async function RestTodosPage() {

  const todos = await prisma.todo.findMany({orderBy: {description: "asc"}});

  return (
    <div>
      {/* Formulario para agregar nuevos todos */}
      {
        <TodosGrid todos={todos} />
      }
    </div>
  );
}