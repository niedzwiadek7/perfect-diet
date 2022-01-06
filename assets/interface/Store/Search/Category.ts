import Element from '~/assets/interface/Content/Search/Element'

interface Category {
  order: number,
  title: string,
  list: Array<(Element)>,
  maxLength?: number
}

export default Category
