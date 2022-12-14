import styled from "styled-components"
import { Link } from "react-router-dom"
import { useContext } from "react";
import ProgressContext from "../contexts/ProgressContext";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';


export default function Footer() {

    const {progress} = useContext(ProgressContext)
    
    return (
        <FooterContainer>
            <Link to="/habitos" style={{textDecoration: "none"}}><div>Hábitos</div></Link>
            <div style={{ width: 91, height: 91, marginBottom: 40}}>
            <Link to="/hoje">
            <CircularProgressbar
                value={progress}
                text={"Hoje"}
                background
                backgroundPadding={6}
                styles={buildStyles({
                backgroundColor: "#3e98c7",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent"
                })}
            />
            </Link>
            </div>
            <Link to="/historico" style={{textDecoration: "none"}}><div>Histórico</div></Link>
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
        text-decoration: none;
    }
`