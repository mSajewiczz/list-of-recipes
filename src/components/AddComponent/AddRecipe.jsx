import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
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
            <TextField className='input' id="outlined-basic" label="Add recipe..." variant="outlined" type="text"  value = {recipes} onChange = {e => setRecipes(e.target.value)}/>
            <TextField className='input' id="outlined-basic" label="Add recipes's decription..." variant="outlined" type="text"  value = {content} onChange = {e => setContent(e.target.value)}/>
            <Button variant = "contained" onClick={() => {
            if(recipes == "" || content == "") {
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
            }>Add</Button>
            <Button variant = "contained" onClick={() => {
                
            }}>Favourite</Button>
            <p id="error"></p>
        </div>
        
        </>
    )

    
}