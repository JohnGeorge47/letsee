const knex = require('knex')(require('../knexfile'));
import createUser from '../userCreator/userCreator';
let userController = {};
userController.post = (req, res) => {
  createUser(req.body.username, req.body.password).then(data => {
    console.log(data);
    res.sendStatus(200);
  });
};
export default userController;
