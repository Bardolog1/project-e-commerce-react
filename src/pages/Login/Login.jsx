import React from 'react';
import './Login.css';
import InputDefault from '../../components/InputDefault/InputDefault.jsx';

const Login = () => {
  return (
    <>
        <div className="login">
            <div className="container">
                <div className="login-form">
                    <h1>Login</h1>
                    <form>
                        <InputDefault type="text" placeholder="Username"  darkMode={true}/>
                        <InputDefault type="password" placeholder="password"  darkMode={true}/>
                       
                    </form>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Login

/*  <input type="text" placeholder="Username"/>
                        <input type="password" placeholder="Password"/>
                        <button>Log in</button>*/