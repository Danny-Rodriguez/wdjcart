import { useState, useEffect } from "react"
import "./App.css"
import Products from "./components/Products"
import Cart from "./components/Cart"

const PAGE_PRODUCTS = "products"
const PAGE_CART = "cart"

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]")

function App() {
  const [cart, setCart] = useState(cartFromLocalStorage)
  const [page, setPage] = useState(PAGE_PRODUCTS)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = product => {
    // console.log("we are in addToCart")
    setCart([...cart, { ...product }])
  }

  const removeFromCart = productToRemove => {
    setCart(cart.filter(product => product !== productToRemove))
  }

  const navigateTo = nextPage => {
    setPage(nextPage)
  }

  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>Go to Cart ({cart.length})</button>

        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products </button>
      </header>
      {page === PAGE_PRODUCTS && <Products addToCart={addToCart} />}
      {page === PAGE_CART && <Cart cart={cart} removeFromCart={removeFromCart} />}
    </div>
  )
}

export default App
