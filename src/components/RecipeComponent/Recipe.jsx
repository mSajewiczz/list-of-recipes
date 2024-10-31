import { useState } from 'react';
import { useRecipe, useRecipeDispatch } from '../Contexts/RecipeContext';
import '../RecipeComponent/Recipe.css'

export default function RecipeList() {
    const recipes = useRecipe();
 

    return (
        <>
        <ul>
            {recipes.map(recipe => (
                <li key={recipe.id}>
                    <Recipe recipe = {recipe} />
                </li>
            ))}
        </ul>
        </>
    )
}



function Recipe ({recipe}) {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useRecipeDispatch();
    let recipeContent;

    if(isEditing) {
        recipeContent = (
            <>
            <input type="text" value = {recipe.text} onChange={e => {
                dispatch({
                    type: 'changed',
                    recipe: {
                        ...recipe,
                        text: e.target.value,
                    }
                })
            }}
            
            />

            <input type="text" value = {recipe.content} onChange={e => {
                dispatch({
                    type: 'changed',
                    recipe: {
                        ...recipe,
                        content: e.target.value,
                    }
                })
            }}
            
            />

            <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        )
    } else {
          recipeContent = (
            <>
            <p>{recipe.text}</p>
            <p>{recipe.content}</p>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        )
    }


    return (
        <>
        <label>
            <button onClick={() => {
                isFavourite = true;
            }}>Favourite</button>
                {recipeContent}
            <button onClick={() => {
                dispatch({
                    type: 'deleted',
                    id: recipe.id
                })
            }}>Delete</button>
        </label>
        </>
    )
}