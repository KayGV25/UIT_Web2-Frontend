import TagBtn from "./TagBtn"

export default function DesktopRecipepage({recipe}){
    const recipeIngredients = recipe.ingredients.split(",")
    const tags = recipe.tags.split(",")

    return(
        <div className="mb-12 w-2/3 grid mx-auto">
            <div className="grid content-center h-52 font-bold">
                <h1 className="w-1/2 text-4xl">
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
            <img src={recipe.image} alt="Recipe Image" className="w-1/3 object-cover"/>
            {/* Content */}
            <div className="relative flex align-top divide-x mt-12 break-words gap-2">
                {/* Ingredients + instructions */}
                <div className="flex flex-col gap-10 italic w-72">
                    <h2 className="w-fit text-3xl font-bold">Ingredients</h2>
                    <ul className="flex flex-col gap-2">
                    {
                        recipeIngredients.map((ingredient, index) => {
                            return(<li className="text-lg first-letter:capitalize" key={index}>{ingredient}</li>)
                        })
                    }
                    </ul>
                </div>
                <div className="flex flex-col gap-10 italic pl-4">
                    <h2 className="w-fit text-3xl font-bold">Instructions</h2>
                    <p className="text-xl whitespace-pre-wrap leading-10">{recipe.instructions}</p>
                </div>
            </div>
            <div className="mt-12">
                <button className="w-fit rounded-lg border-2 h-8 px-3 grid place-items-center border-red-600 text-red-600 hover:border-red-800 hover:text-red-800">Report</button>
            </div>
        </div>
    )
}