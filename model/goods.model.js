var mongoose = require('mongoose');
const Schema = mongoose.Schema;


const goodSchema = new Schema({
    name: { type: String, require: true },
    price: { type: String, require: true },
    category: { type: String, require: true },
    description: { type: String, require: true },
    color: { type: String, require: true },
    image: { type: String, require: false },
}, { timestamps: true })



module.exports = mongoose.model('Goods', goodSchema);