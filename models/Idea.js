const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ideaSchema = new Schema({
  text: String,
  comments: [],
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  parentBlock: { type: Schema.Types.ObjectId, ref: 'Block' },
  creationDate: { type: Date, default: Date.now }
});

const Idea = mongoose.model('Idea', ideaSchema);
module.exports = Idea;