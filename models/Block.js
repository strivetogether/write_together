const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blockSchema = new Schema({
  title: String,
  text: String,
  question: String,
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  creationDate: Date.now,
  ideas: [ { type: Schema.Types.ObjectId, ref: 'Idea' } ]
});

const Block = mongoose.model('Block', blockSchema);
module.exports = Block;