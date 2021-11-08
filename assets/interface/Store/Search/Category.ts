import Recipe from '~/assets/interface/Recipe/Recipe'
import User from '~/assets/interface/User/User'
import Ingredient from '~/assets/interface/Ingredient'

interface Category {
  title: string,
  list: Array<(Recipe | User | Ingredient)>
}

export default Category
