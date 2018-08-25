var csv=require('csv-parser')
var fs=require('fs')
var knex=require('knex')({
  client:'mysql',
  connection:{
    host:'localhost',
    user:'root',
    password:'password',
    database:'nba_players'
  }
})
