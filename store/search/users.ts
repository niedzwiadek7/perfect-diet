import { GetterTree, ActionTree, MutationTree } from 'vuex'
import User from '@/assets/interface/User/User'
import Category from '~/assets/interface/Store/Search/Category'

const address = 'https://recipe-server-2709.herokuapp.com/api'

export const state = (): Category => {
  return {
    list: [] as Array<User>,
    title: 'Użytkownicy' as string
  }
}

export type SearchUserState = ReturnType<typeof state>

export const getters: GetterTree<SearchUserState, SearchUserState> = {
  isFilled: state => state.list.length > 0,
  countFounded: state => state.list.length
}

export const mutations: MutationTree<SearchUserState> = {
  setUsers (state, Users: Array<User>) {
    state.list = Users
  },
  clearUsers (state) {
    state.list = []
  }
}

export const actions: ActionTree<SearchUserState, SearchUserState> = {
  async search ({ commit }, { phrase, limit }) {
    const results = await this.$axios.$post(`${address}/search/User`, {
      word: phrase,
      limit
    }) as User[]
    commit('setUsers', results)
  }
}
