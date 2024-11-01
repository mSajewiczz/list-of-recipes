import { createContext, useContext, useReducer } from 'react';

export const RecipeContext = createContext(null);
export const RecipeDispatchContext = createContext(null);

export function RecipeProvider({ children }) {
    const [recipes, dispatch] = useReducer(recipesReducer, initialRecipes);

    return (
        <RecipeContext.Provider value={recipes}>
            <RecipeDispatchContext.Provider value={dispatch}>
                {children}
            </RecipeDispatchContext.Provider>
        </RecipeContext.Provider>
    );
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
            return [
                ...recipes,
                {
                    id: action.id,
                    text: action.text,
                    content: action.content,
                    isFavourite: false
                }
            ];
        }
        case "changed": {
            return recipes.map(t => {
                if (t.id === action.recipe.id) {
                    return action.recipe;
                } else {
                    return t;
                }
            });
        }
        case "deleted": {
            return recipes.filter(t => t.id !== action.id);
        }
        case "toggleFavourite": { // nowa akcja dla ulubionych
            return recipes.map(t => {
                if (t.id === action.id) {
                    return { ...t, isFavourite: !t.isFavourite };
                } else {
                    return t;
                }
            });
        }
        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
}

const initialRecipes = [
    { id: 0, text: "Płatki z mlekiem", content: "Płatki, mleko, miska, łyka", isFavourite: false },
    { id: 1, text: "Schabowy z ziemniakami", content: "świnia, nóz, widelec, talerz, ziemniaki", isFavourite: false },
    { id: 2, text: "Zupa pomidorowa", content: "Pomidory, makaron, miska, lyzka", isFavourite: false },
];