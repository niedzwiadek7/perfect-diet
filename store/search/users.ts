import { GetterTree, ActionTree, MutationTree } from 'vuex'
import User from '@/assets/interface/User/User'
import Element from '~/assets/interface/Content/Search/Element'
import Category from '~/assets/interface/Store/Search/Category'
import {
  createElementFromUser
} from '~/utils/constructors/store/search/Element'

const address = 'https://recipe-server-2709.herokuapp.com/api'

export const state = (): Category => {
  return {
    list: [] as Array<Element>,
    title: 'Użytkownicy' as string
  }
}

export type SearchUserState = ReturnType<typeof state>

export const getters: GetterTree<SearchUserState, SearchUserState> = {
  isFilled: state => state.list.length > 0,
  countFounded: state => state.list.length
}

export const mutations: MutationTree<SearchUserState> = {
  setUsers (state, Users: Array<Element>) {
    state.list = Users
  }
}

export const actions: ActionTree<SearchUserState, SearchUserState> = {
  async search ({ commit }, { phrase, limit }) {
    const results = await this.$axios.$post(`${address}/search/User`, {
      word: phrase,
      limit
    }) as Array<User>
    const resultElementsList: Array<Element> = []
    results.forEach((user) => {
      resultElementsList.push(createElementFromUser(user))
    })
    commit('setUsers', resultElementsList)
  }
}
