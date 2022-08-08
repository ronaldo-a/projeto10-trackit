import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"
import logo from "../imgs/logo.png"
import { ThreeDots } from "react-loader-spinner"

export default function Cadastro() {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userName, setUserName] = useState("")
    const [userImg, setUserImg] = useState("")
    const [disabled, setDisabled] = useState(false)
    const [botao, setBotao] = useState("Cadastrar")

    function registrate(e) {
        e.preventDefault();

        setBotao(<ThreeDots color="#FFFFFF" height={50} width={50}/>)
        setDisabled(true)

        const body = {email: email, name: userName, image: userImg, password: password};
        
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body);
        
        promise.then(() => navigate("/"));

        promise.catch((promise) => {alert(promise.response.data.message); setDisabled(false); setBotao("Cadastrar")})
    }

    return (
        <RegistrationContainer disabled={disabled}>
            <img src={logo} alt="logo"></img>
            <form onSubmit={registrate}>
                <input type="email" value={email} placeholder="email" required onChange={e => setEmail(e.target.value)}></input>
                <input type="password" value={password} placeholder="senha" required onChange={(e) => {setPassword(e.target.value)}}></input>
                <input type="name" value={userName} placeholder="nome" required onChange={e => setUserName(e.target.value)}></input>
                <input type="url" value={userImg} placeholder="foto" required onChange={(e) => {setUserImg(e.target.value)}}></input>
                <button type="submit">{botao}</button>
            </form>
            <Link to="/" style={{textDecoration: "none"}}><p>Já tem uma conta? Faça login!</p></Link>
        </RegistrationContainer>
    )
}

const RegistrationContainer = styled.div`
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
        background-color: ${props => {if (props.disabled === true) {return "#D4D4D4"} else {return "#FFFFFF"}}};

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
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: #52B6FF;
        border-radius: 5px;
        border: none;
        opacity: ${props => {if (props.disabled === true) {return 0.7}}};

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
