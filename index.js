const mongoose = require('mongoose');

const dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db) =>{

    console.log('connected correctly to server');

     Dishes.create({
        name: 'shubham',
        description:'test'
    })
    .then((dish) =>{
        console.log(dish);
        return dishes.find({}).exec();
    })
    .then((dishes) =>{
        console.log(dishes);

        return dishes.remove({});
    })
    .then(() =>{
        return mongoose.connection.close();
    })
    .catch((err) =>{
        console.log(err);
    });
});