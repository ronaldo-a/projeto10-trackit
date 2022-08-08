import styled from "styled-components";
import TodayHabit from "./TodayHabit";
import Footer from "./Footer";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import TokenContext from "../contexts/TokenContext";
import ImgContext from "../contexts/ImgContext";
import ProgressContext from "../contexts/ProgressContext";
import dayjs from 'dayjs'
import "dayjs/locale/pt-br"
import updateLocale from "dayjs/plugin/updateLocale";

export default function Hoje() {

    const {token} = useContext(TokenContext)
    const {img} = useContext(ImgContext)
    const {progress, setProgress} = useContext(ProgressContext)
    const [todayHabits, setTodayHabits] = useState([])
    let counter = 0
    let text = ""
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        const config = { headers: { Authorization: `Bearer ${token}` } }

        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)

        promise.then((promise) => {setTodayHabits(promise.data)})
    }, [update])

    dayjs.extend(updateLocale);
    dayjs.updateLocale("pt-br", {
        weekdays: [
            "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"
        ]
    })
    const day = dayjs().locale("pt-br").format("dddd, DD/MM");
    
    //Porcentagem de atividades diárias concluídas
    for (let i=0; i < todayHabits.length; i++) {
        if (todayHabits[i].done === true) {
            counter = counter + 1
        }
        setProgress(Math.round((counter/todayHabits.length)*100))
    }
    
    if (counter === 0) {
        text = "Nenhum hábito concluído ainda"
    } else {
        text = `${progress}% dos hábitos concluídos`
    }
    
    return (
        <>
            <Top>
                <p>TrackIt</p>
                <img src={img} alt="user"/>
            </Top>
            <Body text={text.length}>
                <h6>{day}</h6>
                <p>{text}</p>
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
const Body = styled.div`
    height: 100vmax;
    background-color: #E5E5E5;
    padding: 98px 17px 0 17px;

    h6 {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 23px;
        font-weight: 400;
        line-height: 28px;
        color: #126BA5;
    }

    p {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        color: ${props => {if (props.text <= 27) {return "#8FC549"} else {return "#BABABA"}}}
    }
`
const Habits = styled.div`
    margin-top: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
