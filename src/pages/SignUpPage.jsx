import CustomInput from "../components/CustomInput"
import React, {Component} from "react";
import { Link } from "react-router-dom";

export default class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    newUsername = (newUsername) => {
        this.setState({
            ...this.state,
            username: newUsername
        })
    }
    newPassword = (newPassword) => {
        this.setState({
            ...this.state,
            password: newPassword
        })
    }
    newConfirmPassword = (newConfirmPassword) => {
        this.setState({
            ...this.state,
            password: newConfirmPassword
        })
    }

    render() {
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
            console.log(data);
        }

        return(
            <div className=" flex justify-center align-middle">
                <div className="bg-zinc-100 rounded-lg px-20 py-20 text-gray-900 min-h-96 h-auto">
                    <h1 className="text-center text-3xl font-bold">Login</h1>
                    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col">
                        <CustomInput name="Username" type="text" value={this.newUsername}/>
                        <CustomInput name="Password" type="password" value={this.newPassword}/>
                        <CustomInput name="Confirm Password" type="password" value={this.newConfirmPassword}/>
                        <button type="submit" className="bg-slate-800 text-gray-100 w-fit px-4 py-2 mx-auto rounded-sm">Submit</button>
                    </form>
                    <div className="my-4 text-center">
                        <Link to="/login" className="mx-auto w-12 text-gray-400 underline underline-offset-2 hover:underline-offset-4">Already have an account</Link>
                    </div>
                </div>
            </div>
        )
    }
}