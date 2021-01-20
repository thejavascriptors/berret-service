import React from 'react'
import styles from './product.module.css'


var Product = ({product}) => {
  return (
    <div className={styles.product}>
      <div className={styles.productimage} style={{
      backgroundImage: `url(${product.photoUrl})`}}></div>
      <div className={styles.product-name}>{product.name}</div>
      <span className={styles.productdesc}>{product.desc}</span>
      <div className={styles.productrating}>Rating: {product.rating}</div>
      <div className={styles.productreviewcount}>Review Count: {product.review_count}</div>
    </div>
  )
}

export default Product;


//<img className="image" width="110" height="115" src={product.photoUrl}/>

