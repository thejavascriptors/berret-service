import React from 'react'
import Product from '../product/product.jsx'
import styles from './productList.module.css'

var Products = ({products}) => {
  return (
    <div>
      <div className={styles.productlist}>
      <button className="prev-button">Prev</button>
      <div className={styles.products}>
          {products.slice(0, 5).map((product)  => {
            return (
            <div className="product" key={product._id}><Product product={product}/></div>
            )
          })}
      </div>
      <button className="next-button">Next</button>
      </div><br/>
    </div>
  )
}

export default Products;