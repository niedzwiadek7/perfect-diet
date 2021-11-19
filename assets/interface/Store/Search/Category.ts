import Element from '~/assets/interface/Content/Search/Element'

interface Category {
  title: string,
  list: Array<(Element)>,
  maxLength?: number
}

export default Category
