const express = require('express');
const router = express.Router();

const {
    getHomePage,
    getExchangeRate
} = require('../controllers/weatherController');
/**
 * GET requests
 **/
//Home page
router.get('/', getHomePage);

//Results
router.get('/showExRate', getExchangeRate);

module.exports = router;