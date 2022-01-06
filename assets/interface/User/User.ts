import Day from '@/assets/interface/User/Day'

interface User {
  _id: string,
  firstName: string,
  lastName: string,
  email: string,
  photo: (string | null),
  updated: boolean,
  recipes: Array<string>,
  menu: Array<Day>,
  description: string,
  watched: Array<string>,
  shoppingList: Array<string>,
  subscriptions: number,
  createdAt: Date,
  updatedAt: Date
}

export default User
