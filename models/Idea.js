const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ideaSchema = new Schema({
  comments: [],
  owner: { type: Schema.Types.ObjectId, ref: 'Block' },
  parentBlock: String,
  creationDate: Date,
});

const Idea = mongoose.model('Idea', ideaSchema);
module.exports = Idea;