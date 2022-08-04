import { useLocation } from "react-router-dom"

export default function Hoje() {
    let location = useLocation();



    return (
        {location}
    )
}