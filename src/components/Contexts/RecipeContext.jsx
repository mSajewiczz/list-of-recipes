import { createContext, useContext, useReducer } from 'react';

export const RecipeContext = createContext(null);
export const RecipeDispatchContext = createContext(null);

export function RecipeProvider( {children} ) {
    const [recipes, dispatch] = useReducer (recipesReducer, initialRecipes);

    return (
        <>

        <RecipeContext.Provider value = {recipes}>
                <RecipeDispatchContext.Provider value = {dispatch}>
                    {children}
                </RecipeDispatchContext.Provider>
            </RecipeContext.Provider>
            
        </>
    )
}

export function useRecipe() {
    return useContext(RecipeContext);
}

export function useRecipeDispatch() {
    return useContext(RecipeDispatchContext);
}

function recipesReducer(recipes, action) {
    switch(action.type) {
        case "added": {
            return [...recipes,{
                id: action.id,
                text: action.text,
                content: action.content,
                isFavourite: false
            }]
        }

        case "changed": {
            return recipes.map(t => {
                if(t.id === action.recipe.id) {
                    return action.recipe
                } else {
                    return t
                }
            });
        }

        case 'deleted': {
            return recipes.filter(t => t.id !== action.id);
        }

        default: {
            throw Error("Unknow action: " + action.type)
        }
    }
}

const initialRecipes = [
    {id: 0, text: "Test 1", content: "To jest tekst potrawy 1", isFavourite: false},
    {id: 1, text: "Test 2", content: "To jest tekst potrawy 2", isFavourite: false},
    {id: 2, text: "Test 3", content: "To jest tekst potrawy 3", isFavourite: false},
]
