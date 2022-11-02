import { useState } from "react"
import "./App.css"

const PAGE_PRODUCTS = "products"
const PAGE_CART = "cart"

function App() {
  const [cart, setCart] = useState([])
  const [page, setPage] = useState(PAGE_PRODUCTS)

  const [products, setProducts] = useState([
    {
      name: "AA Battery",
      cost: "2.99",
      image: "https://image.shutterstock.com/image-photo/one-aa-battery-isolated-on-260nw-1009985116.jpg"
    },
    {
      name: "Blanket",
      cost: "19.99",
      image: "https://cdn.shopify.com/s/files/1/0113/9323/7056/products/BigBlanket-burntorange-side4-789067.png?v=1663335434"
    }
  ])

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

  const renderProducts = () => (
    <>
      <h1>Products</h1>
      <div className="products">
        {products.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <img src={product.image} alt={product.name} referrerPolicy="no-referrer" />
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  )

  const renderCart = () => (
    <>
      <h1>Cart</h1>
      <div className="products">
        {cart.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <img src={product.image} alt={product.name} referrerPolicy="no-referrer" />
            <button onClick={() => removeFromCart(product)}>Remove</button>
          </div>
        ))}
      </div>
    </>
  )

  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>Go to Cart ({cart.length})</button>

        <button onClick={() => navigateTo(PAGE_PRODUCTS)}>View Products </button>
      </header>
      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}
    </div>
  )
}

export default App
