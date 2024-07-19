import { Link } from "react-router-dom"
import NavBar from "./components/NavBar"
import { DarkThemeToggle, Flowbite } from "flowbite-react"
export default function Root(){
    return(
        <>
            <NavBar />
            <Link className="newRecipe" to="/upload">
                <img src="/plus.svg" className="size-4"/>
            </Link>
        </>
    )
}