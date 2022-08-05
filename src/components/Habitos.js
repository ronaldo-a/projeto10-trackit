import styled from "styled-components";
import logo from "../imgs/logo.png";
import { useState } from "react";
import AddHabit from "./AddHabit";
import MyHabits from "./MyHabits";


export default function Habitos () {

    return (
        <>
            <Top>
                <p>TrackIt</p>
                <img src={logo} alt="user"/>
            </Top>
            <Body>
                <MyHabits />
                <AddHabit />
            </Body>
        </>
    )
        
        
}

const Top = styled.div`
    width: 100vw;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;

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
    height: 100vh;
    background-color: #E5E5E5;
    padding: 0 18px;

    p {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        color: #666666;
    }
`