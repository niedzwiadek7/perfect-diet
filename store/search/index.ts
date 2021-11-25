import { ActionTree, GetterTree, MutationTree } from 'vuex'
import SearchStatus from '~/assets/interface/enums/Search/SearchStatus'
import Category from '~/assets/interface/Store/Search/Category'
import isMatch, { TypeofResult } from '~/utils/validators/object/isMatch'

export const state = () => {
  return {
    searchStatus: SearchStatus.WAITING as SearchStatus,
    limit: 5
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
        if (value.list.length > 0) {
          // @ts-ignore
          result.push(value)
        }
      }
    }

    // sort result array
    result.sort((a: Category, b: Category) => {
      if (a.order < b.order) {
        return -1
      } else {
        return 1
      }
    })

    return result
  },
  getSearchStatus: state => state.searchStatus,
  getLimit: state => state.limit
}

export const mutations: MutationTree<RootState> = {
  setSearchStatus (state, searchStatus) {
    state.searchStatus = searchStatus
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async search ({ commit, dispatch, state }, { app, phrase }) {
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
          limit: state.limit
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
        dispatch('recent/get', {
          app
        })
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
