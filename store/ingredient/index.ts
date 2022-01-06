import { GetterTree, MutationTree, ActionTree } from 'vuex'
import Ingredient from '~/assets/interface/Ingredient'
import { createElementFromIngredient } from '@/utils/constructors/store/search/Element'

const address = 'https://recipe-server-2709.herokuapp.com/api'

export const state = () => {
  return {
    ingredient: {} as Ingredient
  }
}

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  getIngredient: state => state.ingredient,
  getIngredientElement:
      state => state.ingredient ? createElementFromIngredient(state.ingredient) : null
}

export const mutations: MutationTree<RootState> = {
  setIngredient (state, ingredient: Ingredient) {
    state.ingredient = ingredient
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async getIngredient ({ commit }, { app, name }) {
    const ingredient: Ingredient = await app.$axios.$post(`${address}/ingredients/get`, {
      name
    })
    commit('setIngredient', ingredient)
  }
}
