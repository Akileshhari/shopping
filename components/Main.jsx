import React from 'react'
import Carousel from './Carousel'
import RotatingText from '../Animated_Components/RotatingText'
import Productlist from './Productlist'
import Collection from './Collection'


function Main() {
  return (
    <div>
      <Carousel />
      <div className="flex justify-center items-center gap-x-2 mt-4" >
        <h1 className="text-2xl font-bold text-[#322a3e]">Shop Smart,</h1>
        <RotatingText
          texts={['Save More !', 'Trendy Picks !', 'Limited Offers !', 'Big Discounts !']}
          mainClassName="px-0  bg-[transparent] text-[#7557a3] overflow-hidden py-0 justify-center rounded-lg font-bold text-2xl"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
        
      </div>
      <Productlist/>
      <Collection/>
    </div>
  )
}

export default Main
