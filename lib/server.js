var bodyParser  = require('body-parser');

module.exports = function(express) {
    var app = express();
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    var router = express.Router(); 

    app.get('/', function(request, response) {
        response.send('Simple Webhook Server');
    });
    app.use('/webhook', router);

    return {
        attachHandler: function(endpoint, handler) {
            router.post(endpoint, function(req, res) {
                res.header('Content-Type', 'application/json');
                var contents = req.body;
                //@TODO: Implement failure handling
                handler.handle(contents);
                res.json({
                    message: 'done'
                });
            });
        },
        listen: function(port) {
            app.listen(port);
        }
    }
}


