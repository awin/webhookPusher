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

    return {
        listen: function(port) {
            app.listen(port);
        }
    }
}