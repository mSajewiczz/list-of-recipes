import { useRecipe, useRecipeDispatch } from '../Contexts/RecipeContext';

export default function Search({setSearch, recipeSearch, search}) {
    
    return (
        <>
        <input placeholder='Find the recipe' onChange={(event) => setSearch(event.target.value)}/>
        <ol>
        { recipeSearch.filter((item) => item.toLowerCase().includes(search.toLowerCase())).map((recipeSearch, index) => (
        <li key={index}>

        </li>
    ))}
        </ol>
        </>
    )
   
}