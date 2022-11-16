import styled from "styled-components";
import MyHabits from "./MyHabits";
import Top from "./Top";

export default function Habitos () {

    return (
        <>
            <Top />
            <Body>
                <MyHabits />
            </Body>
        </>
    )
        
        
}

const Body = styled.div`
    height: 100vh;
    background-color: #E5E5E5;
    padding-top: 98px;
    padding-left: 17px;
    padding-right: 17px;

    p {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        color: #666666;
    }
`