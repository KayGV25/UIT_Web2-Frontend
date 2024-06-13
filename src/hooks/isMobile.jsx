import { useState } from "react";

export default function isMobile(){
    const [Check, setCheck] = useState(true);

    window.addEventListener('load', () =>{
        console.log(window.innerWidth <= 500 || window.innerHeight <= 500);
        setCheck(window.innerWidth <= 500 || window.innerHeight <= 500);
    })
    window.addEventListener('resize', () =>{
        console.log(window.innerWidth <= 500 || window.innerHeight <= 500);
        setCheck(window.innerWidth <= 500 || window.innerHeight <= 500);
    })
    return Check;
}