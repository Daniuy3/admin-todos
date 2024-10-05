"use server"

import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const toggleTodo = async (id: string, completed: boolean): Promise<Todo> => {
    const todo = await prisma.todo.findFirst({where: {id}});

    if(!todo) throw new Error('Todo not found');

    const updatedTodo = await prisma.todo.update({
        where: {id},
        data: {
            completed
        }
    });

    revalidatePath('/api/todos');

    return updatedTodo;
}

export const createTodo = async (description:string) : Promise<Todo | {message:string}> => {
    try {

        const todo = await prisma.todo.create({
            data: {
                description,
            }
        });

        revalidatePath('/api/todos');

        return todo
    }
    catch{
        return {
            message: 'Error creating todo'
        }
    } 
}

export const deleteCompleted = async():Promise<void> => {
    await prisma.todo.deleteMany({
        where:{
            completed: true
        }
    })
    revalidatePath('/api/todos');
}
