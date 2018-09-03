import bcrypt from 'bcrypt';
const saltRounds = 10;
const knex = require('knex')(require('../knexfile'));
const createUser = async (username, password) => {
  console.log(username);
  let hashed = await bcrypt.hash(password, saltRounds);
  console.log(hashed);
  password = hashed;
  return knex('user').insert({
    username,
    password
  });
};

const getUser = async (username, password) => {
  console.log(`authenticating ${username}`);
  let authResult = {};
  return knex('user')
    .where({ username })
    .then(([user]) => {
      if (!user) {
        authResult = {
          data: 'User does not exist'
        };
        return authResult;
      } else {
        console.log(user.password);
        return bcrypt.compare(password, user.password).then(res => {
          if (res === true) {
            authResult = {
              data: 'Success'
            };
          } else {
            authResult = {
              data: 'Wrong password'
            };
          }
          return authResult;
        });
      }
    });
  console.log(authResult);
};

let userCreator = {
  createUser,
  getUser
};

export default userCreator;
