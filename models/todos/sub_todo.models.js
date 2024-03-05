import mongoose from 'mongoose';

const subTodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: '',
    },
  },
  { timestamps: true }
);

// Kya naam rhega aur kispe based rhega data.
export const SubTodo = mongoose.model('SubTodo', subTodoSchema);
