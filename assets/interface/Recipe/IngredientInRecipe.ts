import Unit from '../enums/Recipe/Unit';

interface IngredientInRecipe {
  _id: string,
  name: string,
  quantity: number,
  unit: Unit
}

export default IngredientInRecipe
