import { ActionTree, GetterTree, MutationTree } from 'vuex'
import Notification from '~/assets/interface/Notification/Notification'
import Section from '~/assets/interface/Notification/Section'
import { timingFullDays, timingMinutes } from '~/utils/time/timing'
import { pushSection } from '~/utils/constructors/store/notification/Section'

const address = 'https://recipe-server-2709.herokuapp.com/api'

export const state = () => {
  return {
    list: [] as Array<Section>
  }
}

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  isEmpty: state => state.list.length === 0,
  getList: state => state.list
}

export const mutations: MutationTree<RootState> = {
  setState (state, list: Array<Notification>) {
    const currentTime = new Date()
    const result: Array<Section> = []
    let iterator: number = 0

    iterator = pushSection(iterator, 'Nowe', list, result,
      (element: Notification) => timingMinutes(currentTime, new Date(element.time)) <= 60
    )

    iterator = pushSection(iterator, 'Dzisiaj', list, result,
      (element: Notification) => timingFullDays(currentTime, new Date(element.time)) < 1
    )

    iterator = pushSection(iterator, 'Wczoraj', list, result,
      (element: Notification) => timingFullDays(currentTime, new Date(element.time)) < 2
    )

    const months = [
      'Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec',
      'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'
    ]

    while (iterator < list.length) {
      const date = new Date(list[iterator].time)
      const difference = timingFullDays(currentTime, date)
      const day = date.getDate()
      const month = date.getMonth()

      iterator = pushSection(iterator, `${day} ${months[month]}`, list, result,
        (element: Notification) => timingFullDays(currentTime, new Date(element.time)) === difference
      )
    }

    state.list = result
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async getNotifications ({ commit, dispatch }, { app }) {
    const notifications: Array<Notification> = await app.$axios.$get('/test/Profile/Notification/data1.json')

    // change first inittiators from id to user objectt
    for (const notification of notifications) {
      await dispatch('readUserData', {
        app,
        id: notification.initiator[0],
        notification,
        index: 0
      })
      if (notification.initiator[1] !== undefined) {
        await dispatch('readUserData', {
          app,
          id: notification.initiator[1],
          notification,
          index: 1
        })
      }
    }

    commit('setState', notifications)
  },
  // eslint-disable-next-line no-empty-pattern
  async readUserData ({ }, { app, id, notification, index }) {
    notification.initiator[index] = await app.$axios.$get(`${address}/users/${id}`)
  }
}
