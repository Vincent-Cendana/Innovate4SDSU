import React from 'react'

const StarRating = ({value=0, max=5}) => {
  const stars = []
  for (let i=1;i<=max;i++) {
    stars.push(
      <span key={i} style={{color: i<=value ? '#f5b301' : '#ddd', fontSize:20, marginRight:4}}> 
        {i<=value ? '★' : '☆'}
      </span>
    )
  }
  return <div>{stars}</div>
}

export default StarRating
