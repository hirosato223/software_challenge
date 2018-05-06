const router = require('express').Router();
const controller = require('./controller.js');

router.get('/getAllUsers', async (req, res) => {
  try {
    let data = await controller.getAllUsers();
    res.send(data);
  } catch (err) {
    res.sendStatus(500);
  }
});

module.exports = router;
