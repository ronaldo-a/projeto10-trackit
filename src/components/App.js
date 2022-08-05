import "../reset.css"
import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Login"
import Hoje from "./Hoje"
import Cadastro from "./Cadastro"
import Habitos from "./Habitos"
import TokenContext from "../contexts/TokenContext"

export default function App() {

    const [token, setToken] = useState("") 
    const tokenValue = {token, setToken}

    return (
        <BrowserRouter>
            <TokenContext.Provider value={tokenValue}>
            <Routes>
                <Route path="/" element={<Login />}> </Route>
                <Route path="/hoje" element={<Hoje />}> </Route>
                <Route path="/cadastro" element={<Cadastro />}> </Route>
                <Route path="/habitos" element={<Habitos />}> </Route>
            </Routes>
            </TokenContext.Provider>
        </BrowserRouter>
    )
}