import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema(
  {
    content: {
      type:String,
      required:true,
    },
    complete:{
      type:Boolean,
      default:false
    },
    createdBy:{
      // This will be the default for storing any other kind of object or schema of any kind.
      type: mongoose.Schema.Types.ObjectId,
      // This name will be the same as the user that is to be put here.
      ref:'User'
    },
    // For the subtodos.
    subTodos:[
      {
        type:mongoose.Schema.Types.ObjectId,
        // This reference is for the subtodo, as we have to add subtodo in this particular schema.
        ref:'SubTodo'
      }
    ]
    // Basically declaring that the todo object will contain an array of objects and the objects will be nothing but the subtodos object that I am creating.
  },{timestamps:true}
)


// It always says about the 2 things,
export const Todo = mongoose.model('Todo',todoSchema);