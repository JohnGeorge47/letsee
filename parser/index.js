var csv = require('csv-parser');
var fs = require('fs');
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'nba_players'
  }
});
knex.schema
  .createTable('player_data', table => {
    table.string('Year');
    table.string('Player');
    table.string('Pos');
    table.string('HT');
    table.string('Team');

    table.string('Nationality');
  })
  .then(() => {
    var stream = csv(['index', 'message']);
    let playerList = [];
    fs.createReadStream('NBA-All-Star-Games.csv')
      .pipe(csv())
      .on('data', data => {
        let individualRow = {};
        if (data.Player != '') {
          individualRow.Year = data.Year;
          individualRow.Player = data.Player;
          individualRow.Team = data.Team;
          individualRow.Nationality = data.Nationality;
          individualRow.Pos = data.Pos;
          individualRow['HT'] = data['HT'];
          playerList.push(individualRow);
        }
      })
      .on('end', () => {
        console.log(playerList);
        knex
          .insert(playerList)
          .into('player_data')
          .then(id => {
            console.log(id);
          });
      });
  });
// fs.createReadStream('NBA-All-Star-Games.csv')
//   .pipe(csv())
//   .on('headers', function(headerList) {
//     let newHeaders = headerList.filter(header => {
//       return header != '';
//     });
//     knex.schema.createTable('player_details', table => {
//       table.string(Year);
//       table.string(Player);
//     });
//   });
