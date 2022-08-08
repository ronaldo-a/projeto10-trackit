import styled from "styled-components"
import { useContext } from "react"
import ImgContext from "../contexts/ImgContext"
import Footer from "./Footer"

export default function Historico() {

    const {img} = useContext(ImgContext)

    return (
        <>
            <Top>
                <p>TrackIt</p>
                <img src={img} alt="user"/>
            </Top>
            <Body>
                <Header>
                    <h6>Histórico</h6>
                </Header>
                    <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Body>
            <Footer />
        </>
    )
}

const Top = styled.div`
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

    p {
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
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;

    h6 {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 23px;
        font-weight: 400;
        line-height: 28px;
        color: #126BA5;
    }
`
const Body = styled.div`
    height: 100vh;
    background-color: #E5E5E5;
    padding: 98px 0 0 18px;

    p {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        color: #666666;
    }
`