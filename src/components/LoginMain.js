import React from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import Login from './Login'

export default function LoginMain() {
  const handleLogin = (email, password) => {
    const auth = getAuth()
      console.log(process.env)
      signInWithEmailAndPassword(auth, email, password)
        .then(console.log)
        .catch(console.error)
    }
  return (
    <Login title='sign in' handleClick={handleLogin}/>
  )
}
