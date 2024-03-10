import mongoose, { model, models, Schema } from 'mongoose'

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: false
    },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]
  },
  { timestamps: true }
)

export default models.Users || model('Users', userSchema)
