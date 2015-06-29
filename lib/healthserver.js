var bodyParser  = require('body-parser');

module.exports = function(express) {
    var app = express();
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.get('/webhookpusher/admin/health/check', function(request, response) {
        response.json({
            server: {
                healthy: true
            }
        });
    });

    app.get('/zxmonitor/status.txt', function(request, response) {
        response.sendFile("/var/www/zxmonitor/status.txt");
    });

    return {
        listen: function(port) {
            app.listen(port);
        }
    }
}
