import isMobile from "../hooks/isMobile";
import NavBar from "../components/NavBar";
import DisplayRecipe from "../components/DisplayRecipe";
import { useEffect, useState } from "react";

function IndexPage(){
    const [recipes, setRecipes] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getRecipes(){
            const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/recipes");
            const data = await response.json();
            setLoading(false);
            setRecipes(data);
        }
        getRecipes();
    }, [])

    if(loading) return(
        <>
            <div className="w-full h-full grid place-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 animate-spin">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
            </div>
        </>
    )

    return(
        <>
            <div className="w-full px-24 py-32">
                <div className="grid grid-cols-[repeat(auto-fill,14rem)] gap-5 w-full">
                    {
                        recipes.map(recipe => {
                            return <DisplayRecipe key={recipe._id} imageLink={recipe.image} recipeName={recipe.name} favCount={recipe.favorites} cookTime={recipe.time} recipeId={recipe._id}/>
                        })
                    }
                    {
                        recipes.map(recipe => {
                            return <DisplayRecipe key={recipe._id} imageLink={recipe.image} recipeName={recipe.name} favCount={recipe.favorites} cookTime={recipe.time} recipeId={recipe._id}/>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default IndexPage;