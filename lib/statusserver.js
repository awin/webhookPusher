module.exports = function(express) {
    var app = express();

    app.get('/zxmonitor/status.txt', function(request, response) {
	    response.sendFile("/var/www/zxmonitor/status.txt");
    });

    return {
        listen: function(port) {
            app.listen(port);
        }
    }
}
