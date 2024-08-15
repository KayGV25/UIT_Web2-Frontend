import DisplayRecipe from "../components/DisplayRecipe";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { isLogin } from "../hooks/isLogin";

function IndexPage({type}){
    const [recipes, setRecipes] = useState();
    const [loading, setLoading] = useState(true);
    const [favRecipes, setFavRecipes] = useState([]);

    useEffect(() => {
        async function getRecipe(){
            let url = "";
            if(type == "index") url = import.meta.env.VITE_BACKEND_URL + "/recipes";
            else if(type == "my-recipe")  {
                if(isLogin()){
                    url = import.meta.env.VITE_BACKEND_URL + "/recipes/search?author=" + window.sessionStorage.getItem("username")
                }
                else window.location.href = "/";
            }
            else if(type == "favorites") {
                if(isLogin()){
                    url = import.meta.env.VITE_BACKEND_URL + "/favorites/recipes/" + window.sessionStorage.getItem("id")
                }
                else window.location.href = "/";
            }
            await fetch(url, {
                headers: {
                    'token': window.localStorage.getItem("token")
                }
            })
            .then(res => {
                if(res.status === 401){
                    window.location.href = "/login"
                    return;
                }
                return res.json()
            })
            .then(res => {
                setLoading(false);
                setRecipes(res);
            });
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
                    return true
                }
                return false
            }
        }
    }

    document.title = "ESRO" + (type == "index" ? "" : " | My Recipe")

    if(loading) return <Loading />

    return(
        <>
            <div className="w-full px-16 py-32 pt-36">
                <div className="grid grid-cols-[repeat(auto-fill,14rem)] gap-x-3 gap-y-7 w-full justify-center">
                    {
                        recipes.map(recipe => {
                            return <DisplayRecipe key={recipe._id} imageLink={recipe.image} recipeName={recipe.name} favCount={recipe.timesFavorite} cookTime={recipe.time} recipeId={recipe._id} isFav={isFav(recipe)}/>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default IndexPage;