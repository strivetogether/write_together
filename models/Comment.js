const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  title: String,
  text: String,
  question: String,
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  parentBlock: String,
  creationDate: { type: Date, default: Date.now },
  ideas: []
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;