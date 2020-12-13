const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  profilePicture: String,
  blocks: [ { type: Schema.Types.ObjectId, ref: 'Block' } ],
  ideas: [ { type: Schema.Types.ObjectId, ref: 'Idea' } ],
});

const User = mongoose.model('User', userSchema);
module.exports = User;