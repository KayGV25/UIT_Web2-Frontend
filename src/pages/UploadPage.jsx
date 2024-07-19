import { useState } from "react";

export default function UploadPage() {
    const [imageUrl, setImageUrl] = useState("");
    const [tagsAlert, setTagsAlert] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [recipeName, setRecipeName] = useState("");
    const [cookingTime, setCookingTime] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [tags, setTags] = useState("");
    const [recipeInstructions, setRecipeInstructions] = useState("");

    function handleAlertTags(){
        if(!tagsAlert){
            setTagsAlert(true);
            alert("Tags input can be meal type (Breakfast, Lunch, ...), Cuisines (Vietnamese, Mexican, ...), etc.");
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        if(!recipeName ||!cookingTime ||!ingredients ||!recipeInstructions){
            alert("Please fill out all fields");
            return;
        }
        // axios.post(`http://freeimage.host/api/1/upload/?key=${import.meta.env.VITE_FREEIMAGEHOST_API_KEY}&format=json`, {source: selectedImage})
        // .then(res => {
        //     console.log(res);
        //     console.log(res.data);
        //   })
        fetch(`http://freeimage.host/api/1/upload/?key=${import.meta.env.VITE_FREEIMAGEHOST_API_KEY}&format=json`, {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: {
                "source": selectedImage
            }
           }).then(res => {
                setImageUrl(res.image.url);
                console.log(res, imageUrl);
           })
      }
    return(
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
                    <input type="text" name="tags" className="outline-none rounded-lg text-slate-950" placeholder="#tag1, #tag2, ..." onClick={handleAlertTags} onChange={(e) => {
                setTags(e.target.value);
              }}/>
                </div>
            {/* Instruction */}
                <div className="my-4 flex flex-col">
                    <label htmlFor="instruction" className="font-bold pl-1">Instruction</label>
                    <textarea type="text" name="instruction" className="outline-none rounded-lg px-3 text-slate-950 w-full h-72" placeholder="Cooking instructions" onChange={(e) => {
                setRecipeInstructions(e.target.value);
              }}/>
                </div> 
            {/* Image */}
            <div>
                {/* Header */}
                <h1 className="font-bold pl-1 mb-1 text-2xl">Upload and Display Image</h1>

                {/* Conditionally render the selected image if it exists */}
                {selectedImage && (
                    <div>
                    {/* Display the selected image */}
                    <img
                        alt="not found"
                        width={"250px"}
                        src={URL.createObjectURL(selectedImage)}
                    />
                    <br /> <br />
                    {/* Button to remove the selected image */}
                    <button className="btn px-6" onClick={() => setSelectedImage(null)}>Remove</button>
                    </div>
                )}

                <br />

                {/* Input element to select an image file */}
                <input
                    type="file"
                    name="image"
                    // Event handler to capture file selection and update the state
                    onChange={(event) => {
                    console.log(event.target.files[0]); // Log the selected file
                    setSelectedImage(event.target.files[0]); // Update the state with the selected file
                    }}
                />
                </div>
                <input type="submit" value="Submit" className="btn"/>
            </form>
            </div>
        </div>
    )
}