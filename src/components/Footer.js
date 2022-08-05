import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Footer() {
    
    return (
        <FooterContainer>
            <Link to="/habitos"><div>Hábitos</div></Link>
            <div>Histórico</div>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    width: 100vw;
    height: 70px;
    box-sizing: border-box;
    padding: 0 36px 0 36px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 0;

    div {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        color: #52B6FF;
        text-align: center;
    }
`