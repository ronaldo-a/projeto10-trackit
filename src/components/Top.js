import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Top () {

    const [visible, setVisible] = useState(false)
    const img = localStorage.getItem("img")
    let navigate = useNavigate();

    function logOut() {
        localStorage.removeItem("token");
        localStorage.removeItem("img");
        navigate("/");
    }
    
    return (
        <TopContainer>
            <h6>TrackIt</h6>
            <img src={img} alt="user" onClick={() => setVisible(!visible)}/>
            <LogOutWindow visible={visible}>
                <p onClick={logOut}>Sair</p>
            </LogOutWindow>
        </TopContainer>    
    )        
}

const TopContainer = styled.div`
    width: 100vw;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 18px;
    justify-content: space-between;

    h6 {
        font-family: 'Playball', cursive;
        font-size: 39px;
        font-weight: 400;
        line-height: 49px;
        color: #FFFFFF;
    }

    img {
        width: 51px;
        height: 51px;
        border-radius: 98px;
    }
`
const LogOutWindow = styled.div`
    width: 60px;
    height: 30px;
    background-color: beige;
    display: ${props => props.visible ? "flex" : "none"};
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 65px;
    right: 16px;
    border-radius: 5px;
    box-shadow: 2px 2px 5px black;

    p {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 49px;
        color: #666666;
    }
`