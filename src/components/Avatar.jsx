import { useState } from "react"
import { isLogin } from "../hooks/isLogin"

export default function Avatar(){
    const [openDropdown, setOpenDropdown] = useState(false);
    return(
        <>
            <div className=" size-10 grid align-middle" onClick={() => {
                setOpenDropdown((prev) => !prev)
            }}>
                <div className="h-fit m-auto">
                <img src="/DAvatar.svg" className=" rounded-full size-6 block cursor-pointer m-auto"/>
                </div>
            </div>
            {openDropdown && <DropdownProfile />}
        </>
    )
}

function DropdownProfile(){
    function handleLogout(){
        window.sessionStorage.removeItem("username");
        window.location.reload();
    }
    return(
        <div className="flex flex-col DropDownProfile z-100">
            <ul className="flex flex-col z-10">
                {isLogin() ? <>
                    <li className="hover:bg-slate-200 hover:rounded-t-lg cursor-pointer"><p>Favorite recipe</p></li>
                    <li className="hover:bg-slate-200 cursor-pointer"><p>My recipe</p></li>
                </> : ""}
                <li className="hover:bg-slate-200 rounded-lg">
                    <div className="flex mx-5 my-3 cursor-pointer">
                        <img src="/logout.svg" alt=""  width="20"/>
                        {isLogin() ? <p className="mx-2 cursor-pointer hover:bg-slate-100" onClick={()=>handleLogout()}>Logout</p> : <p className="mx-2 cursor-pointer" onClick={()=>{window.location.href = "/login"}}>Login</p>}
                    </div>
                </li>
            </ul>
        </div>
    )
}