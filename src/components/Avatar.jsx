import { useState } from "react"

export default function Avatar(){
    const [openDropdown, setOpenDropdown] = useState(false);
    return(
        <>
            <div className="h-fit" onClick={() => {
                setOpenDropdown((prev) => !prev)
            }}>
                <img src="/DAvatar.svg" className=" rounded-full size-6 block cursor-pointer"/>
            </div>
            {openDropdown && <DropdownProfile />}
        </>
    )
}

function DropdownProfile(){
    return(
        <div className="flex flex-col DropDownProfile">
            <ul className="flex flex-col">
                <li><p>Favorite recipe</p></li>
                <li><p>My recipe</p></li>
                <li>
                    <div className="flex mx-5 my-3">
                        <img src="/logout.svg" alt=""  width="20"/>
                        <p className="mx-2">Logout</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}