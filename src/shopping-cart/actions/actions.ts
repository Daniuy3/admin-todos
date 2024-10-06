import { Product } from "@/products/data/products";
import { getCookie, setCookie } from "cookies-next"


type Props = Pick<Product, "id">

export const getCart = () : {[id : Product["id"]] : number} =>  {
    return JSON.parse(getCookie("cart") || "{}")
}

export const addProduct = ({id}: Props) => {

    const cart = getCart()

    if (cart[id]) {
        cart[id] += 1
    } else {
        cart[id] = 1
    }

    setCookie("cart", JSON.stringify({...cart})) 
}

export const deleteProduct = ({id}: Props) => {
    
    const cart = getCart()
    delete cart[id]

    setCookie("cart", JSON.stringify({...cart}))
}

export const decreaseProduct = ({id}: Props) => {
    const cart = getCart()

    if (cart[id] > 1) {
        cart[id] -= 1
    } else {
        delete cart[id]
    }

    setCookie("cart", JSON.stringify({...cart}))
}