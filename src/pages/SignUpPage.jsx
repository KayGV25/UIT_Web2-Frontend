import CustomInput from "../components/CustomInput"
import React, {Component, useState} from "react";
import { Link } from "react-router-dom";

export default function SignUpPage() {
        const [username, setUsername] = useState("")
        const [password, setPassword] = useState("")
        const [confirmPassword, setConfirmPassword] = useState("")
        const [loading, setLoading] = useState(false);

        function handleSubmit(e) {
            e.preventDefault();
            const data = {
                username: e.target[0].value,
                password:  e.target[1].value,
                confirmPassword:  e.target[2].value
            }
            if(data.password !== data.confirmPassword) {
                alert("Passwords do not match");
                return;
            }
            setLoading(true);
            fetch(import.meta.env.VITE_BACKEND_URL + "/register", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((response) => {
                setLoading(false);
                if (response.status == 200 || response.ok === true) {
                        window.location.href = "/login"
                }
            })
        }

        function newUsername(data){
            setUsername(data);
        }
        function newPassword(data){
            setPassword(data);
        }
        function newConfirmPassword(data){
            setConfirmPassword(data);
        }

        return(
            <div className="h-dvh grid">
                <div className=" flex justify-center align-middle my-auto">
                    <div className="bg-zinc-100 rounded-lg px-20 py-20 text-gray-900 min-h-96 h-auto">
                        <h1 className="text-center text-3xl font-bold">Sign up</h1>
                        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col">
                            <CustomInput name="Username" type="text" value={newUsername}/>
                            <CustomInput name="Password" type="password" value={newPassword}/>
                            <CustomInput name="Confirm Password" type="password" value={newConfirmPassword} iClass={(password == confirmPassword) ? "border-stone-700 focus:border-stone-700" : "border-rose-500 focus:border-rose-500"}/>
                            <p className={`${password == confirmPassword ? "hidden" : "visible"} text-rose-500 none mb-4`}>*Invalid confirm password</p>
                            <button type="submit" className="bg-slate-800 text-gray-100 w-fit px-4 py-2 mx-auto rounded-sm">Submit</button>
                        </form>
                        <div className="my-4 text-center">
                            <Link to="/login" className="mx-auto w-12 text-gray-400 underline underline-offset-2 hover:underline-offset-4">Already have an account</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
}