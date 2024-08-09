import { useState, useEffect } from "react";
import { useSearchParams  } from "react-router-dom";
import Loading from "../components/Loading";
import DisplayRecipe from "../components/DisplayRecipe";

export default function SearchResultPage(){
    const [loading, setLoading] = useState(true)
    const [recipes, setRecipe] = useState();
    const [param] = useSearchParams();

    let type = "";
    let payload = "";
    if(param.get('name')){
        type = "name";
        payload = param.get('name');
    }
    else if(param.get('tag')){
        type = "tags";
        payload = param.get('tag');
    }
    else if(param.get('ingredients')){
        type = "ingredients";
        payload = param.get('ingredients');
    }
    useEffect(() => {
        async function getRecipe(){
            document.title = "ESRO | Search"
            const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/recipes/search?" + type + "=" + payload);
            if(response.status != 404){
                const data = await response.json();
                setLoading(false);
                setRecipe(data);
            }
            else{
                setLoading(false)
                setRecipe([]);
                console.clear()
            }
        }
        getRecipe();
    }, [])

    if(loading) return <Loading />

    return(
        <div className="mb-12 w-2/3 grid mx-auto">
            <div className="grid content-center h-52 font-bold">
                <h1 className="w-1/2 text-4xl">
                    Search result for: {payload}
                </h1>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,14rem)] gap-x-3 gap-y-7 w-full justify-center">
                {
                    recipes.map(recipe => {
                        return <DisplayRecipe key={recipe._id} imageLink={recipe.image} recipeName={recipe.name} favCount={recipe.timesFavorite} cookTime={recipe.time} recipeId={recipe._id}/>
                    })
                }
            </div>
        </div>
    )
}