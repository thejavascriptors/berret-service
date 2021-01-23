import React from 'react'
import Product from '../product/product.jsx'
import styles from './productList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft as fasAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight as fasAngleRight } from '@fortawesome/free-solid-svg-icons'



var Products = ({products, next, prev}) => {
  return (
    <div>
      <div className={styles.productlist}>
      <div className={styles.prevbuttoncontainer}><button onClick={() => {prev()}} className={styles.prevbutton}><FontAwesomeIcon className="angleleft" icon={fasAngleLeft} size="2x"/></button></div>
      <div className={styles.products}>
          {products.map((product)  => {
            return (
            <div className="product" key={product._id}><Product product={product}/></div>
            )
          })}
      </div>
      <div className={styles.nextbuttoncontainer}><button onClick={() => {next()}} className={styles.nextbutton}><FontAwesomeIcon className="angleleft" icon={fasAngleRight} size="2x"/></button></div>
      </div>
    </div>
  )
}

export default Products;