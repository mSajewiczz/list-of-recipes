import '../RecipeList/RecipeList.css'
import Search from '../SearchComponent/Search'
import AddRecipe from '../AddComponent/AddRecipe'
import RecipeList from '../RecipeComponent/Recipe'
import { RecipeProvider } from '../Contexts/RecipeContext'

export default function App() {

    
    return (
        <>
            <div className='main-box'>
                <RecipeProvider>
                    <h1>Cooking book of recipes</h1>
                    {/* <Search></Search> */}
                    <AddRecipe></AddRecipe>
                    <RecipeList></RecipeList>
                </RecipeProvider>
            </div>

        
        </>
    )
}