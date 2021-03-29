import React, { Fragment } from 'react'

const Sushi = (props) => {

  const {onEatSushi, sushi, isSushiEaten } = props
  const {img_url, name, price } = sushi

  const handleEatSushi = () => {
    onEatSushi(props.sushi)
  }

  const sushiStatus = () => {
    return isSushiEaten(sushi)
  }

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={handleEatSushi}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          sushiStatus() ?
            null
          :
            <img src={img_url } width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi