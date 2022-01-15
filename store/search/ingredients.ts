import { GetterTree, ActionTree, MutationTree } from 'vuex'
import Ingredient from '@/assets/interface/Ingredient'
import Element from '~/assets/interface/Content/Search/Element'
import Category from '~/assets/interface/Store/Search/Category'
import {
  createElementFromIngredient
} from '~/utils/constructors/store/search/Element'

const address = 'https://recipe-server-2709.herokuapp.com/api'

export const state = (): Category => {
  return {
    order: 4,
    list: [] as Array<Element>,
    title: 'Składniki' as string
  }
}

export type SearchIngredientState = ReturnType<typeof state>

export const getters: GetterTree<SearchIngredientState, SearchIngredientState> = {
  isFilled: state => state.list.length > 0,
  countFounded: state => state.list.length
}

export const mutations: MutationTree<SearchIngredientState> = {
  setIngredients (state, Ingredients: Array<Element>) {
    state.list = Ingredients
  }
}

export const actions: ActionTree<SearchIngredientState, SearchIngredientState> = {
  async search ({ commit }, { phrase, limit }) {
    const results = await this.$axios.$post(`${address}/search/ingredient`, {
      word: phrase,
      limit
    }) as Array<Ingredient>
    const resultElementsList: Array<Element> = []
    results.forEach((ingredient) => {
      resultElementsList.push(createElementFromIngredient(ingredient))
    })
    commit('setIngredients', resultElementsList)
  }
}
