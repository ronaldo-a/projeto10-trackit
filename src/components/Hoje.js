import styled from "styled-components";
import TodayHabit from "./TodayHabit";
import Footer from "./Footer";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import TokenContext from "../contexts/TokenContext";
import ImgContext from "../contexts/ImgContext";

export default function Hoje() {

    const {token} = useContext(TokenContext)
    const {img} = useContext(ImgContext)
    const [todayHabits, setTodayHabits] = useState([])
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        const config = { headers: { Authorization: `Bearer ${token}` } }

        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)

        promise.then((promise) => {setTodayHabits(promise.data)})
    }, [update])
    
    return (
        <>
            <Top>
                <p>TrackIt</p>
                <img src={img} alt="user"/>
            </Top>
            <Body>
                <h6>Segunda, 18/09</h6>
                <p>Nenhum hábito concluído ainda</p>
                <Habits>
                    {todayHabits.map((habit) => <TodayHabit name={habit.name} 
                    done={habit.done} 
                    currentSequence={habit.currentSequence}
                    highestSequence={habit.highestSequence}
                    id = {habit.id}
                    update={update}
                    setUpdate={setUpdate}
                    key = {habit.id}/>)}
                </Habits>
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
