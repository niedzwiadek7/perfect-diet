import { GetterTree, ActionTree } from 'vuex'
import SearchStatus from '~/assets/interface/enums/Search/SearchStatus'
import Category from '~/assets/interface/Store/Search/Category'
import isMatch, { TypeofResult } from '~/utils/validators/object/isMatch'

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
    return result
  }
}

export const actions: ActionTree<RootState, RootState> = {
  search ({ dispatch }, { phrase, limit }) {
    const findTemplate = {
      phrase,
      limit
    }
    dispatch('recipes/search', findTemplate)
    dispatch('ingredients/search', findTemplate)
    dispatch('users/search', findTemplate)
  }
}
