import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import styles from './stars.module.css'

var Stars = ({rating}) => {
  let maxStars = 5;
  let curRating = rating
  let emptyStars = maxStars - rating

  var renderFullStars = () => {
    let starArray = Array(curRating).fill(null)
    return starArray.map((star, i) => {
      return <FontAwesomeIcon className="star" key={`fs${i}`} icon={fasStar} />
    })
  }

  var renderEmptyStars = () => {
    return Array(emptyStars).fill(null).map((star, i) => {
      return <FontAwesomeIcon className="star" key={`es${i}`} icon={farStar} />
    })
  }

  return (
    <div className={styles.stars}>
     {renderFullStars()}
     {renderEmptyStars()}
    </div>
  )
}

export default Stars;

// var renderFullStars = () => {
//   return Array({rating}).fill(null).map((star, i) => {
//     debugger;
//     return <FontAwesomeIcon className="star" key={`fs${i}`} icon={fasStar} />
//   })
// }

// var renderEmptyStarts = () => {
//   return Array(emptyStars).fill(null).map((star, i) => {
//     return <FontAwesomeIcon className="star" key={`es${i}`} icon={farStar} />
//   })