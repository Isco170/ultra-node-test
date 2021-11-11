var express = require('express');
var usersController = require('../controller/index');
var router = express.Router();

router.get('/users', usersController.readUsers);
router.get('/users/:name', usersController.readOne);
router.delete('/users', usersController.deleteUser);
router.put('/users', usersController.updateUser);

module.exports = router;