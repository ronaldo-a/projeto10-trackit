import styled from "styled-components"
import { useState, useContext } from "react"
import axios from "axios"
import logo from "../imgs/logo.png"
import { useNavigate, Link } from "react-router-dom"
import TokenContext from "../contexts/TokenContext"


export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {setToken} = useContext(TokenContext)
    let navigate = useNavigate()

    function logIn(e) {
        e.preventDefault();
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {email: email, password: password})

        promise.then((promise) => {
            setToken(promise.data.token);
            navigate("/hoje", {state: promise.data})})

        promise.catch(() => alert("Usuário não encontrado"))
    }

    return (
        <LoginContainer>
            <img src={logo} alt="logo"></img>
            <form onSubmit={logIn}>
                <input type="email" value={email} placeholder="email" required onChange={e => setEmail(e.target.value)}></input>
                <input type="password" value={password} placeholder="senha" required onChange={(e) => {setPassword(e.target.value)}}></input>
                <button type="submit">Entrar</button>
            </form>
            <Link to="/cadastro"><p>Não tem uma conta? Cadastre-se</p></Link>
        </LoginContainer>
    )
}

const LoginContainer = styled.div`
    margin-top: 68px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 180px;
        height: 178px;
        margin-bottom: 40px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-bottom: 25px;
    }

    input {
        width: 303px;
        height: 43px;
        box-sizing: border-box;
        padding-left: 11px;
        margin-bottom: 6px;

        border: 1px solid #D5D5D5;
        border-radius: 5px;

        ::placeholder {
            font-family: 'Lexend Deca', sans-serif;
            font-size: 20px;
            font-weight: 400;
            line-height: 25px;
            color: #DBDBDB;
        }
    }
    
    button {
        width: 303px;
        height: 43px;

        background-color: #52B6FF;
        border-radius: 5px;
        border: none;

        font-family: 'Lexend Deca', sans-serif;
        font-size: 21px;
        font-weight: 400;
        line-height: 26px;
        color: #FFFFFF;
    }

    p {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        color: #52B6FF;
    }
`