import React from 'react'

const StarRating = ({value=0, max=5}) => {
  const stars = []
  for (let i=1;i<=max;i++) {
    const filled = i <= value
    stars.push(
      <span key={i} className="star" style={{color: filled ? '#f5b301' : '#ddd'}}>
        {filled ? '★' : '☆'}
      </span>
    )
  }
  return <div>{stars}</div>
}

export default StarRating
