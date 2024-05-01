import React from 'react';
import './Login.css';
import InputDefault from '../../components/InputDefault/InputDefault.jsx';
import TextDefault from '../../components/TextDefault/TextDefault.jsx';

const Login = () => {
  return (
    <>
        <div className="login">
            <div className="container">
                <div className="login-form">
                    <TextDefault type="title" darkMode={true}>Login</TextDefault>
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

