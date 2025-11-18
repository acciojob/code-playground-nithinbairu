import React from 'react'

const Login = ({login,setLogin}) => {

  return (
    <div>
        <h1>Log In</h1>
        {
            login?(<button onClick={()=>setLogin(false)}>Log Out</button>):(<button onClick={()=>setLogin(true)}>Log In</button>)
        }
    </div>
  )
}

export default Login