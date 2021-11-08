import { GetterTree, ActionTree, MutationTree } from 'vuex'
import Recipe from '@/assets/interface/Recipe/Recipe'
import Category from '~/assets/interface/Store/Search/Category'

const address = 'https://recipe-server-2709.herokuapp.com/api'

export const state = (): Category => {
  return {
    list: [] as Array<Recipe>,
    title: 'Przepisy' as string
  }
}

export type SearchRecipeState = ReturnType<typeof state>

export const getters: GetterTree<SearchRecipeState, SearchRecipeState> = {
  isFilled: state => state.list.length > 0,
  countFounded: state => state.list.length
}

export const mutations: MutationTree<SearchRecipeState> = {
  setRecipes (state, recipes: Array<Recipe>) {
    state.list = recipes
  },
  clearRecipes (state) {
    state.list = []
  }
}

export const actions: ActionTree<SearchRecipeState, SearchRecipeState> = {
  async search ({ commit }, { phrase, limit }) {
    const results = await this.$axios.$post(`${address}/search/recipe`, {
      word: phrase,
      limit
    }) as Recipe[]
    commit('setRecipes', results)
  }
}
