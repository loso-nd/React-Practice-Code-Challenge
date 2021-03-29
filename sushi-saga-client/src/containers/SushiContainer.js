import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => { 
  const {onGetNextSushi} = props; //deconstruct

  const renderSushi = () => {
  const {currentSushi, onEatSushi, isSushiEaten} = props; //deconstruct
    return currentSushi.map(sushi => {
      // pass in props and returns one sushi
      return <Sushi sushi={sushi} 
        onEatSushi={onEatSushi} 
        isSushiEaten={isSushiEaten}/>
    })
  }
  return (
    <Fragment>
      <div className="belt">
        { renderSushi() }
        {/* Not able to to deconstruct {props.onGetNextSushi} */}
        <MoreButton onGetNextSushi={onGetNextSushi}/> 
      </div>
    </Fragment>
  )
}

export default SushiContainer