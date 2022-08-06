import styled from "styled-components"
import { useEffect, useState, useContext } from "react"
import axios from "axios"
import AddHabit from "./AddHabit"
import Footer from "./Footer"
import TokenContext from "../contexts/TokenContext"
import Habit from "./Habit"

export default function MyHabits() {

    const [addHabitCard, setAddHabitCard] = useState(false)
    const [myHabits, setMyHabits] = useState([])
    const {token} = useContext(TokenContext)
    console.log(token)
    const [again, setAgain] = useState(false)

    function deleteHabit(habitId) {
        const confirmation = prompt(`Se deseja realmente apagar o hábito, digite "sim"`)
        
        if (confirmation === "sim" || confirmation === "Sim" || confirmation === "SIM") {
            const config = { headers: { Authorization: `Bearer ${token}` } }

            const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}`, config)
        
            promise.then(console.log("DELETOUUU"))
        }
    }

    useEffect(() => {
        
        const config = { headers: { Authorization: `Bearer ${token}` } }

        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)

        promise.then((promise) => {setMyHabits(promise.data)})
        console.log(myHabits)
    }, [again])

    //UI
    if (myHabits.length === 0 && addHabitCard === false) {
        return (
            <>
                <Header>
                    <h6>Meus hábitos</h6>
                    <button onClick={() => setAddHabitCard(!addHabitCard)}>+</button>
                </Header>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                <Footer />
            </>

        )
    } else if (myHabits.length !== 0 && addHabitCard === false) {
        return (
            <>
                <Header>
                    <h6>Meus hábitos</h6>
                    <button onClick={() => setAddHabitCard(!addHabitCard)}>+</button>
                </Header>
                <MyHabitsContainer>
                    {myHabits.map((habit) => <Habit name={habit.name} days={habit.days} id={habit.id} deleteHabit={deleteHabit} key={habit.id}/>)}
                </MyHabitsContainer>
                <Footer />
            </>
        )
    } else if (myHabits.length === 0 && addHabitCard === true) {
        return (
            <>
                <Header>
                    <h6>Meus hábitos</h6>
                    <button onClick={() => setAddHabitCard(!addHabitCard)}>+</button>
                </Header>
                <AddHabit again={again} setAgain={setAgain} setAddHabitCard={setAddHabitCard} addHabitCard={addHabitCard}/>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                <Footer />
            </>
        )
    } else {
        return (
            <>
            <Header>
                <h6>Meus hábitos</h6>
                <button onClick={() => setAddHabitCard(!addHabitCard)}>+</button>
            </Header>
            <AddHabit again={again} setAgain={setAgain} setAddHabitCard={setAddHabitCard} addHabitCard={addHabitCard}/>
            <MyHabitsContainer>
                {myHabits.map((habit) => <Habit name={habit.name} days={habit.days}/>)}
            </MyHabitsContainer>
            <Footer />
        </>
        )
}
}

const Header = styled.div`
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
const MyHabitsContainer = styled.div`
`