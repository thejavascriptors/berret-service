import React from 'react'
import styles from './product.module.css'
import Stars from '../stars/stars.jsx'


var Product = ({product}) => {
  return (
    <div className={styles.product}>
      <div className={styles.productimage} src={'#'} style={{
      backgroundImage: `url(${product.photoUrl})`}}></div>
      {/* <div className={styles.product-name}>{product.name}</div> */}
      <span className={styles.productdesc}><a className={styles.a} href={'#'}>{product.desc}</a></span>
      <div className={styles.ratingcontainer}>
        <span className={styles.productrating}><Stars rating={product.rating}/></span>
        <span className={styles.productreviewcount}>&nbsp;&nbsp;{product.review_count}</span>
      </div>
      <div className={styles.productprice}>{product.price}</div>
    </div>
  )
}

export default Product;


//<img className="image" width="110" height="115" src={product.photoUrl}/>

//Rating: {product.rating}