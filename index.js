var Twig = require('twig');
var express = require('express');
var app = express();

app.use('/dist', express.static('dist'));

app.set('twig options', { strict_variables: false });
app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res){
  res.render('index.twig');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
