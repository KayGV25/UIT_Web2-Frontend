import { Link } from "react-router-dom"
import NavBar from "./components/NavBar"
export default function Root(){
    return(
        <>
            <NavBar />

            <Link className="newRecipe">
                <img src="/plus.svg" className="size-4"/>
            </Link>
        </>
    )
}