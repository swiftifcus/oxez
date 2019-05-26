const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
  title: String,
  body: String,
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model('todos', todoSchema);
