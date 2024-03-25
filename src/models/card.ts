import { model, models, Schema } from 'mongoose'

const cardSchema = new Schema({
  title: { type: String },
  price: { type: Number },
  discount: { type: Number },
  hrefIng: { type: String || null }
})

export default models.Card || model('Card', cardSchema)
