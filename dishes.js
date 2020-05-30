const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishSchema = new Schema({
    name: {
        type: strings,
        required: true,
        unique: true
    },
    description: {
        type: strings,
        required: true,
    },
    });{
        timestamp:true
    }
var dishes = mongoose.model('dish', dishSchema);

module.exports = dishes;