const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test');


const carSchema = mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    available: Boolean
});
const Car = mongoose.model('Car', carSchema);

// const addCar = new Car({
//     brand: 'Ford',
//     model: 'Focus',
//     year: 2017,
//     available: true
// })

// addCar.save((err, doc) => {
//     if(err) return console.log(err);
//     console.log(doc);
// })

// Car.find((err, doc) => {
//     if(err) return console.log(err);
//     console.log(doc);
// })

// Car.find({brand: 'Ford'},(err, doc) => {
//     if(err) return console.log(err);
//     console.log(doc);
// })

// Car.find({_id: '5b3e8561b70391d2099cd33a'},(err, doc) => {
//     if(err) return console.log(err);
//     console.log(doc);
// })

// Car.findById('5b3e8561b70391d2099cd33a',(err, doc) => {
//     if(err) return console.log(err);
//     console.log(doc);
// })

// Car.findOne({brand: 'Ford'},(err, doc) => {
//     if(err) return console.log(err);
//     console.log(doc);
// })

// Car.findOneAndRemove({brand: 'Ford'}, (err, doc) => {
//         if(err) return console.log(err);
//         console.log(doc);
// })

// Car.findByIdAndRemove('5b3e84e9b70391d2099cd305', (err, doc) => {
//     if(err) return console.log(err);
//     console.log(doc);
// })

// Car.update(
//     {_id: '5b3e87dfb70391d2099cd3f8'}, 
//     {
//         $set: {
//             brand: 'Nissan', 
//             model: 'GTR'
//         }
//     }, 
//     (err, doc) => {
//         if(err) return console.log(err);
//         console.log(doc);
//     }
// )

// Car.findByIdAndUpdate(
//     '5b3e87dbb70391d2099cd3f5', 
//     {
//         $set: {
//             brand: 'Nissan', 
//             model: 'Leaf',
//             year: 2018
//         }
//     },
//     { new: false },
//     (err, doc) => {
//         if(err) return console.log(err);
//         console.log(doc);
//     }
// )

Car.findById('5b3e8ba8b70391d2099cd518', (err, car) => {
    if(err) return console.log(err);

    car.set({
        brand: 'Porsche',
        model: '911'
    });
    car.save((err, doc) => {
        if(err) return console.log(err);
        console.log(doc);
    });
})