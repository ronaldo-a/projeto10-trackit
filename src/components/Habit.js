import styled from "styled-components"
import trash from "../imgs/trash.png"

export default function Habit(props) {

    const days = [{day:"D", dayId:0}, 
        {day: "S", dayId: 1, selected: false}, 
        {day: "T", dayId: 2, selected: false}, 
        {day: "Q", dayId: 3, selected: false}, 
        {day: "Q", dayId: 4, selected: false}, 
        {day: "S", dayId: 5, selected: false}, 
        {day: "S", dayId: 6, selected: false}]

    days.map((day => {for (let i=0; i < props.days.length; i++) {
        if (day.dayId === props.days[i]) {day.selected = true}
    }}))

    return (
        <HabitContainer>
            <p>{props.name}</p>
            <Days>
               {days.map((day) => <DayContainer dayId={day.dayId} selected={day.selected} key={day.dayId}>{day.day}</DayContainer>)} 
            </Days>
            <img src={trash} onClick={() => props.deleteHabit(props.id)} alt="deletar hábito"/>
        </HabitContainer>
    )
}

const HabitContainer = styled.div`
    width: 340px;
    min-height: 91px;
    border-radius: 5px;
    background-color: #FFFFFF;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    position: relative;
    

    box-sizing: border-box;
    padding: 13px;


    p {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        color: #666666;
        margin-bottom: 10px;
    }

    img {
        width: 13px;
        height: 15px;
        position: absolute;
        top: 11px;
        right: 10px;
    }
`
const Days = styled.div`
    display: flex;
`
const DayContainer = styled.div`
    width: 30px;
    height: 30px;
    background-color: ${props => {if (props.selected === true) {return "#CFCFCF"} else {return "#FFFFFF"}}};
    border-radius: 5px;
    margin-right: 4px;
   
    border: 1px solid #D5D5D5;

    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    color: ${props => {if (props.selected === true) { return "#FFFFFF"} else {return "#DBDBDB"}}};
    text-align: center;
`
