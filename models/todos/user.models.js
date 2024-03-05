import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      // Field required at all cost.
      required: true,
      // the username should be unique.
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required.'],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);

// till here the code is going to be same for all the models.
