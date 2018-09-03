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

export default createUser;
