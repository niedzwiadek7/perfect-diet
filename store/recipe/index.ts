import { GetterTree, MutationTree, ActionTree } from 'vuex'
import Recipe from '~/assets/interface/Recipe/Recipe'
import User from '~/assets/interface/User/User'

const address = 'https://recipe-server-2709.herokuapp.com/api'

export const state = () => {
  return {
    recipe: {} as Recipe,
    author: {} as User
  }
}

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  isFind: state => Object.prototype.hasOwnProperty.call(state.recipe, '_id'),
  getRecipes: state => state.recipe,
  getAuthor: state => state.author,
  getRating: (state, userId: string) => {
    return state.recipe.rating.find((rate) => {
      return rate.author === userId
    })
  }
}

export const mutations: MutationTree<RootState> = {
  setRecipe (state, recipe: Recipe) {
    state.recipe = recipe
  },
  setAuthor (state, author: User) {
    state.author = author
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async getRecipe ({ commit }, { app, id }) {
    const recipe: Recipe = await app.$axios.$get(`${address}/posts/${id}`)
    commit('setRecipe', recipe)
  },
  async getAuthor ({ state, commit }, { app }) {
    const author: User = await app.$axios.$get(`${address}/users/${state.recipe.author}`)
    commit('setAuthor', author)
  }
}
