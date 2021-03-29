import React from 'react'

const MoreButton = (props) => {
  const {onGetNextSushi} = props
    return <button onClick={onGetNextSushi}>
            More sushi!
          </button>
}

export default MoreButton