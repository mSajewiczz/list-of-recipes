import { useState } from "react"
import { useRecipeDispatch  } from "../Contexts/RecipeContext";
import '../AddComponent/AddRecipe.css'

export default function AddRecipe() {
    
    const [recipes, setRecipes] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useRecipeDispatch();

    let nextId = 3;

    return (
        <>
        <div className="addRecipeBox">
            <input type="text" placeholder="Add recipe..." value = {recipes} onChange = {e => setRecipes(e.target.value)}/>
            <input type="text" placeholder="Add recipes's decription..." value = {content} onChange = {e => setContent(e.target.value)}/>
            <button onClick={() => {
            if(recipes == "" || content == "") {
                // console.log("nie ok");
                document.getElementById("error").innerHTML="Write your recipe and the describe inputs!";
                
            } else {
                document.getElementById("error").innerHTML= "";
                setRecipes('');
            setContent('');
            dispatch({
                type: 'added',
                id: nextId++,
                content: content,
                text: recipes,
            })
            }
        }
            }>Add</button>
            <button onClick={() => {

            }}>Favourite</button>
            <p id="error"></p>
        </div>
        
        </>
    )

    
}