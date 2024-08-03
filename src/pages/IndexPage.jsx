import isMobile from "../hooks/isMobile";
import NavBar from "../components/NavBar";
import DisplayRecipe from "../components/DisplayRecipe";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

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

    if(loading) return <Loading />

    return(
        <>
            <div className="w-full px-16 py-32 pt-36">
                <div className="grid grid-cols-[repeat(auto-fill,14rem)] gap-x-3 gap-y-7 w-full justify-center">
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