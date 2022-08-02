import "../reset.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Login"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
            </Routes>
        </BrowserRouter>
    )
}