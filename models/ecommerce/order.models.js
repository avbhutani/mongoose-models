import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  quantity: {
    type: Number,
    required: true,
  },
});


const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    // Now my orderItems array would only contain orderItemSchema,basically ek sub structure bhi define krdia hai humne.
    orderItems: [orderItemSchema],
    address: {
      type:String,
      required:true
    },
    status: {
      type:String,
      // enum means choices that you can choose from.
      enum:['Pending','Cancelled','Delivered'],
      default:'Pending'
    }
  },
  { timestamps: true }
);

export const Order = mongoose.model('Order', orderSchema);