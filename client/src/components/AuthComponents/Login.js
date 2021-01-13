import React from 'react'
import './Login.css'

const Login = () => {

    
    const register = () => {}
    const loginToApp = () => {}
    return (
        <div className="login">
            <h1>EXPOSIUM</h1>
            <form>
                <input placeholder="Email" type="email" />

                <input placeholder="Password***" type="password" />
            <button type="submit" onClick={loginToApp}>Sign in</button>
            </form>

            <p>Not registered?<span className="login__register" onClick={register}>Register here</span></p>
        </div>
    )
}

export default Login
