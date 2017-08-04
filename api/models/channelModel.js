const mongoose = require('mongoose');

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const channelSchema = new Schema({
    id: ObjectId,
    name: String,
    language: String,
    streamAddress: String,
    playlist: String
});

module.exports = mongoose.model('Channel', channelSchema);

/*mongoose.connect('mongodb://localhost:27017/liveAudio', {useMongoClient: true});

const Channel = mongoose.model('Vitas', channelSchema);

Channel.create({name: 'Arajin aliq', language: 'English', streamAddress: 'isudclsadjnc', playlist: 'Vaxo'}, function (err, small) {
    if (err) return console.log(err);
});*/
