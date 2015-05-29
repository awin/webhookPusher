console.log(process.env);
var Pusher = require('pusher');
var travisHandler = require("lib/travisHandler")(Pusher);

var express = require('express');
var bodyParser  = require('body-parser');

var PORT = (process.env.PORT || 5000);
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router(); 

app.get('/', function(request, response) {
  response.send('Simple Webhook Server');
});

// Routes
router.post('/travis', function(req, res) {
    res.header('Content-Type', 'application/json');
    var contents = req.body;
    var foo = travisHandler.handle(contents);
    console.log(foo);
    res.json({
        message: 'done',
        foo: foo
    });
});

app.use('/webhook', router);
app.listen(PORT);
console.log('Webhook Server started... port: ' + PORT);