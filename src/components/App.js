import "../reset.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Login"
import Hoje from "./Hoje"
import Cadastro from "./Cadastro"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/hoje" element={<Hoje />}></Route>
                <Route path="/cadastro" element={<Cadastro />}></Route>
            </Routes>
        </BrowserRouter>
    )
}