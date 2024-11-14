import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const { setuser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setuser({ username, password })
    }

    return (
        <div>
            <h2>login</h2>
            <input type='text' value={username} onChange={(e) => setUserName(e.target.value)} placeholder='username' />
            <br></br>
            <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
            <br></br>
            <button onClick={handleSubmit} type='submit'>submit</button>

        </div>
    )
}

export default Login 