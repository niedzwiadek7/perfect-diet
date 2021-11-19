import Recipe from '~/assets/interface/Recipe/Recipe'
import User from '~/assets/interface/User/User'
import Ingredient from '~/assets/interface/Ingredient'
import Element from '~/assets/interface/Content/Search/Element'

interface Category {
  title: string,
  list: Array<(Recipe | User | Ingredient | Element)>,
  maxLength?: number
}

export default Category
