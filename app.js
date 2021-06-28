const { json } = require('express');
const express = require('express');
const app = express();
app.set('views', './views');
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);

const port = 1880;
const fetch = require("node-fetch");

async function api(){
  const api_Url = `https://pokeapi.co/api/v2/pokemon/pikachu/`;
  const response = await fetch(api_Url);
  const json = await response.json();
  
  console.log(json.stats);
  
  app.get('', (req,res)=> {

    res.render('index', {text: json.sprites.front_shiny, stats:json.stats[1].stat.name + " " + json.stats[1].base_stat });
  });
}
api();




app.listen(port, () => {
 
   
  console.log(`Example app listening at http://localhost:${port}`)
});
