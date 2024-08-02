const express = require('express');
const { getPolicy } = require('../controllers/policyController');

const router = express.Router();

router.post('/getPolicy', getPolicy);

module.exports = router;
