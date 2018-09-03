const knex = require('knex')(require('../knexfile.js'));
let teamController = {};
teamController.get = async (req, res) => {
  console.log('haha');
  let data = await knex.select('Team').from('player_data');

  let parsedArray = data.map(currentRow => {
    return currentRow.Team;
  });
  let uniqueData = [...new Set(parsedArray)];
  res.status(200).send({ message: uniqueData });
};
export default teamController;
