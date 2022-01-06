import { ActionTree, GetterTree, MutationTree } from 'vuex'
import Element from '~/assets/interface/Content/Search/Element'
import Category from '~/assets/interface/Store/Search/Category'
import moveElementInArray, { AmountChange, Place } from '~/utils/predefine/array/moveElement'

export const state = (): Category => {
  return {
    order: 1,
    list: [] as Array<Element>,
    title: 'Ostatnie' as string
  }
}

export type SearchRecipeState = ReturnType<typeof state>

export const getters: GetterTree<SearchRecipeState, SearchRecipeState> = {
  isFilled: state => state.list.length > 0,
  countFounded: state => state.list.length
}

export const mutations: MutationTree<SearchRecipeState> = {
  setRecent (state, recipes: Array<Element>) {
    state.list = recipes
  }
}

export const actions: ActionTree<SearchRecipeState, SearchRecipeState> = {
  get ({ commit }, { app }) {
    const list = app.$cookies.get('searchRecent') || []
    commit('setRecent', list)
  },
  search ({ commit }, { phrase, app }) {
    const results: Array<Element> = app.$cookies.get('searchRecent') || []
    const regex = new RegExp(phrase)
    const resultsFilter: Array<Element> = results.filter((value) => {
      return value.name.match(regex) || value.description.match(regex)
    })
    commit('setRecent', resultsFilter)
  },
  add ({ dispatch }, { app, element, limit, phrase }) {
    const results: Array<Element> = app.$cookies.get('searchRecent') || []

    if (!moveElementInArray(
      results,
      (value: Element) => value._id === element._id,
      Place.start,
      AmountChange.one
    )) {
      results.unshift(element)

      // deleting extra data
      if (results.length > limit) {
        results.pop()
      }
    }

    app.$cookies.set('searchRecent', results)
    dispatch('search', {
      app,
      phrase
    })
  }
}
