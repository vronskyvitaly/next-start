export type Card = {
  _id: string
  title: string
  price: number
  discount: number
  hrefIng: string | null
  basket: boolean
  counter: number
  isFavorites: boolean
  isModified: boolean
}
