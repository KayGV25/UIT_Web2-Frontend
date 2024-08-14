import DisplayRecipe from "../components/DisplayRecipe";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

function IndexPage({type}){
    const [recipes, setRecipes] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getRecipes(){
            let url = "";
            if(type == "index") url = import.meta.env.VITE_BACKEND_URL + "/recipes";
            else if(type == "my-recipe") url = import.meta.env.VITE_BACKEND_URL + "/recipes/search?author=" + window.sessionStorage.getItem("username")
            await fetch(url, {
                headers: {
                    token: window.localStorage.getItem("token")
                }
            })
            .then(res => res.json())
            .then(res => {
                setLoading(false);
                setRecipes(res);
            });
        }
        getRecipes();
    }, [])

    document.title = "ESRO" + (type == "index" ? "" : " | My Recipe")

    if(loading) return <Loading />

    return(
        <>
            <div className="w-full px-16 py-32 pt-36">
                <div className="grid grid-cols-[repeat(auto-fill,14rem)] gap-x-3 gap-y-7 w-full justify-center">
                    {
                        recipes.map(recipe => {
                            return <DisplayRecipe key={recipe._id} imageLink={recipe.image} recipeName={recipe.name} favCount={recipe.timesFavorite} cookTime={recipe.time} recipeId={recipe._id}/>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default IndexPage;