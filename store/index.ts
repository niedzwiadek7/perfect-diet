import { ActionTree } from 'vuex'

export const state = () => {
  return {}
}

export type RootState = ReturnType<typeof state>

export const actions: ActionTree<RootState, RootState> = {
  nuxtServerInit ({ dispatch }, { app }) {
    // download user information
    // const auth = app.$cookies.get('token')
    // const user = app.$cookies.get('user')
    // commit('user/setAuth', auth !== undefined ? auth : null)
    // commit('user/setUser', user !== undefined ? user : null)

    // download recent search results
    dispatch('search/recent/get', {
      app
    })
  }
}
