var realExtractor = require("./travisJsonExtractor");

module.exports = function(Pusher) {
    var pusher = new Pusher({
        appId: process.env.APPID,
        key: process.env.KEY,
        secret: process.env.SECRET
    });

    var extractor = realExtractor;

    return {
        handle: function(contents) {
            var json = extractor.extract(contents);
            pusher.trigger('travis', 'build', json);
        },
        setExtractor: function(mockExtractor) {
            extractor = mockExtractor;
        }
    };
};