interface Ingredient {
  _id: string,
  name: string,
  description: string,
  accepting: boolean,
  photo: (string | null)
}

export default Ingredient
