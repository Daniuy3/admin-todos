"use client"

import React from "react";
import { IoAddCircleOutline, IoTrashOutline } from "react-icons/io5";
import { Product } from "../data/products";
import { addProduct, deleteProduct } from "@/shopping-cart/actions/actions";
import { useRouter } from "next/navigation";


type Props = Pick<Product, "id"> 

export const ButtonsGrid = ({id} : Props) => {
    const router = useRouter()
    const onAdd = () => {
        addProduct({id})
        router.refresh()
    }

    const onDelete = () => {
        deleteProduct({id})
        router.refresh()
    }
    
  return (
    <div className="flex">
      <button className="text-white mr-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={onAdd}
      >
        <IoAddCircleOutline size={25} />
      </button>
      <button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        onClick={onDelete}
      >
        <IoTrashOutline size={20} />
      </button>
    </div>
  );
};
