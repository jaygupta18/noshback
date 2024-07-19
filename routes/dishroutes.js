const express = require('express');
const router = express.Router();
const {getdish,togglePublishDish, postdish} = require('../controller/dishcontroller');

router.get('/getdish', getdish);
router.post('/postdish',postdish)
router.put('/toggle/:id', togglePublishDish);

module.exports = router;
