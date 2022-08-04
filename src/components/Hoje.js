import { useLocation } from "react-router-dom"
import styled from "styled-components";
import logo from "../imgs/logo.png"
import check from "../imgs/check.png"

export default function Hoje() {
    let location = useLocation();

    console.log(location)


    return (
        <>
            <Top>
                <p>TrackIt</p>
                <img src={logo} alt="user"/>
            </Top>
            <Body>
                <h6>Segunda, 18/09</h6>
                <p>Nenhum hábito concluído ainda</p>
                <Habits>
                    <Habit>
                        <Text>
                            <h6>Ler 1 capítulo de livro</h6>
                            <p>Sequência atual: 3 dias</p>
                            <p>Seu recorde: 5 dias</p>
                        </Text>
                        <Checkbox>
                            <img src={check} alt="check symbol" />
                        </Checkbox>
                    </Habit>
                </Habits>
            </Body>
        </>
    )
}

const Top = styled.div`
    width: 100vw;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;

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
const Body = styled.div`
    height: 100vh;
    background-color: #E5E5E5;
    padding: 0 18px;

    h6 {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 23px;
        font-weight: 400;
        line-height: 28px;
        color: #126BA5;
        margin-top: 98px;
    }

    p {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        color: #BABABA;
    }
`
const Habits = styled.div`
    margin-top: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Habit = styled.div`
    width: 340px;
    height: 94px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 0 14px;
`
const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  
    h6 {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        color: #666666;

        margin-top: 0px;
        margin-bottom: 7px;
    }

    p {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 13px;
        font-weight: 400;
        line-height: 16px;
        color: #666666;
    }
`

const Checkbox = styled.div`
    width: 69px;
    height: 69px;
    border-radius: 5px;
    background-color: #EBEBEB;
    border: 1px solid #E7E7E7;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 35px;
        height: 28px;
    }
`