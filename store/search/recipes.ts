import { GetterTree, ActionTree, MutationTree } from 'vuex'
import Recipe from '@/assets/interface/Recipe/Recipe'
import Element from '~/assets/interface/Content/Search/Element'
import Category from '~/assets/interface/Store/Search/Category'
import {
  createElementFromRecipe
} from '~/utils/constructors/store/search/Element'

const address = 'https://recipe-server-2709.herokuapp.com/api'

export const state = (): Category => {
  return {
    order: 2,
    list: [] as Array<Element>,
    title: 'Przepisy' as string
  }
}

export type SearchRecipeState = ReturnType<typeof state>

export const getters: GetterTree<SearchRecipeState, SearchRecipeState> = {
  isFilled: state => state.list.length > 0,
  countFounded: state => state.list.length
}

export const mutations: MutationTree<SearchRecipeState> = {
  setRecipes (state, recipes: Array<Element>) {
    state.list = recipes
  }
}

export const actions: ActionTree<SearchRecipeState, SearchRecipeState> = {
  async search ({ commit }, { phrase, limit }) {
    const results = await this.$axios.$post(`${address}/search/recipe`, {
      word: phrase,
      limit
    }) as Array<Recipe>
    const resultElementsList: Array<Element> = []
    results.forEach((recipe) => {
      resultElementsList.push(createElementFromRecipe(recipe))
    })
    commit('setRecipes', resultElementsList)
  }
}
