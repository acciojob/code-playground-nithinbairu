import React from 'react'

const Login = ({login,setLogin}) => {

  return (
    <div>
        <h1>Log In</h1>
        {
            login?(<div>
                <button onClick={()=>setLogin(false)}>Log Out</button><p>Log Out</p>
            </div>):(<button onClick={()=>setLogin(true)}>Log In</button>)
        }
    </div>
  )
}

export default Login