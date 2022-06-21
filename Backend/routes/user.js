const User = require("../models/User");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const bcrypt=require('bcrypt');

const router = require("express").Router();


// Create USER
router.post("/",async (req, res) => {
  const newUser = new User(req.body);
let savedUser;
    if(newUser){

    savedUser = await newUser.save();
       return res.status(200).json(savedUser);

    }

  });



// UPDATE USER 
 router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
  
const saltPassword=await bcrypt.genSalt(10);
const securePassword=await bcrypt.hash(req.body.password,saltPassword)
 const password =securePassword  
  
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});






//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});



//GET USER
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
console.log("err");
  }
});



//GET ALL USER
router.get("/", async (req, res) => {
  const query = req.query.new;

  try {
   let users;
  if(query)
  {
    users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
  return res.sendStatus(200).json(users);

  }

  } catch (err) {
    res.status(500).json(err);

  }
 
});

// router.get("/",async (req, res) => {
//   try {
//     const users = await newUser.find();
//     res.send(200).json(users);
// } catch (error) {
//     console.log("Not found any data.");
// }
// });


module.exports = router;