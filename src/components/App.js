import "../reset.css"
import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Login"
import Hoje from "./Hoje"
import Cadastro from "./Cadastro"
import Habitos from "./Habitos"
import TokenContext from "../contexts/TokenContext"
import ImgContext from "../contexts/ImgContext"

export default function App() {

    const [token, setToken] = useState("")
    const [img, setImg] = useState("")

    return (
        <BrowserRouter>
            <TokenContext.Provider value={{token, setToken}}>
            <ImgContext.Provider value={{img, setImg}}>
            <Routes>
                <Route path="/" element={<Login />}> </Route>
                <Route path="/hoje" element={<Hoje />}> </Route>
                <Route path="/cadastro" element={<Cadastro />}> </Route>
                <Route path="/habitos" element={<Habitos />}> </Route>
            </Routes>
            </ImgContext.Provider>
            </TokenContext.Provider>
        </BrowserRouter>
    )
}