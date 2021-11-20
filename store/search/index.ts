import { ActionTree, GetterTree, MutationTree } from 'vuex'
import SearchStatus from '~/assets/interface/enums/Search/SearchStatus'
import Category from '~/assets/interface/Store/Search/Category'
import isMatch, { TypeofResult } from '~/utils/validators/object/isMatch'
import moveElementInArray, { AmountChange, Place } from '~/utils/predefine/array/moveElement'

export const state = () => {
  return {
    searchStatus: SearchStatus.WAITING as SearchStatus
  }
}

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  getCategories: (state) => {
    const result: Array<Category> = []
    const expectedStructure = {
      list: TypeofResult.object,
      title: TypeofResult.string
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const [key, value] of Object.entries(state)) {
      if (isMatch(value, expectedStructure)) {
        // @ts-ignore
        result.push(value)
      }
    }

    // recent first object in array
    moveElementInArray(
      result,
      (value: Category) => value.title === 'Ostatnie',
      Place.start,
      AmountChange.one
    )

    return result
  },
  getSearchStatus: state => state.searchStatus
}

export const mutations: MutationTree<RootState> = {
  setSearchStatus (state, searchStatus) {
    state.searchStatus = searchStatus
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async search ({ commit, dispatch, state }, { app, phrase, limit }) {
    const resetStates = () => {
      commit('recipes/setRecipes', [])
      commit('ingredients/setIngredients', [])
      commit('users/setUsers', [])
    }

    try {
      if (state.searchStatus === SearchStatus.WAITING) {
        commit('setSearchStatus', SearchStatus.SEARCHING)
      }
      if (phrase.length > 0) {
        const findTemplate = {
          phrase,
          limit
        }
        await dispatch('recipes/search', findTemplate)
        await dispatch('ingredients/search', findTemplate)
        await dispatch('users/search', findTemplate)
        dispatch('recent/search', {
          phrase,
          app
        })
        commit('setSearchStatus', SearchStatus.SEARCH_SUCCESS)
      } else {
        resetStates()
        commit('setSearchStatus', SearchStatus.WAITING)
      }
    } catch (err) {
      resetStates()
      commit('setSearchStatus', SearchStatus.ERROR)
      if (process.env.NODE_ENV !== 'production') {
        console.log(err)
      }
    }
  }
}
