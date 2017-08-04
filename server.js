let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    path = require('path');
  bodyParser = require('body-parser');

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());
//app.use('/play', express.static(__dirname + '/public/index.html'));

let routes = require('./api/routes/liveAudioRoutes');
routes(app);

/*app.get('/play', function(req, res){
    res.render('index.html');
});*/

app.listen(port);

console.log('live audio streaming  server started on: ' + port);
