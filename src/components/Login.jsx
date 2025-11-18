import React from 'react'

const Login = ({login,setLogin}) => {

  return (
    <div>
        <h1>Login Page</h1>
        <button onClick={()=>setLogin(!login)}>{login?"Logout":"Login"}</button>
    </div>
  )
}

export default Login