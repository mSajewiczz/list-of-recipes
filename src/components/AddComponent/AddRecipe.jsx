import { useState } from "react"
import { useRecipeDispatch  } from "../Contexts/RecipeContext";

export default function AddRecipe() {

    

    
    const [recipes, setRecipes] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useRecipeDispatch();

    let nextId = 3;

    return (
        <>
        <input type="text" placeholder="Add recipe..." value = {recipes} onChange = {e => setRecipes(e.target.value)}/>
        <input type="text" placeholder="Add recipes's decription..." value = {content} onChange = {e => setContent(e.target.value)}/>

        <button onClick={() => {
            setRecipes('');
            setContent('');
            dispatch({
                type: 'added',
                id: nextId++,
                content: content,
                text: recipes,
            })
        }}>Add</button>
        
        </>
    )

    
}