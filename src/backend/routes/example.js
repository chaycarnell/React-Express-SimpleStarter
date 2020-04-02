const express = require('express');
const router = express.Router();
const exampleController = require('../api/controllers/example');

router.get('/test', exampleController.test);

module.exports = router;
