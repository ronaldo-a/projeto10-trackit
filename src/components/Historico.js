import styled from "styled-components"
import Footer from "./Footer"
import Top from "./Top"

export default function Historico() {

    return (
        <>
            <Top />
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