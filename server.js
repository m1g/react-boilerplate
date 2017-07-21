var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.listen(PORT, function() {
  console.log('Express server is up on port ' + PORT)
})

// let path = require('path');
//
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.get('/*', function(req, res) {
//   res.sendFile('index.html', {root: path.join(__dirname, 'public')});
// });
//
// app.listen(3000, function(){
//   console.log('Express server is up on port 3000');
// })
