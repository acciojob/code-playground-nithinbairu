import React from 'react'

const PlayGround = ({login}) => {
  return (
    <div>
        {
            login?<p>Hi welcome to code playground</p>:<p>Page not found</p>
        }
    </div>
  )
}

export default PlayGround