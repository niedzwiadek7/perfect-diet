import Notification from '~/assets/interface/Notification/Notification'
import Section from '~/assets/interface/Notification/Section'

export const pushSection = (
  iterator: number,
  title: string,
  list: Array<Notification>,
  result: Array<Section>,
  condition: Function
): number => {
  const section: Section = {
    title,
    notifications: []
  }

  while (iterator < list.length && condition(list[iterator])) {
    section.notifications.push(list[iterator])
    iterator += 1
  }

  if (section.notifications.length > 0) {
    result.push(section)
  }

  return iterator
}
