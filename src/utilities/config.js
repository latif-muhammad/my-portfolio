// config.js
const config = {
    smtp: {
         serviceID:process.env.REACT_APP_SERVICE_ID,
         templateId:process.env.REACT_APP_TEMPLATE_ID,
         publicKey:process.env.REACT_APP_PUBLIC_KEY,
    },
  };
  
  module.exports = config;
  