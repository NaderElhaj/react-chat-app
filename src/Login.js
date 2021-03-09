import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
function Login() {
    return (
        <div className="login">
            <div className="login__container">
                <img
                 src="https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png"
                 alt=""
                 />
                 <h1>Sign In To Nader Elhaj HQ</h1>
                 <p>naderelhaj.slack.com</p>
                 <Button>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login
