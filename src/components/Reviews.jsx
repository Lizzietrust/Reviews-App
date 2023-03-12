import React, { useState } from 'react'
import Review from './Review'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Reviews = () => {
    const [activeElm, setActiveElm] = useState(0);

    const reviewItems = [
        {
          id: 1,
          img: require("../images/anna.jpg"),
          name: "Anna Johnson",
          title: "WEB DESIGNER",
          desc: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal"
        },
  
        {
          id: 2,
          img: require("../images/bill.jpg"),
          name: "Bill Anderson",
          title: "THE BOSS",
          desc: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
        },
  
        {
          id: 3,
          img: require("../images/peter.jpg"),
          name: "Peter Jones",
          title: "INTERN",
          desc: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
        },
  
        {
          id: 4,
          img: require("../images/susan.jpg"),
          name: "Susan Smith",
          title: "WEB DEVELOPER",
          desc: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
        }
      ]
    
      const updateElm = (newElm) => {
        if (newElm < 0) {
          newElm = 0;
        } else if (newElm >= reviewItems.length) {
          newElm = reviewItems.length - 1;
        }
    
        setActiveElm(newElm);
      };

  return (
    <div className='reviews'>
      <div className="detail" style={{ transform: `translate(-${activeElm * 100}%)`
     }}>
        {reviewItems.map((item) => {
            return <Review item={item} width={"100%"}/>
        })}
      </div>
     <div className="reviewbtns">
        <button className="icon-left" onClick={() => {
            updateElm(activeElm - 1);
          }}>
            <FaChevronLeft /> 
        </button>
        <button className="icon-right"
        onClick={() => {
            updateElm(activeElm + 1);
          }}>
            <FaChevronRight />
        </button>
      </div>
    </div>
  )
}

export default Reviews
