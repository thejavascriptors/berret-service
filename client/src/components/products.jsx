import React from 'react'
import Product from './product.jsx'

var Products = ({products}) => {
  return (
    <div>
      <div className="product-list">
        {products.slice(0, 5).map((product)  => {
          return (
          <div className="product" key={product._id}><Product product={product}/></div>
          )
        })}
      </div><br/>
    </div>
  )
}

export default Products;