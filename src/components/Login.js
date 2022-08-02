import logo from "../imgs/logo.png"
import { useState } from "react"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>
            <img src={logo} alt="logo"></img>
            <input type="email" value={email} placeholder="email" required onChange={e => setEmail(e.target.value)}></input>
            <input type="password" value={password} placeholder="senha" required onChange={(e) => {setPassword(e.target.value)}}></input>
        </>
    )
}