import { useState } from "react"
import styled from "styled-components"

export default function Day(props) {


    const [daySelected, SetDaySelected] = useState(false)

    function selectDay () {
        if (props.disabled ===  false) {
            if (props.selecteds.includes(props.dayId)) {
                SetDaySelected(false)
                let index=props.selecteds.indexOf(props.dayId)
                props.selecteds.splice(index, 1)
            } else {
                SetDaySelected(true)
                props.selecteds.push(props.dayId)
            }
        }    
    }


    return (
        <DayContainer onClick={selectDay} selected={daySelected} dayId={props.dayId}>{props.day}</DayContainer>
    )
}

const DayContainer = styled.div`
    width: 30px;
    height: 30px;
    background-color: ${props => {if (props.selected === true) {return "#CFCFCF"} else {return "#FFFFFF"}}};
    border-radius: 5px;
    margin-right: 4px;
    
    cursor: pointer;

    border: 1px solid #D5D5D5;

    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    color: ${props => {if (props.selected === true) { return "#FFFFFF"} else {return "#DBDBDB"}}};
    text-align: center;
`