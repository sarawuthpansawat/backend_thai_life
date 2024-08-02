const express = require('express');
const cors = require('cors');
const commissionRoutes = require('./routes/commissionRoutes');
const policyRoutes = require('./routes/policyRoutes');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
app.use('/api/commissions', commissionRoutes);
app.use('/api/policies', policyRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
