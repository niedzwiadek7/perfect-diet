import { GetterTree, MutationTree, ActionTree } from 'vuex'
import Recipe from '~/assets/interface/Recipe/Recipe'

const address = 'https://recipe-server-2709.herokuapp.com/api'

export const state = () => {
  return {
    recipe: {} as Recipe,
    loaded: false as boolean
  }
}

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  isFind: state => Object.prototype.hasOwnProperty.call(state.recipe, '_id'),
  getRecipes: state => state.recipe,
  getLoaded: state => state.loaded
}

export const mutations: MutationTree<RootState> = {
  setRecipe (state, recipe: Recipe) {
    state.recipe = recipe
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async getRecipe ({ state, commit }, { app, id }) {
    try {
      const recipe: Recipe = await app.$axios.$get(`${address}/posts/${id}`)
      commit('setRecipe', recipe)
      state.loaded = true
    } catch (err) {
      state.loaded = true
      if (process.env.NODE_ENV !== 'production') {
        console.log(err)
      }
    }
  }
}
