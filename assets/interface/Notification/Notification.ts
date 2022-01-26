import Type from '~/assets/interface/enums/Notification/Type'

interface Notification {
  _id: string,
  type: Type,
  initiator: Array<string>,
  time: Date,
  recipeID?: string
}

export default Notification
