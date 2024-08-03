import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

export default function RecipePage(){
    const [loading, setLoading] = useState(true);
    const [recipe, setRecipe] = useState();
    const { id } = useParams();

    useEffect(() => {
        async function getRecipe(){
            const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/recipes/" + id);
            const data = await response.json();
            setLoading(false);
            setRecipe(data);
        }
        getRecipe();
    }, [])

    if(loading) return <Loading />


    return(
        <>
            {console.log(recipe)}
            <h1>Hello</h1>
            <div>
                <p>Test</p>
            </div>
        </>
    )
}