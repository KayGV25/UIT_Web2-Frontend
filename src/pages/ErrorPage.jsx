import "../index.css"

function ErrorPage(){
    return(
        <div className="h-screen flex justify-center items-center">
            <div className="card">
                <h1 className="text-6xl pb-3">Ooooops !!!!</h1>
                <p className="text-3xl pt-3">Error 404 NO PAGE FOUND</p>
            </div>
        </div>
    )
}

export default ErrorPage;