//libs
import { Router } from 'express';
import User from '../models/user.model.js';
//instantiate router
const router = Router();
//create routes
//GET
router.route('/').get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(404).json(`Error: ${err}`));
});
//POST
router.route('/add').get((req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const dob = Date.parse(req.body.dob);
  const username = req.body.username;
  const password = req.body.password;
  const profilePic = req.body.profilePic;
  const followers = Number(req.body.followers);
  const following = Number(req.body.following);
  const numberOfPosts = Number(req.body.numberOfPosts);
  const posts = Object(req.body.posts);
  //create a new user
  const newUser = new User({
    fname,
    lname,
    email,
    dob,
    username,
    password,
    profilePic,
    followers,
    following,
    numberOfPosts,
    posts,
  });
  //save new user
  newUser
    .save()
    .then(() => res.json('New User Added!'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

export default router;
