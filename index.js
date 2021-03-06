var twig = require('twig');
var express = require('express');
var app = express();

app.use('/dist', express.static('dist'));
app.use('/images', express.static('assets/images'));

app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'html');
app.set('twig options', { strict_variables: false });

app.engine('html', twig.__express);

app.get('/', function(req, res){
  res.render('home');
});

app.get('/book', function(req, res){
  res.render('book');
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
