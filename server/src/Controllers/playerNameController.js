const knex = require('knex')(require('../knexfile'));
let playerNameController = {};
playerNameController.get = async (req, res) => {
  console.log("we've got this running");
  let data = await knex.select('Player').from('player_data');
  let parsedArray = data.map(current => {
    return current.Player;
  });
  let uniqueData = [...new Set(parsedArray)];
  console.log(uniqueData);
  res.status(200).send({ message: uniqueData });
};

export default playerNameController;
