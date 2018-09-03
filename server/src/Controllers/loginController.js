import userCreator from '../userCreator/userCreator';

let loginController = {};

loginController.post = (req, res) => {
  userCreator.getUser(req.body.username, req.body.password).then(response => {
    let responseSent = {};
    if (response.data === 'Success') {
      responseSent = {
        data: response.data,
        status: 200
      };
      res.send(responseSent);
    } else {
      responseSent = {
        data: response.data,
        status: 403
      };
      res.send(responseSent);
    }
  });
};

export default loginController;
