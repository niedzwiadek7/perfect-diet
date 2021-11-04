import { GetterTree, MutationTree, ActionTree } from 'vuex'
import Recipe from '~/assets/interface/Recipe/Recipe'

export const state = () => {
  return {
    list: [] as Array<Recipe>
  }
}

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  isEmpty: state => state.list.length === 0
}

export const mutations: MutationTree<RootState> = {
  setState (state, list: Array<Recipe>) {
    state.list = list
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async getRecipes ({ commit }, { app }) {
    const recipes: Array<Recipe> = await app.$axios.$get('/test/Profile/Recipes/data2.json')
    commit('setState', recipes)
  },
  async getBreakfastRecipes ({ commit }, { app }) {
    const recipes: Array<Recipe> = await app.$axios.$get('/test/Profile/Recipes/databreakfast1.json')
    commit('setState', recipes)
  }
}
