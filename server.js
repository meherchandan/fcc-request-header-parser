// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));


//Route to get the user information
app.get("/api/whoami",function(request, response){
  const header = request.headers;
  const ipaddress = header['x-forwarded-for'].substring(0,header['x-forwarded-for'].indexOf(','));
  const language = header['accept-language'].substring(0,header['accept-language'].indexOf(','));
  const software = header['user-agent'].substring(header['user-agent'].indexOf('(')+1,header['user-agent'].indexOf(')'));
  
  response.json({ipaddress, language, software })
})
// http://expressjs.com/en/starter/basic-routing.html



// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body

// Simple in-memory store for now


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
