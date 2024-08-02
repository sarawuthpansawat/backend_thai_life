const express = require('express');
const { getCommissionRate, getOverridingRate } = require('../controllers/commissionController');

const router = express.Router();

router.post('/commissionRate', getCommissionRate);
router.post('/overridingRate', getOverridingRate);

module.exports = router;
