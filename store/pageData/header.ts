import { MutationTree } from 'vuex'

export const state = () => {
  return {
    title: '' as string,
    desc: '' as string
  }
}

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setTitle (state, value: string) {
    state.title = value
  },
  setDesc (state, value: string) {
    state.desc = value
  }
}
