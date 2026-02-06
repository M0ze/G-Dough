
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chefSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, {
  timestamps: true,
});

const Chef = mongoose.model('Chef', chefSchema);

module.exports = Chef;
