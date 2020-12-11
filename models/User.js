const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  profilePicture: String,
  owner: String,
  blocks: [],
  ideas: [],
});

const User = mongoose.model('User', userSchema);
module.exports = User;