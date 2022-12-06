import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Todo = mongoose.model("todo", TodoSchema);

export default Todo;
