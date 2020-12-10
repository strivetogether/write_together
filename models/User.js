const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blockSchema = new Schema({
  username: String,
  password: String,
  email: String,
  profilePicture: String,
  owner: String,
  blocks: [],
  ideas: [],
});

const Block = mongoose.model('Block', blockSchema);
module.exports = Block;