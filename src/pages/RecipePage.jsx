import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import isMobile from "../hooks/isMobile";
import MobileRecipePage from "../components/MobileRecipePage";
import DesktopRecipepage from "../components/DesktopRecipePage";

export default function RecipePage(){
    const [loading, setLoading] = useState(true);
    const [recipe, setRecipe] = useState();
    const { id } = useParams();

    const checkMobile = isMobile();
    useEffect(() => {
        async function getRecipe(){
            const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/recipes/" + id);
            const data = await response.json();
            setLoading(false);
            setRecipe(data);
            document.title = "ESRO | " + data.name
        }
        getRecipe();
    }, [])

    if(loading) return <Loading />

    if(checkMobile) return <MobileRecipePage recipe={recipe}/> 

    return(
        <DesktopRecipepage recipe={recipe}/>
    )
}