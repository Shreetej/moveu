// routes/api/users.js

const express =  require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const fetchuser = require('../../middleware/fetchuser')

const JSON_SECRET_KEY = "vikasmoveushreetej"

// Load user model
const User = require('../../models/User');

// @route GET users/test
// @description tests users route
// @access Public
router.get('/test', (req, res) => res.send('user route testing!'));

async function passwordComp(userpassword,bodypassword){
  password = await bcrypt.compare(userpassword,bodypassword)
  console.log(password)
  return password
}
// @route GET /users
// @description Get all users
// @access Public
router.get('/', (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ nousersfound: err.message }));
});

// @route GET api/users/:id
// @description Get single user by id
// @access Public
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(404).json({ nouserfound: 'No user found' }));
});

// @route GET api/users
// @description add/save user
// @access Public
router.post('/', async(req, res) => {
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(req.body.password,salt);
  User.create({
    username:req.body.username,
    email:req.body.email,
    password:secPass
  })
    .then(user => res.json({ id:user.id,msg: 'user added successfully' }))
    .catch(err => res.status(400).json({ error: err.message }));
});

// @route GET api/users/:id
// @description Update user
// @access Public
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(user => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/users/:id
// @description Delete user by id
// @access Public
router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, req.body)
    .then(user => res.json({ mgs: 'User entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such user' }));
});

// @route GET api/users/:id
// @description Delete user by id
// @access Public
router.post('/login', async(req, res) => {
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(req.body.password,salt);
  console.log(req.body)
  User.findOne({username:req.body.name})
      .then(async(user)=>{
        // console.log(user)
        const passwordCompare = await bcrypt.compare(req.body.password,user.password)
        // console.log("Below bcrypt")
        // console.log(passwordCompare)
        if(passwordCompare){
          const data = {user:{id:user.id}}
          const authtoken = jwt.sign(data,secPass);
          user.password=""
          res.json({ authtoken,user})
        }else{
          res.status(404).json({error:"Please enter correct credentials"})
        }
      })
      .catch(err => res.status(404).json({ error: err.message }));
  });

  router.post('/getuser', fetchuser ,async(req, res) => {
    try{
      const userId = req.user.id
      const user = await User.findById(userId).select('-password')
      res.send(user)
    }catch(error){
      res.status(500).send("Internal Server Error")
    }
  })

  module.exports=  router;
