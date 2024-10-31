import { useState } from "react"
import { useRecipeDispatch  } from "../Contexts/RecipeContext";

export default function AddRecipe({onAddRecipe, onDeleteRecipe, onEditRecipe}) {

    

    
    const [recipes, setRecipes] = useState('');
    const dispatch = useRecipeDispatch();



    return (
        <>
        <input type="text" placeholder="Add recipe..." value = {recipes} onChange = {e => setRecipes(e.target.value)}/>
        <button onClick={() => {
            setRecipes('');
            dispatch({
                type: 'added',
                id: nextId++,
                text: recipes,
            })
        }}>Add</button>
        
        </>
    )

    let nextId = 3;
}