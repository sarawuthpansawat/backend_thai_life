const policies = require('../data/policies');

exports.getPolicy = (req, res) => {
  const { headerData } = req.body;
  //console.log('Received getPolicy request with:', req.body); // Debugging log

  if (!headerData) {
    return res.status(400).json({
      responseStatus: {
        errorCode: '400',
        errorMessage: 'Missing headerData',
      },
    });
  }

  const { messageId, sentDateTime, insureName } = headerData;

  if (!messageId || !sentDateTime || !insureName) {
    return res.status(400).json({
      responseStatus: {
        errorCode: '400',
        errorMessage: 'Missing required fields',
      },
    });
  }

  const policy = policies.find(p => p.insureName === insureName);

  if (!policy) {
    return res.status(404).json({
      responseStatus: {
        errorCode: '404',
        errorMessage: 'Policy not found',
      },
    });
  }

  const response = {
    headerData: {
      messageId,
      sentDateTime,
    },
    responseDateTime: new Date().toISOString(),
    policy: [
      {
        policyNo: policy.policyNo,
        policyType: policy.policyType,
        status: policy.status,
        //sumAssured: policy.sumAssured,
      },
    ],
    responseStatus: {
      status: '200',
    },
  };

  return res.json(response);
};
