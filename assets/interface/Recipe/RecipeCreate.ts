import Difficulty from '../enums/Recipe/Difficulty'
import Category from '../enums/Recipe/Category'
import IngredientInRecipe from './IngredientInRecipe'

interface RecipeCreate {
  name: string,
  description: string,
  photo: Array<File>,
  time: number,
  difficulty: Difficulty,
  category: Category,
  serving: number,
  ingredients: Array<IngredientInRecipe>,
  procedure: Array<string>
}

export default RecipeCreate
