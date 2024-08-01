import { useState } from "react";
import { isLogin } from "../hooks/isLogin";

export default function UploadPage() {
    const [recipeName, setRecipeName] = useState("");
    const [cookingTime, setCookingTime] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [tags, setTags] = useState("");
    const [recipeInstructions, setRecipeInstructions] = useState("");
    const [mealType, setMealType] = useState("");
    const [region, setRegion] = useState("");
    const [image, setImage] = useState();

    function handleImageUpload(e){
        setImage(e.target.files[0]);
    }
    // function handleAlertTags(){
    //     if(!tagsAlert){
    //         setTagsAlert(true);
    //         alert("Tags input can be meal type (Breakfast, Lunch, ...), Cuisines (Vietnamese, Mexican, ...), etc.");
    //     }
    // }
    function handleSubmit(e) {
        e.preventDefault();
        if(!recipeName ||!cookingTime ||!ingredients ||!recipeInstructions){
            alert("Please fill out all fields");
            return;
        }
        
        const uploadImageData = new FormData();
        uploadImageData.append('file', image);
        uploadImageData.append('upload_preset', 'djimmodp');
        uploadImageData.append('cloud_name', 'dbhemcgm4');

        fetch('https://api.cloudinary.com/v1_1/dbhemcgm4/image/upload', {
            method: 'POST',
            body: uploadImageData,
        })
       .then(res => res.json())
       .then(res => {
            let imageURL = res.url;

       })
       .catch(err => { console.log(err);});
      }
    return(
        <>
        {isLogin() ? 
            <div className="grid align-middle justify-center my-5 gap-6">
                <h1 className=" text-center text-3xl font-bold">Upload Your Recipe</h1>
                <div className="w-screen flex justify-center">
                <form className="w-2/5 flex flex-col gap-3 justify-center align-middle" onSubmit={(e) => handleSubmit(e)}>
                {/* Recipe name */}
                    <div className="my-4 flex flex-col">
                        <label htmlFor="recipe" className="font-bold pl-1">Name</label>
                        <input type="text" autoFocus name="recipe" className="outline-none rounded-lg text-slate-950" placeholder="Enter Your Recipe Name Here ..." onChange={(e) => {
                    setRecipeName(e.target.value);
                }}/>
                    </div>
                {/* Time to cook */}
                    <div className="my-4 flex flex-col">
                        <label htmlFor="time" className="font-bold pl-1">Cooking time</label>
                        <input type="text" name="time" className="outline-none rounded-lg text-slate-950" placeholder="Estimate cooking time: e.g. 1 hours, 15 minutes, ..." onChange={(e) => {
                    setCookingTime(e.target.value);
                }}/>
                    </div>
                {/* Ingredients */}
                    <div className="my-4 flex flex-col">
                        <label htmlFor="ingredients" className="font-bold pl-1">Ingredients</label>
                        <textarea type="text" name="ingredients" className="outline-none rounded-lg px-3 text-slate-950 w-full h-72" placeholder="Ingredient1 quantity1, Ingreddient2 quantity2, ..." onChange={(e) => {
                    setIngredients(e.target.value);
                }}/>
                    </div>
                {/* Tags */}
                    <div className="my-4 flex flex-col">
                        <label htmlFor="tags" className="font-bold pl-1">Tags</label>
                        <input type="text" name="tags" className="outline-none rounded-lg text-slate-950" placeholder="#tag1, #tag2, ..." onChange={(e) => {
                    setTags(e.target.value);
                }}/>
                    </div>
                {/* Meal type */}
                    <div>
                        <label htmlFor="meal" className="font-bold">Choose meal type: </label>
                        <select name="meal" className="text-black rounded-lg" id="" onChange={(e) => {
                    setMealType(e.target.value); console.log(e.target.value)}}>
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="dinner">Dinner</option>
                            <option value="dessert">Dessert</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                {/* Instruction */}
                    <div className="my-4 flex flex-col">
                        <label htmlFor="instruction" className="font-bold pl-1">Instruction</label>
                        <textarea type="text" name="instruction" className="outline-none rounded-lg px-3 text-slate-950 w-full h-72" placeholder="Cooking instructions" onChange={(e) => {
                    setRecipeInstructions(e.target.value);
                }}/>
                    </div> 
                {/* Image upload */}
                <div className="flex gap-5 flex-col">
                    <label htmlFor="image" className="font-bold">Image</label>
                    <input type="file" name="image" accept="image/*" onChange={handleImageUpload}/>
                    {image && <img src={URL.createObjectURL(image)} alt="Uploaded Image" width="100%" />}
                </div>
                    <input type="submit" value="Submit" className="btn"/>
                </form>
                </div>
            </div>
        : window.location.href = "/login"}
        </>
    )
}