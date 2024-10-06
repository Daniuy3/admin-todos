import { products } from "@/products/data/products";
import { ItemCard } from "@/shopping-cart";
import { cookies } from "next/headers";

export const metadata = {
    title: "Cart Page",
    description: "Cart Page",
}
const getProductsInCart = (cart : {[id: string] : number}) => {
    const prods = products.filter((prod) => cart[prod.id])
    return  prods.map((product) => ({product , quantity: cart[product.id]}))
}
const CartPage = () => {

    const cookiesStore = cookies();
    const cart = JSON.parse( cookiesStore.get("cart")?.value || "{}" ) as {[id : string] : number}

    const productsInCart = getProductsInCart(cart)

  return (
    <div>
        <h1 className="text-5xl font-bold text-indigo-700">Productos en el Carrito</h1>
        <hr  className="my-5"/>

        <div className="flex flex-col sm:flex-row gap-2 w-full">
            <div className="flex flex-col gap-2 w-full sm:w-8/12">
                {
                    productsInCart.map((product) => (
                        <ItemCard key={product.product.id} {...product} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default CartPage