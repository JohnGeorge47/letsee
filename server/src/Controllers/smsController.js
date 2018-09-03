let smsController = {};
import axios from 'axios';
let body = 'From=9422919865&To=0543213456&Body=Hello its John!';
let apiCaller = () => {
  axios({
    method: 'post',
    url:
      'https://SAMPLE:a1cbbb045ffee8f25bccb8b4411f5ec7e4112749@api.exotel.com/v1/Accounts/mounblue3/Sms/send',
    data: {
      body: body
    }
  })
    .then(res => {
      console.log(response.body);
    })
    .catch(err => {
      console.log(err);
    });
};
smsController.post = async (req, res) => {
  let data = await apiCaller();
  console.log('Done');
};

export default smsController;
