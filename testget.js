var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://openapi.tuyaus.com/v1.0/token?grant_type=1',
  headers: { 
    'client_id': 'natuf57vb3harzkcdmpr', 
    'sign': 'DBC02FD126FB3F5E1D8A87AF10487FDA8407B801C42CF16540A2F42B97092B74', 
    't': '1637582465725', 
    'sign_method': 'HMAC-SHA256', 
    'nonce': '', 
    'stringToSign': ''
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
