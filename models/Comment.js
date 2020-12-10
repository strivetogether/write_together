const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blockSchema = new Schema({
  title: String,
  text: String,
  question: String,
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  parentBlock: String,
  creationDate: { type: Date, default: Date.now },
  ideas: []
});

const Block = mongoose.model('Block', blockSchema);
module.exports = Block;