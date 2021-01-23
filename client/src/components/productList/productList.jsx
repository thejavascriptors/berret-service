import React from 'react'
import Product from '../product/product.jsx'
import styles from './productList.module.css'

var Products = ({products}) => {
  return (
    <div>
      <div className={styles.productlist}>
      <div className={styles.prevbuttoncontainer}><button className={styles.prevbutton}>Prev</button></div>
      <div className={styles.products}>
          {products.slice(0, 5).map((product)  => {
            return (
            <div className="product" key={product._id}><Product product={product}/></div>
            )
          })}
      </div>
      <div className={styles.nextbuttoncontainer}><button className={styles.nextbutton}>Next</button></div>
      </div>
    </div>
  )
}

export default Products;