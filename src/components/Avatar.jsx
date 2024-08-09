import { useState } from "react"
import { isLogin } from "../hooks/isLogin"

export default function Avatar(){
    const [openDropdown, setOpenDropdown] = useState(false);
    return(
        <>
            <div className=" size-10 grid align-middle" onClick={() => {
                setOpenDropdown((prev) => !prev)
            }}>
                <div className="h-fit m-auto cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
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
                    <li className="hover:bg-slate-200 cursor-pointer">
                        <div className="flex items-center mx-5 my-3 gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                            <p>Favorite recipe</p>
                        </div>
                    </li>
                    <li className="hover:bg-slate-200 cursor-pointer">
                        <div className="flex items-center mx-5 my-3 gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                            </svg>
                            <p>My recipe</p>
                        </div>
                    </li>
                </> : ""}
                <li className="hover:bg-slate-200 rounded-lg">
                    <div className="flex mx-5 my-3 cursor-pointer">
                        {isLogin() ? 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                            </svg>
                        :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                            </svg>
                        }
                        {isLogin() ? <p className="mx-2 cursor-pointer" onClick={()=>handleLogout()}>Logout</p> : <p className="mx-2 cursor-pointer" onClick={()=>{window.location.href = "/login"}}>Login</p>}
                    </div>
                </li>
            </ul>
        </div>
    )
}