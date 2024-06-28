import isMobile from "../hooks/isMobile";
import LoginPage from "./LoginPage";
import NavBar from "../components/NavBar";

function IndexPage(){
    return(
        <>
            <div>
                <h1 className="card">Home Page</h1>
                <LoginPage />
            </div>
        </>
    )
}

export default IndexPage;