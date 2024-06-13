import { useRouteError } from "react-router-dom";
import "../index.css"
import NavBar from "../components/NavBar";

function ErrorPage(){
    const error = useRouteError();
    console.log(error);
    return(
        <>
        <NavBar />
        <div className="h-screen flex justify-center items-center">
            <div className="card">
                <h1 className="text-6xl pb-3">Ooooops !!!!</h1>
                <p className="text-3xl pt-3">{error.status} {error.statusText || error.message}</p>
            </div>
        </div>
        </>
    )
}

export default ErrorPage;