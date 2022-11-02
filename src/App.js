import { useState } from "react"
import "./App.css"
import Products from "./components/Products"
import Cart from "./components/Cart"

const PAGE_PRODUCTS = "products"
const PAGE_CART = "cart"

function App() {
  const [cart, setCart] = useState([])
  const [page, setPage] = useState(PAGE_PRODUCTS)

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

  // const renderProducts = () => (
  //   <>
  //     <h1>Products</h1>
  //     <div className="products">
  //       {products.map((product, idx) => (
  //         <div className="product" key={idx}>
  //           <h3>{product.name}</h3>
  //           <h4>{product.cost}</h4>
  //           <img src={product.image} alt={product.name} referrerPolicy="no-referrer" />
  //           <button onClick={() => addToCart(product)}>Add to Cart</button>
  //         </div>
  //       ))}
  //     </div>
  //   </>
  // )

  // const renderCart = () => (

  // )

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
