import CustomInput from "../components/CustomInput"
import React, {Component, useState} from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const BE_BASE_URL = "https://uit-web2-backend.onrender.com"
export default function LoginPage(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    
    function newUsername(data){
        setUsername(data);
    }
    function newPassword(data){
        setPassword(data);
    }
    function handleSubmit(e) {
        e.preventDefault();
        const data = {
            username: e.target[0].value,
            password:  e.target[1].value
        }
        setLoading(true);
        fetch(BE_BASE_URL + "/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => {
            setLoading(false);
            if (response.status == 400) {
                alert("Wrong password")
                window.location.reload()
            }
            if (response.status == 200 || response.ok === true) {
                response.json().then((response) => {
                    window.sessionStorage.setItem("username", response.username)
                    window.location.href = "/"

                })
            }
        })
    }

    if(loading) return <Loading />

    return(
        <div className="h-full grid">
            <div className="flex justify-center align-middle my-auto">
                <div className="bg-zinc-100 rounded-lg px-20 py-20 text-gray-900 min-h-96 h-auto">
                    <h1 className="text-center text-3xl font-bold">Login</h1>
                    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col">
                        <CustomInput name="Username" type="text" value={newUsername}/>
                        <CustomInput name="Password" type="password" value={newPassword}/>
                        <button type="submit" className="bg-slate-800 text-gray-100 w-fit px-4 py-2 mx-auto rounded-sm">Submit</button>
                    </form>
                    <div className="my-4 text-center">
                        <Link to="/signup" className="mx-auto w-12 text-gray-400 underline underline-offset-2 hover:underline-offset-4">Create account</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}