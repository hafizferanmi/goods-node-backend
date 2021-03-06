let router = require('express').Router();
let Goods = require('../model/goods.model');
let multer = require('multer');
let path = require('path');
const { check } = require('express-validator/check')
let goodsController = require('../controller/goods.controller');


var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
    }
});
var upload = multer({ storage: storage });


router.param('id', function(req, res, next, id) {
  Goods.findById(id).then(function(item){
    if(!item) { return res.status(200).json({error: true, message: 'Item not found', status: 404 }); }
    return next();
  }).catch(next);
});

router.get('/', function(req, res) {
    res.json('Welcome to our store API.');
});

router.get('/all_goods', goodsController.getAllGoods);
router.get('/good/:id', goodsController.getSingleGood);
router.post('/add_good', upload.single('good_file'), goodsController.addGood);



module.exports = router;