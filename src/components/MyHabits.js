import styled from "styled-components"
import { useEffect, useState, useContext } from "react"
import axios from "axios"
import AddHabit from "./AddHabit"
import Footer from "./Footer"
import TokenContext from "../contexts/TokenContext"

export default function MyHabits() {

    const [addHabitCard, setAddHabitCard] = useState(false)
    const [myHabits, setMyHabits] = useState([])
    const {token} = useContext(TokenContext)
    console.log(token)

    useEffect(() => {
        const config = { headers: { Authorization: `Bearer ${token}` } }

        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)

        promise.then((promise) => {setMyHabits(promise.data)})
        console.log(myHabits)
    }, [])

    //UI
    if (myHabits.length === 0 && addHabitCard === false) {
        return (
            <>
                <MyHabitsContainer>
                    <h6>Meus hábitos</h6>
                    <button onClick={() => setAddHabitCard(!addHabitCard)}>+</button>
                </MyHabitsContainer>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                <Footer />
            </>

        )
    } else if (myHabits.length !== 0 && addHabitCard === false) {
        return (
            <>
                <MyHabitsContainer>
                    <h6>Meus hábitos</h6>
                    <button onClick={() => setAddHabitCard(!addHabitCard)}>+</button>
                </MyHabitsContainer>
                <div>
                    {myHabits.map((habit) => <div>{habit.name}</div>)}
                </div>
                <Footer />
            </>
        )
    } else if (myHabits.length === 0 && addHabitCard === true) {
        return (
            <>
                <MyHabitsContainer>
                    <h6>Meus hábitos</h6>
                    <button onClick={() => setAddHabitCard(!addHabitCard)}>+</button>
                </MyHabitsContainer>
                <AddHabit myHabits={myHabits} setMyHabits={setMyHabits}/>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                <Footer />
            </>
        )
    } else {
        return (
            <>
            <MyHabitsContainer>
                <h6>Meus hábitos</h6>
                <button onClick={() => setAddHabitCard(!addHabitCard)}>+</button>
            </MyHabitsContainer>
            <AddHabit myHabits={myHabits} setMyHabits={setMyHabits}/>
            <div>
                    {myHabits.map((habit) => <div>{habit.name}</div>)}
            </div>
            <Footer />
        </>
        )
}
}

const MyHabitsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 98px;
    margin-bottom: 28px;

    h6 {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 23px;
        font-weight: 400;
        line-height: 28px;
        color: #126BA5;
    }

    button {
        width: 40px;
        height: 35px;
        border-radius: 4.60px;
        background-color: #52B6FF;
        border: none;

        font-family: 'Lexend Deca', sans-serif;
        font-size: 27px;
        font-weight: 400;
        line-height: 34px;
        color: #FFFFFF;
    }
`