export default function DisplayRecipe({imageLink, recipeName, favCount, cookTime, recipeId, isFav}){
    function handleAddToFavorite(){

    }

    return(
        <>
            <div style={{width: "min(14rem, 100%)"}} className=" rounded-md flex flex-col cursor-pointer hover:bg-zinc-700" onClick={() => {
                window.location.href = `/recipes/${recipeId}`
            }}>
                <div className="w-full relative mb-5">
                    <img src={imageLink} alt="Recipe Thumbnail" className=" w-full rounded-lg h-40"/>
                    <div className="absolute bottom-2 right-2 w-20 h-8 rounded-full bg-slate-50 text-slate-950 grid grid-cols-2 px-2 items-center" onClick={() => handleAddToFavorite()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 inline ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                        <p>{favCount}</p>
                    </div>
                </div>
                <div className="pl-3">
                    <p className="font-bold">{recipeName}</p>
                    <p className="font-thin">{cookTime}</p>
                </div>
            </div>
        </>
    )
}