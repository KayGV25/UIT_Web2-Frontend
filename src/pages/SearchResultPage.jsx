import { useState, useEffect } from "react";
import { useSearchParams  } from "react-router-dom";
import { isLogin } from "../hooks/isLogin";
import Loading from "../components/Loading";
import DisplayRecipe from "../components/DisplayRecipe";

export default function SearchResultPage(){
    const [loading, setLoading] = useState(true)
    const [recipes, setRecipe] = useState();
    const [favRecipes, setFavRecipes] = useState([]);
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
    else if(param.get('author')){
        type = "author";
        payload = param.get('author');
    }
    useEffect(() => {
        async function getRecipe(){
            const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/recipes/search?" + type + "=" + payload);
            if(response.status != 204){
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
        async function getFav(){
            await fetch(import.meta.env.VITE_BACKEND_URL + "/favorites/recipes/" + window.sessionStorage.getItem("id"),{
                method: "GET",
                headers: {
                    'token': window.localStorage.getItem("token")
                },
            }).then(res => res.json())
            .then(res => {
                setFavRecipes(res)
            })
        }
        if(isLogin()){
            getFav().then(() => {
                getRecipe();
            })
        }
        else getRecipe();
    }, [])

    function isFav(recipe){
        if (Array.isArray(favRecipes)) {
            for(var r of favRecipes){
                if(JSON.stringify(r) == JSON.stringify(recipe)){
                    console.log(r.name, true)
                    return true
                }
            }
            return false
        }
    }

    document.title = "ESRO | Search"

    if(loading) return <Loading />

    return(
        <div className="mb-12 w-2/3 grid mx-auto pt-36">
            <div className="grid content-center h-52 font-bold">
                <h1 className="w-1/2 text-4xl">
                    Search result for: {payload}
                </h1>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,14rem)] gap-x-3 gap-y-7 w-full justify-center">
                {
                    recipes.map(recipe => {
                        return <DisplayRecipe key={recipe._id} imageLink={recipe.image} recipeName={recipe.name} favCount={recipe.timesFavorite} cookTime={recipe.time} recipeId={recipe._id} isFav={isFav(recipe)}/>
                    })
                }
            </div>
        </div>
    )
}