import Day from '@/assets/interface/User/Day';

interface User {
  fistName: string,
  lastName: string,
  email: string,
  photo: string,
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
