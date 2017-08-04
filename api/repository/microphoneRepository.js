const spawn = require('child_process').spawn;

module.exports = (function () {
    var stream;

    function audioStreamFactory() {
        return spawn('arecord',['-D','plughw:0,0','-f','dat']);
    }

    function getStream() {
        if (stream === undefined) {
            stream = audioStreamFactory();
        }

        return stream;
    }

    return {
        getStream: getStream
    };
})();