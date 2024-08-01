import { useState } from "react"

export default function CustomInput({name, type, value, iClass}){
    const [inputText, setInputText] = useState("");
    const [focus, setFocus] = useState(false);
    const handleFocus = () => {
        setFocus(true);
    }
    const handleBlur = () => {
        setFocus(false);
    }
    return(
        <>
            <div className=" relative my-5 border-zinc-900 rounded-lg">
                <p className={`${focus ? "absolute px-2" : ""} z-10 -top-3.5 left-3 bg-zinc-100`}>{name}</p>
                <input type={type} className={`py-1 outline-none bg-zinc-100 w-72 rounded-sm ${iClass} focus:ring-0`} 
                    name={name} 
                    onFocus={handleFocus} 
                    onBlur={handleBlur}
                    onChange={(e) => {setInputText(e.target.value); value(inputText)}}
                    autoComplete="off"
                    />
            </div>
        </>
    )
}