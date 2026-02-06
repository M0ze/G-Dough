
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
let Chef = require('../models/chef.model');

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newChef = new Chef({ username, password: hashedPassword });
  await newChef.save();
  res.json('Chef registered!');
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const chef = await Chef.findOne({ username });
  if (!chef) return res.status(400).json('Invalid credentials');
  const validPassword = await bcrypt.compare(password, chef.password);
  if (!validPassword) return res.status(400).json('Invalid credentials');
  const token = jwt.sign({ id: chef._id }, 'secret');
  res.json({ token });
});

module.exports = router;
