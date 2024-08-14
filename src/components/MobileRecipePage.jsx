import { useState } from "react";
import TagBtn from "./TagBtn"
import { RoughNotation } from "react-rough-notation";

export default function MobileRecipePage({recipe}){
    const recipeIngredients = recipe.ingredients.split(",")
    const tags = recipe.tags.split(",")
    const [authorHover, setAuthorHover] = useState(false);

    return(
        <div className="mb-12 mx-12">
            <div className="grid place-items-center h-52 font-bold">
                <h1 className="w-full text-4xl">
                    <RoughNotation type="underline" show="true" animate="true" strokeWidth="3" color="red" padding={5}>
                        {recipe.name}
                    </RoughNotation>
                    <div className="grid grid-cols-2">
                        <p className="text-lg text-left italic mt-3 font-normal">Author: 
                            <span onMouseEnter={() => setAuthorHover(true)} onMouseLeave={() => setAuthorHover(false)} className=" cursor-pointer pl-2" onClick={() => window.location.href = "/search?author=" + recipe.author}>
                                <RoughNotation type="box" show={authorHover} animate="true" strokeWidth="3" color="red" padding={5}>
                                    {recipe.author}
                                </RoughNotation>
                            </span>
                        </p>
                        <p className="text-lg text-right italic mt-3 font-normal">Cooking time: {recipe.time}</p>
                    </div>
                    <div className="flex flex-row gap-4 font-normal text-base mt-2">
                        {
                            tags.map((tag,index) => {
                                return <TagBtn tag={tag} key={index}/>
                            })
                        }
                    </div>
                </h1>
            </div>
            {/* Image */}
            <img src={recipe.image} alt="Recipe Image" className="w-full h-72 object-cover"/>
            {/* Content */}
            <div className="relative grid items-center grid-rows-1">
                {/* Ingredients + tags */}
                <div className="flex flex-col gap-10 mt-12 italic">
                    <RoughNotation className="w-fit text-3xl font-bold" type="underline" show="true" animate="true" strokeWidth="3" color="red" padding={5}>
                        <h2>Ingredients</h2>
                    </RoughNotation>
                    <ul className="flex flex-col gap-2">
                    {
                        recipeIngredients.map((ingredient, index) => {
                            return(<li className="text-lg first-letter:capitalize" key={index}>{ingredient}</li>)
                        })
                    }
                    </ul>
                </div>
                <div className="flex flex-col gap-10 mt-12 italic">
                    <RoughNotation className="w-fit text-3xl font-bold" type="underline" show="true" animate="true" strokeWidth="3" color="red" padding={5}>
                        <h2>Instructions</h2>
                    </RoughNotation>
                    <p className="text-xl whitespace-pre-wrap leading-10">{recipe.instructions}</p>
                </div>
            </div>
            <div className="mt-12">
                <button className="w-fit rounded-lg border-2 h-8 px-3 grid place-items-center border-red-600 text-red-600 hover:border-red-800 hover:text-red-800">Report</button>
            </div>
        </div>
    )
}