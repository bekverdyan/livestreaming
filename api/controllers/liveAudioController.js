let //fs = require('fs'),
    //path = require('path'),
    //microphoneStream = require('../repository/microphoneRepository'),
    request = require('request');

const baseUrl = 'http://35.158.227.82:8090';

exports.play_by_language = function (req, res) {

    const language = req.params.language;
    req.pipe(req(baseUrl.concat(language.concat('.mp3')))).pipe(res);
};

exports.play = function(req, res) {

    req.pipe(request(baseUrl.concat('/customStream.mp3'))).pipe(res);

    /*microphoneStream.stdout.on('data', function (data) {
        console.log('Sendind data...');
        res.write(data);
    })*/

    /*if(req.url === "/play"){
        fs.readFile("index.html", function (err, data) {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({ a: 1 }));
            /!*res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();*!/
        });
    }
    else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<b>Hey there!</b><br /><br />This is the default response. Requested URL is: ' + request.url);
        res.end();
    }*/

    //res.write('Stream here');
    //res.setHeader('Content-Type', 'application/json');
    //res.send(JSON.stringify({ a: 1 }));
    //res.sendFile(path.join(__dirname, '../../static', 'index.html'));
};