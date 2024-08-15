import { useEffect, useState } from "react";
import Loading from "../components/Loading";

export default function AdminPage(){
    const [loading, setLoading] = useState(true)
    const [recipes, setRecipe] = useState([]);

    useEffect(() => {
        async function getRecipe(){
            document.title = "ESRO | Admin"
            fetch(import.meta.env.VITE_BACKEND_URL + "/reports/recipes", {
                headers: {
                    'token': window.localStorage.getItem("token")
                }
            })
            .then(res => {
                if(res.status == 403){
                    window.location.href = "/";
                    return;
                }
                return res.json()
            })
            .then(res => {
                setLoading(false)
                setRecipe(res)
                console.clear()
            })
        }
        getRecipe();
    }, [])

    if(loading) return <Loading />

    function handleDelete(recipe){
        Promise.all([
            fetch(import.meta.env.VITE_BACKEND_URL + "/reports/recipes/" + recipe.recipeId, {
                method: "DELETE",
                headers: {
                    'token': window.localStorage.getItem("token")
                }
            }),
            fetch(import.meta.env.VITE_BACKEND_URL + "/recipes/" + recipe.recipeId, {
                method: "DELETE",
                headers: {
                    'token': window.localStorage.getItem("token")
                }
            })
        ]).then(res => {
            if(res[0].status === 401 || res[1]. status === 401){
                window.location.href = "/login";
                return;
            }
            if(res[0].status === 200 && res[1].status === 200){
                if (Array.isArray(recipes)) {
                    let temp = recipes.filter(function(r){
                        return r !== recipe
                    })
                    setRecipe(temp)
                }
            }
        })
    }
    function handleRemove(recipe){
        fetch(import.meta.env.VITE_BACKEND_URL + "/reports/recipes/" + recipe.recipeId, {
            method: "DELETE",
            headers: {
                'token': window.localStorage.getItem("token")
            }
        }).then(res => {
            if(res.status === 200){
                if (Array.isArray(recipes)) {
                    let temp = recipes.filter(function(r){
                        return r !== recipe
                    })
                    setRecipe(temp)
                }
                console.clear()
            }
        })
    }
    return(
        <>
            <div className="w-full px-5 py-32 pt-36">
                <table className="w-full table-fixed">
                    <thead className="table-header-group h-16">
                        <tr>
                            <th className="px-2">Recipe Id</th>
                            <th className="px-2">Times reported</th>
                            <th className="px-2">Remove from reported</th>
                            <th className="px-2">Delete Recipe</th>
                        </tr>
                    </thead>
                    <tbody className="table-row-group">
                        {recipes.map(recipe => {
                            return(
                                <tr key={recipe._id} className="h-10">
                                    <td className="grid "><a className="truncate text-center hover:underline" href={"/recipes/" + recipe.recipeId} target="_blank">{recipe.recipeId}</a></td>
                                    <td><p className="text-center">{recipe.timesReported}</p></td>
                                    <td><button className="bg-amber-500 hover:bg-amber-600 w-fit px-6 py-1 block m-auto rounded-md" onClick={() => handleRemove(recipe)}>Remove</button></td>
                                    <td><button className="bg-red-600 hover:bg-red-700 w-fit px-6 py-1 block m-auto rounded-md" onClick={() => handleDelete(recipe)}>Delete</button></td>
                                    
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}