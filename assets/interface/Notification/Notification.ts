import Type from '~/assets/interface/enums/Notification/Type'
import User from '~/assets/interface/User/User'

interface Notification {
  _id: string,
  type: Type,
  initiator: Array<(string | User)>,
  time: Date,
  recipeID?: string
}

export default Notification
