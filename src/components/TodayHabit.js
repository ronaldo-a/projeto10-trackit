import check from "../imgs/check.png"
import styled from "styled-components"
import axios from "axios"
import { useContext, useState } from "react"
import TokenContext from "../contexts/TokenContext"

export default function TodayHabit(props) {

    const [checked, setChecked] = useState(props.done)
    const {token} = useContext(TokenContext)

    function checkHabit() {

        if ( checked === false ) {

            const config = { headers: { Authorization: `Bearer ${token}` } }
            const body = {}

            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}/check`, body, config)
        
            promise.then((promise) => {setChecked(!checked); props.setUpdate(!props.update)})

        } else {

            const config = { headers: { Authorization: `Bearer ${token}` } }
            const body = {}

            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${props.id}/uncheck`, body, config)
        
            promise.then((promise) => {setChecked(!checked); props.setUpdate(!props.update)})
        }

    } 

  
    return (
        <Habit>
            <Text>
                <h5>{props.name}</h5>
                <Current done={props.done}>Sequência atual: {props.currentSequence}</Current>
                <Highest current={props.currentSequence} highest={props.highestSequence}>Seu recorde: {props.highestSequence}</Highest>
            </Text>
            <Checkbox done={props.done} onClick={checkHabit}>
                <img src={check} alt="check symbol" />
            </Checkbox>
        </Habit>
    )  
}

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
    margin-bottom: 10px;
`
const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  
    h5 {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        color: #666666;

        margin-top: 0px;
        margin-bottom: 7px;
    }
`
const Current = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    color: ${props => {if (props.done) {return "#8FC549"} else {return "#666666"}}};
`
const Highest = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    color: ${props => {if (props.current === props.highest && props.highest !== 0) {return "#8FC549"} else {return "#666666"}}};
`
const Checkbox = styled.div`
    width: 69px;
    height: 69px;
    border-radius: 5px;
    background-color: ${props => {if (props.done === false) {return "#EBEBEB"} else {return "#8FC549"}} };
    border: 1px solid #E7E7E7;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 35px;
        height: 28px;
    }
`