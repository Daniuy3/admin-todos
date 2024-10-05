/* Here we have the instructions for the traditional fetchig */

import { Todo } from "@prisma/client";
import axios from "axios";


export const updateTodo = async (id: string, completed: boolean): Promise<Todo> => {
    const response = await axios.put(`/api/todos/${id}`,{ completed });
    return response.data;
}