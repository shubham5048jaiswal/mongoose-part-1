const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
rating:{
    type:Number,
    min:1,
    max:5,
    required: true,
},
comment:{
    type:string,
    required: true
},
author:{
    type:string,
    required: true,
}
},{
timestamp:true
});

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
    comments:[commentschema]
    });{
        timestamp:true
    }
var dishes = mongoose.model('dish', dishSchema);

module.exports = dishes;