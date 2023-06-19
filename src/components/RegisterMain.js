import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import Login from './Login'

export default function RegisterMain() {
  const handleRegister = (email, password) => {
     const auth = getAuth()
      createUserWithEmailAndPassword(auth, email, password)
        .then(console.log)
        .catch(console.error)
    }
  return (
    <Login title='register' handleClick={handleRegister}/>
  )
}
