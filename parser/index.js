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
  .createTable('player_detai', table => {
    table.string('Year');
    table.string('Player').primary();
    table.string('Pos');
    table.string('HT');
    table.string('Team');
    table.string('Selection Type');
    table.string('Nationality');
    table.string('NBA Draft Status');
  })
  .then(() => {
    console.log('ddd');
    fs.createReadStream('NBA-All-Star-Games.csv')
      .pipe(csv())
      .on('data', data => {
        console.log(data);
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
