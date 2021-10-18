import Category from '../enums/Recipe/Category'
import Comment from './Comment'
import Rating from './Rating'
import IngredientInRecipe from './IngredientInRecipe'

interface Recipe {
  photo: Array<string>,
  procedure: Array<string>,
  tags: Array<string>,
  updated: boolean,
  views: Number,
  _id: string,
  name: string,
  ingredients: Array<IngredientInRecipe>,
  category: Category,
  kcal: Number,
  description: string,
  time: Number,
  author: string,
  serving: Number,
  comments: Array<Comment>,
  rating: Rating,
  createdAt: Date,
  updatedAt: Date
}

export default Recipe
