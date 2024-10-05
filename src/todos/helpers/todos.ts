/* Here we have the instructions for the traditional fetchig */

import { Todo } from "@prisma/client";
import axios from "axios";
import { deletedResponseSchema } from "../interfaces";


export const updateTodo = async (id: string, completed: boolean): Promise<Todo> => {
    const response = await axios.put(`/api/todos/${id}`,{ completed });
    return response.data;
}

export const createTodo = async (description: string): Promise<Todo> => {
    const response = await axios.post('/api/todos', { description });
    return response.data;
}

export const deleteCompleted = async (): Promise<string> => {
    const response =await deletedResponseSchema.validate(await axios.delete('/api/todos'));
    return response.data.message;
}