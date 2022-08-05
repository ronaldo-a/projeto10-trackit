import { useState } from "react"
import styled from "styled-components"

export default function AddHabit(props) {

    const [newHabit, setNewHabit] = useState("")

    function addHabit(e) {
        e.preventDefault()

        props.setMyHabits([...props.myHabits, newHabit])
    }
    
    return (
        <AddHabitContainer>
            <form onSubmit={addHabit}>
                <input type="text" value={newHabit} placeholder="nome do hábito" required onChange={(e) => setNewHabit(e.target.value)}></input>
                <Days>
                    <Day>D</Day>
                    <Day>S</Day>
                    <Day>T</Day>
                    <Day>Q</Day>
                    <Day>Q</Day>
                    <Day>S</Day>
                    <Day>S</Day>
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
const Day = styled.div`
    width: 30px;
    height: 30px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-right: 4px;
   
    border: 1px solid #D5D5D5;

    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    color: #DBDBDB;
    text-align: center;
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