import User from '~/assets/interface/User/User'
import Element from '~/assets/interface/Content/Search/Element'
import Types from '~/assets/interface/Content/Search/Types'
import Recipe from '~/assets/interface/Recipe/Recipe'
import Ingredient from '~/assets/interface/Ingredient'

export const createElementFromUser = (element: User): Element => {
  return {
    _id: element._id,
    name: `${element.firstName} ${element.lastName}`,
    photo: element.photo && element.photo.length > 0
      ? element.photo
      : undefined,
    type: Types.users,
    description: element.description
  }
}
export const createElementFromRecipe = (element: Recipe): Element => {
  return {
    _id: element._id,
    name: element.name,
    photo: element.photo.length > 0
      ? element.photo[0]
      : undefined,
    type: Types.recipes,
    description: element.description
  }
}

export const createElementFromIngredient = (element: Ingredient): Element => {
  return {
    _id: element._id,
    name: element.name,
    photo: element.photo && element.photo.length > 0
      ? element.photo
      : undefined,
    type: Types.ingredients,
    description: element.description
  }
}
