//libs
import { Schema, model } from 'mongoose';
//create a new schema
const userSchema = new Schema({
  fname: String,
  lname: String,
  email: String,
  dob: Date,
  username: String,
  password: String,
  profilePic: String,
  followers: Number,
  following: Number,
  numberOfPosts: Number,
  posts: Object,
});
//compile schema into a model
const User = model('User', userSchema);

export default User;
