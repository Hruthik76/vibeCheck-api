const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/signup', async (req,res) => {
    const {username, email, password} = req.body;
    try {

        // checking the user existence
        let user = await User.findOne({email});
        if (user) {
            return res.status(400).json({message: 'User already exists'});
        }
        //create user
        user = await User.create({username,email,password});

        //generate jwttoken
        const token = user.getSignedJwtToken();

        res.status(201).json({success:true, token});

    }catch (error) {
        console.error(error.message);
        res.status(500).json({message:'server error'})
    }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = user.getSignedJwtToken();
    res.status(200).json({ success: true, token });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;