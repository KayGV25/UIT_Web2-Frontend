export default function MobileRecipePage({recipe}){
    return(
        <div>
            <div className="grid justify-center">
                <h1 className="w-fit">
                    {recipe.name}
                </h1>
            </div>
            {/* Image */}
            <img src={recipe.image} alt="Recipe Image" className="w-full h-72 object-cover"/>
            {/* Content */}
            <div className="relative grid items-center grid-rows-3">
                {/* Ingredients + tags */}
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}