import React from 'react'

var Product = ({product}) => {
  return (
    <div>
      <div className="product-image"><img className="image" width="110" height="115" src={product.photoUrl}/></div>
      <div className="product-name">Name: {product.name}</div>
      <div className="product-desc">Discription: {product.desc}</div>
      <div className="product-rating">Rating: {product.rating}</div>
      <div className="product-review_count">Review Count: {product.review_count}</div>
    </div>
  )
}

export default Product;