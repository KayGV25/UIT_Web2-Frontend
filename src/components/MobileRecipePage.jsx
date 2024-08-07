import TagBtn from "./TagBtn"

export default function MobileRecipePage({recipe}){
    const recipeIngredients = recipe.ingredients.split(",")
    const tags = recipe.tags.split(",")

    return(
        <div className="mb-12 mx-12">
            <div className="grid place-items-center h-52 font-bold">
                <h1 className="w-full text-4xl">
                    {recipe.name}
                    <div className="grid grid-cols-2">
                        <p className="text-lg text-left italic mt-3 font-normal">Author: {recipe.author}</p>
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
                    <h2 className="w-fit text-3xl font-bold">Ingredients</h2>
                    <ul className="flex flex-col gap-2">
                    {
                        recipeIngredients.map((ingredient, index) => {
                            return(<li className="text-lg first-letter:capitalize" key={index}>{ingredient}</li>)
                        })
                    }
                    </ul>
                </div>
                <div className="flex flex-col gap-10 mt-12 italic">
                    <h2 className="w-fit text-3xl font-bold">Instructions</h2>
                    <p className="text-xl whitespace-pre-wrap leading-10">{recipe.instructions}</p>
                </div>
            </div>
        </div>
    )
}