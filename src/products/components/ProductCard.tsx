

import Image from "next/image"
import { Product } from "../data/products"
import { Star } from "./Star"
import { ButtonsGrid } from "./ButtonsGrid"



export const ProductCard = (product : Product) => {
    
  return (
    <div className="bg-white shadow rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-100">
      
      {/* Product Image */}
      <div className="p-2">
        <Image
            width={500}
            height={500}
            className="rounded" 
            src={product.image}
            alt="product image" />
      </div>
      
      {/* Title */}
      <div className="px-5 pb-5">
        <a href="#">
          <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">{product.name} </h3>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          

          {/* Stars */}
          
            {
                Array(product.rating).fill(0).map((_, i) => (
                    <Star key={i} />
                ))
            }

          {/* Rating Number */}
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            5.0
          </span>
        </div>


        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price} </span>
          
          <ButtonsGrid id={product.id}/>
          
        </div>


      </div>
    </div>
  )
}