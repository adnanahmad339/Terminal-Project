const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt=require('bcrypt');

//REGISTER
router.post("/register", async (req, res) => {

  const saltPassword=await bcrypt.genSalt(10);
  const securePassword=await bcrypt.hash(req.body.password,saltPassword)

  const newUser = new User({
    
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    password: securePassword
     
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post("/login", async (req, res) => {
   try {
    const user = await User.findOne(
        {
            username: req.body.username
        }
    );

if(!user &&    !bcrypt.compareSync(req.body.password, user.password)){
return res.status(401).json("Wrong Username!");

}

 else{


const accessToken = jwt.sign(
    {
        id: user._id,
        isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });


const { password, ...others } = user._doc;
res.status(200).json({ ...others, accessToken })
}} catch (err) {
res.status(500).json(err);
};
});

module.exports = router;