
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  customerName: { type: String, required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  total: { type: Number, required: true },
  deliveryAddress: { type: String, required: true },
}, {
  timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
