import { useState } from "react";

export default function isMobile(){
    const [Check, setCheck] = useState(true);
    const HW = 620;

    window.addEventListener('load', () =>{
        setCheck(window.innerWidth <= HW || window.innerHeight <= HW - 200);
    })
    window.addEventListener('resize', () =>{
        setCheck(window.innerWidth <= HW || window.innerHeight <= HW - 200);
    })
    return Check;
}