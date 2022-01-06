import Types from './Types'

interface Element {
  _id: string,
  name: string,
  photo: (string | undefined),
  type: Types,
  description: string,
  link: (string | null)
}

export default Element
