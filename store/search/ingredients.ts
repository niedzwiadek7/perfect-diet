import { GetterTree, ActionTree, MutationTree } from 'vuex'
import Ingredient from '@/assets/interface/Ingredient'
import Category from '~/assets/interface/Store/Search/Category'

const address = 'https://recipe-server-2709.herokuapp.com/api'

export const state = (): Category => {
  return {
    list: [] as Array<Ingredient>,
    title: 'Składniki' as string
  }
}

export type SearchIngredientState = ReturnType<typeof state>

export const getters: GetterTree<SearchIngredientState, SearchIngredientState> = {
  isFilled: state => state.list.length > 0,
  countFounded: state => state.list.length
}

export const mutations: MutationTree<SearchIngredientState> = {
  setIngredients (state, Ingredients: Array<Ingredient>) {
    state.list = Ingredients
  },
  clearIngredients (state) {
    state.list = []
  }
}

export const actions: ActionTree<SearchIngredientState, SearchIngredientState> = {
  async search ({ commit }, { phrase, limit }) {
    const results = await this.$axios.$post(`${address}/search/ingredient`, {
      word: phrase,
      limit
    }) as Array<Ingredient>
    commit('setIngredients', results)
  }
}
