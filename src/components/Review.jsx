import React from 'react'

const Review = ({item, width}) => {
  return (
    <div className='review' style={{ width: width }}>
      <img alt="" className="review-img" src={item.img}/>
      <h1>{item.name}</h1>
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
    </div>
  )
}

export default Review
