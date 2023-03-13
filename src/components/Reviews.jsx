import React, { useState } from 'react'
import { reviewItems } from '../ReviewData';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Reviews = () => {
    const [activeElm, setActiveElm] = useState(0);

    
  return (
    <div className='reviews'>
      <div className="detail">
          <img src={reviewItems[activeElm].img} alt="" />
          <h1>{reviewItems[activeElm].name}</h1>
          <h2>{reviewItems[activeElm].title}</h2>
          <p>{reviewItems[activeElm].desc}</p>
      </div>
     <div className="reviewbtns">
        <button className="icon-left" 
         onClick={() => {
            activeElm > 0 && setActiveElm(activeElm - 1);
          }}>
            <FaChevronLeft /> 
        </button>
        <button className="icon-right"
        onClick={() => {
            activeElm < reviewItems.length - 1 && setActiveElm(activeElm + 1);
          }}>
            <FaChevronRight />
        </button>
      </div>
    </div>
  )
}

export default Reviews
