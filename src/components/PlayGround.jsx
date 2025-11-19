
import React from 'react'
const PlayGround = ({login}) => {
  return (
    <div className="main-container">
      { login ? (
        <>
          <div></div>
          <div></div>
          <p>Hi welcome to code playground</p>
        </>
      ) : (
        <p>Page not found</p>
      )}
    </div>
  )
}
export default PlayGround
