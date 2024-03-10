import mongoose, { model, models, Schema } from 'mongoose'

const tasksSchema = new Schema({
  title: { type: String },
  isDone: { type: Boolean },
  // Поле, содержащее ссылку на пользователя
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

// const Tasks = mongoose.model('Tasks', tasksSchema)
// export default Tasks

export default models.Tasks || model('Tasks', tasksSchema)
