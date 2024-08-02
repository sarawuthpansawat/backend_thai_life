exports.getCommissionRate = (req, res) => {
  const { year, age } = req.body;
  console.log('Received commissionRate request with:', req.body); // Debugging log

  if (!year || !age) {
    return res.status(400).json({ error: 'Missing year or age' });
  }

  let rate = 0;
  if (year === 1) {
    rate = 2;
  } else if (year === 2) {
    rate = 1;
  } else if (year === 3) {
    rate = 1;
  }

  return res.json({ commissionRate: `${rate}%` });
};

exports.getOverridingRate = (req, res) => {
  const { annual, age } = req.body;
  console.log('Received overridingRate request with:', req.body); // Debugging log

  if (annual === undefined || age === undefined) {
    return res.status(400).json({ error: 'Missing annual or age' });
  }

  let rate = 0;
  if (age <= 50) {
    rate = annual ? 20 : 16;
  } else {
    rate = 13;
  }

  return res.json({ overridingRate: `${rate}%` });
};
