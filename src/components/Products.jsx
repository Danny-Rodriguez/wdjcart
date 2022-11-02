import React, { useState } from "react"

function Products({ addToCart }) {
  const [products] = useState([
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

  return (
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
}

export default Products
