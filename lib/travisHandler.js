module.exports = function(Pusher) {
    var pusher = new Pusher({
        appId: process.env.APPID,
        key: process.env.KEY,
        secret: process.env.SECRET
    });

    return {
        handle: function(contents) {
            pusher.trigger('travis', 'build', contents);
        }
    };
};