'use client';

import { createTodo, deleteCompleted } from "@/todos/actions/todo-actions";
import { FormEvent, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";


export const NewTodo = () => { 

    const [description, setDescription ] = useState("");

    const handleCreate = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (description.trim() === '') return;
        await createTodo(description);
        setDescription("");
    }

    const handleDelete = async () => {
        await deleteCompleted();
    }

  return (
    <form  className='flex w-full'
        onSubmit={ handleCreate}
    >

      <input type="text"
        className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="¿Qué necesita ser hecho?"
        value={description}
        onChange={ (e) => setDescription(e.target.value) }

        />

      <button type='submit' className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all"
      >
        Crear
      </button>
      
      <span className='flex flex-1'></span>

      <button 
        onClick={ handleDelete }
        type='button' className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all">
        <IoTrashOutline />
        Delete
      </button>


    </form>
  )
}