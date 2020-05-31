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
        return dishes.findByIdAndUpdate(dish._id, {
            $set: {description: 'updated test'},
        },{
            new:true
        }).exec();
    })
    .then((dish) =>{
        console.log(dish);

        dish.comment.push({
            rating:5,
            comment:'i m getting feeling nervous',
            author:'jaiswal'
        });

        return dish.save();
    })
    .then((dish) =>{
        console.log(dish);

        return dishes.remove({});
    })
    .then(() =>{
        return mongoose.connection.close();
    })
    .catch((err) =>{
        console.log(err);
    });
});