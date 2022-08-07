import { useContext, useState } from "react"
import axios from "axios"
import styled from "styled-components"
import Day from "./Day"
import { ThreeDots } from "react-loader-spinner"
import TokenContext from "../contexts/TokenContext"

export default function AddHabit(props) {

    const [disabled, setDisabled] = useState(false)
    const [botao, setBotao] = useState("Salvar")
    const {token} = useContext(TokenContext)
    let selecteds = []

    const days = [{day:"D", dayId:0}, 
        {day: "S", dayId: 1}, 
        {day: "T", dayId: 2}, 
        {day: "Q", dayId: 3}, 
        {day: "Q", dayId: 4}, 
        {day: "S", dayId: 5}, 
        {day: "S", dayId: 6}]

    function addHabit(e) {
        e.preventDefault()

        setDisabled(true)
        setBotao(<ThreeDots color="#FFFFFF" height={30} width={30}/>)

        if (selecteds.length !== 0 && props.newHabit !== "") {
            const config = { headers: { Authorization: `Bearer ${token}` } }
            const body = {name: props.newHabit, days: selecteds}

            const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config)
        
            promise.then(() => {props.setAgain(!props.again); props.setAddHabitCard(!props.addHabitCard); props.setNewHabit(""); selecteds=[]; setDisabled(false); setBotao("Salvar")})
            promise.catch((error) => {alert(error.response.data.message); setDisabled(false); setBotao("Salvar")} )
        } else {
            alert("Deve ser selecionado pelo menos um dia")
        }
    }
    
    return (
        <AddHabitContainer addHabitCard={props.addHabitCard} disabled={disabled}>
            <form onSubmit={addHabit}>
                <input type="text" value={props.newHabit} placeholder="nome do hábito" required onChange={(e) => props.setNewHabit(e.target.value)}></input>
                <Days>
                    {days.map((day) => <Day day={day.day} dayId={day.dayId} selecteds={selecteds} key={day.dayId}/>)}
                </Days>
                <Buttons disabled={disabled}>
                    <div onClick={() => props.setAddHabitCard(!props.addHabitCard)}>Cancelar</div>
                    <button type="submit">{botao}</button>
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
    margin-bottom: 30px;
    position: relative;

    box-sizing: border-box;
    padding: 18px;

    input {
        width: 303px;
        height: 45px;
        box-sizing: border-box;
        padding-left: 11px;
        margin-bottom: 8px;
        background-color: ${props => {if (props.disabled === true) {return "#F2F2F2"} else {return "#FFFFFF"}}};

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
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4.60px;
        background-color: #52B6FF;
        opacity: ${props => {if (props.disabled === true) {return 0.7}}};
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