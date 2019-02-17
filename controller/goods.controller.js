let Goods = require('../model/goods.model');
let multer = require('multer');
let path = require('path');



var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
    }
});
var upload = multer({ storage: storage }).single('good_file');
// var upload = multer({ storage: storage });


// router.param('id', function(req, res, next, id) {
//     console.log('An id value is being initiated');
//     next();
// });

module.exports = {

    getAllGoods: function(req, res) {
        Goods.find({}, 'name price', (err, goods) => {
            res.json(goods)
        });
    },


    getSingleGood: function(req, res) {
        Goods.findById(req.params.id, 'name price category description color image', (err, good) => {
            res.json({error: false, good})
        })
    },

    addGood: function(req, res) {
        // console.log(req.body.name);
        const Joi = require('joi');
        const data = req.body;

        // define the validation schema
        const schema = Joi.object().keys({
            name: Joi.string().required(),
            price: Joi.string().required(),
            category: Joi.string().required(),
            description: Joi.string().required(),
            color: Joi.string().required()
        });

        Joi.validate(data, schema, (err, value) => {
            if (err) {
                // send a 422 error response if validation fails
                return res.json({
                    error: true,
                    message: 'All input field is required',
                    data: value
                   
                });
            }

            else{

                var item = {
                    name: req.body.name,
                    price: req.body.price,
                    category: req.body.category,
                    description: req.body.description,
                    color: req.body.color
                }

                upload(req, res, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        // console.log('req.file.filename');
                        // console.log(req.file.filename);
                        item.image = req.file.filename

                        // console.log(book);
                        let good = new Goods(item)
                        .save( (err, good) => {
                            if (good) {
                               return res.status(200).json({error: false, message: 'New item has been added', itemId: good._id });
                            }else{
                               return res.status(500).json({ error: true, err, message: 'Error occured' });
                            }
                        } );

                    }
                })

            }
        });




        // var item = {
        //     name: req.body.name,
        //     price: req.body.price,
        //     category: req.body.category,
        //     description: req.body.description,
        //     color: req.body.color
        // }

        // upload(req, res, (err) => {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         // console.log('req.file.filename');
        //         // console.log(req.file.filename);
        //         item.image = req.file.filename

        //         // console.log(book);
        //         let good = new Goods(item)
        //         .save( (err, good) => {
        //             if (good) {
        //                return res.status(200).json({error: false, message: 'New item has been added', itemId: good._id });
        //             }else{
        //                return res.status(500).json({ error: true, err, message: 'Error occured' });
        //             }
        //         } );

        //     }
        // })

  
        

    }


}