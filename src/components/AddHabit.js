import { useState, useContext } from "react"
import axios from "axios"
import styled from "styled-components"
import Day from "./Day"
import TokenContext from "../contexts/TokenContext"

export default function AddHabit(props) {

    const {token} = useContext(TokenContext)
    const selecteds = []

    const days = [{day:"D", dayId:0}, 
        {day: "S", dayId: 1}, 
        {day: "T", dayId: 2}, 
        {day: "Q", dayId: 3}, 
        {day: "Q", dayId: 4}, 
        {day: "S", dayId: 5}, 
        {day: "S", dayId: 6}]

    const [newHabit, setNewHabit] = useState("")

    function addHabit(e) {
        e.preventDefault()

        const config = { headers: { Authorization: `Bearer ${token}` } }
        const body = {name: newHabit, days: selecteds}
        console.log(body)

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config)
        promise.then(console.log("ENVIO DO HABITO FOI"))
    }
    
    return (
        <AddHabitContainer>
            <form onSubmit={addHabit}>
                <input type="text" value={newHabit} placeholder="nome do hábito" required onChange={(e) => setNewHabit(e.target.value)}></input>
                <Days>
                    {days.map((day) => <Day day={day.day} dayId={day.dayId} selecteds={selecteds}/>)}
                </Days>
                <Buttons>
                    <div>Cancelar</div>
                    <button type="submit">Salvar</button>
                </Buttons>
            </form>
        </AddHabitContainer>
    )
}

const AddHabitContainer = styled.div`

    width: 340px;
    height: 180px;
    border-radius: 5px;
    background-color: #FFFFFF;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    

    box-sizing: border-box;
    padding: 18px;

    input {
        width: 303px;
        height: 45px;
        box-sizing: border-box;
        padding-left: 11px;
        margin-bottom: 8px;

        border: 1px solid #D5D5D5;
        border-radius: 5px;

        ::placeholder {
            font-family: 'Lexend Deca', sans-serif;
            font-size: 20px;
            font-weight: 400;
            line-height: 25px;
            color: #DBDBDB;
        }
    }
`
const Days = styled.div`
    display: flex;

`
const Buttons = styled.div`
    display: flex;
    justify-content: right;
    align-items: baseline;
    position: absolute;
    bottom: 18px;
    right: 18px;

    div {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        color: #52B6FF;
    }

    button {
        width: 84px;
        height: 35px;
        border-radius: 4.60px;
        background-color: #52B6FF;
        border: none;
        margin-left: 23px;

        font-family: 'Lexend Deca', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        color: #FFFFFF;
        text-align: center;
    }
`