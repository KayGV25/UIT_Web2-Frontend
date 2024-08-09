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
    const [theme, setTheme] = useState(window.localStorage.getItem('color-theme'));
    function handleLogout(){
        window.sessionStorage.removeItem("username");
        window.location.reload();
    }

    function handleSwitchTheme(){
        if(theme === 'dark'){
            setTheme('light');
            window.localStorage.setItem('color-theme', 'light')
        }
        else if(theme === 'light'){
            setTheme('dark')
            window.localStorage.setItem('color-theme', 'dark')
        }
        else{
            setTheme('light');
            window.localStorage.setItem('color-theme', 'light')
        }
        window.location.reload()
    }

    return(
        <div className="flex flex-col DropDownProfile z-100">
            <ul className="flex flex-col z-10">
                <li className="hover:bg-slate-200 cursor-pointer hover:rounded-t-lg" onClick={() => handleSwitchTheme()}>
                    <div className="flex items-center mx-5 my-3 gap-2">
                    {
                        theme === 'dark' ? 
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                            </svg>
                        </>
                        :
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                            </svg>
                        </>
                    }
                    <p className="m-0">Change theme</p>
                    </div>
                </li>
                {isLogin() ? <>
                    <li className="hover:bg-slate-200 cursor-pointer"><p>Favorite recipe</p></li>
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