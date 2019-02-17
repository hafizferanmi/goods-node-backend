var mongoose = require('mongoose');
var multer = require('multer');
var express = require('express');
var bodyParser = require('body-parser');
var donenv = require('dotenv').config();
var cors = require('cors');
var apiRoutes = require("./route/goods.route");
var app = express();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'https://goods-react-frontend.herokuapp.com');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const port = process.env.PORT;
var router = express.Router();
// mongoose.connect(process.env.DB);
mongoose.connect('mongodb://hf:123hafizferanmi@ds239055.mlab.com:39055/goods');


router.get('/', function(req, res) {
    res.json('Welcome to the store.');
});



app.use('/', router);
app.use('/api', apiRoutes)

app.listen(port, function(err) {
    console.log('Running my port: ' + port);
})