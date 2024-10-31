import '../RecipeList/RecipeList.css'
import Search from '../SearchComponent/Search'
import Manipulators from '../Manipulators/Manipulators'

export default function RecipeList() {
    return (
        <>
            <h1>Lista przepisów kulinarnych</h1>
            <Search></Search>
            <Manipulators></Manipulators>
        </>
    )
}