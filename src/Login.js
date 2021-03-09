import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import {auth, provider} from './firebase'

function Login() {
    const signIn = () =>{
        auth.signInWithPopup(provider)
           .then(result =>{
               console.log(result)
           } )
           .catch(error => {
               alert(error.message)
           }) 

    }
    return (
        <div className="login">
            <div className="login__container">
                <img
                 src="https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png"
                 alt=""
                 />
                 <h1>Sign In To Nader Elhaj HQ</h1>
                 <p>naderelhaj.slack.com</p>
                 <Button onClick= {signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login
