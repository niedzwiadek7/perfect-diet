import Types from './Types'

interface Element {
  _id: string,
  name: string,
  photo: (string | undefined),
  type: Types,
  description: string
}

export default Element