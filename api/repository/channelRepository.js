const mongoose = require('mongoose');
const Channel =  require('../models/channelModel');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/liveAudio', {useMongoClient: true});

let channel = new Channel({name: 'Arajin aliq', language: 'English', streamAddress: 'isudclsadjnc', playlist: 'Vaxo'});

channel.save(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('SAVED ' + channel);
    }
});