interface User {
  fullName: string,
  firstName: string,
  lastName: string,
  email: string,
  photo: (null | File),
  description: string,
  password: string,
  controlPassword: string,
  confirmStatute: boolean
}

export type UserDataType = 'firstName' | 'lastName' | 'email' | 'password' |
  'controlPassword' | 'confirmStatute'

export default User
