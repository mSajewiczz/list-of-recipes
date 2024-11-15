import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
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

    const recipes = useRecipe();
    const [showFavourites, setShowFavourites] = useState(false);

    function handleToggleFavourite(id) {
        dispatch({ type: 'toggleFavourite', id });
    }
    
    const displayedRecipes = showFavourites 
        ? recipes.filter(recipe => recipe.isFavourite) 
        : recipes;

    if(isEditing) {
        recipeContent = (
            <>
            <TextField id="outlined-basic" label="Edit" variant="outlined" type="text" value = {recipe.text} onChange={e => {
                dispatch({
                    type: 'changed',
                    recipe: {
                        ...recipe,
                        text: e.target.value,
                    }
                })
            }}
            
            />

            <TextField id="outlined-basic" label="Edit" variant="outlined" type="text" value = {recipe.content} onChange={e => {
                dispatch({
                    type: 'changed',
                    recipe: {
                        ...recipe,
                        content: e.target.value,
                    }
                })
            }}
            
            />

            <Button variant = "contained" onClick={() => setIsEditing(false)}>Save</Button>
            </>
        )
    } else {
          recipeContent = (
            <>
            <p>{recipe.text}</p>
            <p>{recipe.content}</p>
            <Button variant = "contained" onClick={() => setIsEditing(true)}>Edit</Button>
            </>
        )
    }


    return (
        <>
        <label>
            <Button variant="contained" onClick={() => handleToggleFavourite(recipe.id)}>
            {recipe.isFavourite ? "Remove from favoutrite" : "Add to favourite"} Favourite</Button>
                {recipeContent}
            <Button variant="contained" onClick={() => {
                dispatch({
                    type: 'deleted',
                    id: recipe.id
                })
            }}>Delete</Button>
        </label>
        </>
    )
}