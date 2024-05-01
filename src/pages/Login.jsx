import React from 'react'

const Login = () => {
  return (
    <>
        <div className="login">
            <div className="container">
                <div className="login-form">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username"/>
                        <input type="password" placeholder="Password"/>
                        <button>Log in</button>
                    </form>
                </div>
            </div>
            <div className="login-image">
                <img src="" alt="login"/>
            </div>
        </div>
    
    </>
  )
}

export default Login