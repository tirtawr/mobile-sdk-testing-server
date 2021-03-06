var express = require('express');
var router = express.Router();
var apiController = require('./controllers/apiController');

router.post('/charge', apiController.doCharge);

router.get('/card', apiController.getCards);

router.post('/card/register', apiController.registerCard);

router.post('/auth', apiController.getAuth);

router.get('/ping', apiController.getPing);

router.post('/ping', apiController.postPing);

module.exports = router;
