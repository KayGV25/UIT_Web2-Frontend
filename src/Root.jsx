import { Link } from "react-router-dom"
import NavBar from "./components/NavBar"
import { DarkThemeToggle, Flowbite } from "flowbite-react"
export default function Root(){
    return(
        <>
            <NavBar />
            <Link className="newRecipe relative group" to="/upload" aria-label="New Recipe">
                <img src="/plus.svg" className="size-4"/>
                <p className="text-black text-center absolute right-12 w-24 bg-slate-50 rounded-md hidden group-hover:block">New Recipe</p>
            </Link>
        </>
    )
}