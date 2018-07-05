const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/';

// MongoClient.connect(url, (err, db) => {
//     if(err) {
//         console.log('Could not connect')
//     } else {
//         console.log('connected')
//     }

//     db.close();
// })

// MongoClient.connect(url, (err, client) => {
//     if(err) {
//         console.log('Could not connect')
//     } else {
//         var db = client.db('test');
//         console.log('connected')
//         db.collection('Cars').insertOne({
//             model: 'Ford',
//             year: 2017
//         },(err, res) => {
//             if(err) {
//                 return console.log(`Cannot insert: ${err}`);
//             }
//             console.log(res.ops)
//         })
//     }
//     client.close();
// })

// MongoClient.connect(url, (err, client) => {

//     const cars = [
//         {model: 'Chevy', year: '2017'},
//         {model: 'Nissan', year: '2010'}
//     ]


//     if(err) {
//         console.log('Could not connect')
//     } else {
//         var db = client.db('test');
//         console.log('connected')
//         db.collection('Cars').insert(cars,(err, res) => {
//             if(err) {
//                 return console.log(`Cannot insert: ${err}`);
//             }
//             console.log(res.ops)
//         })
//     }
//     client.close();
// })

// MongoClient.connect(url, (err, client) => {

//     const cars = [
//         {model: 'Chevy', year: '2017'},
//         {model: 'Nissan', year: '2010'}
//     ]


//     if(err) {
//         console.log('Could not connect')
//     } else {
//         var db = client.db('test');
//         console.log('connected')
//         db.collection('Cars').insertMany(cars,(err, res) => {
//             if(err) {
//                 return console.log(`Cannot insert: ${err}`);
//             }
//             console.log(res.ops)
//         })
//     }
//     client.close();
// })

// MongoClient.connect(url, (err, client) => {

//     var db = client.db('test');

//     db.collection('Cars').find().toArray().then(data => {
//         console.log(data)
//     });

//     client.close();

// })

// MongoClient.connect(url, (err, client) => {

//     var db = client.db('test');

//     db.collection('Cars').find()
//     .skip(1)
//     .limit(1)
//     .sort({"_id":-1})
//     .toArray().then(data => {
//         console.log(data)
//     });

//     client.close();

// })

// MongoClient.connect(url, (err, client) => {

//     var db = client.db('test');

//     db.collection('Cars').find({year:'2010'})
//     .toArray().then(data => {
//         console.log(data)
//     });

//     client.close();
// })

// MongoClient.connect(url, (err, client) => {

//     var db = client.db('test');

//     var options = {
//         fields: {
//             model: 0, 
//             year: 0
//         }
//     }

//     db.collection('Cars').findOne({year:'2010'}, options, (err, doc) => {
//         console.log(doc)
//     });

//     client.close();
// })

// MongoClient.connect(url, (err, client) => {

//     var db = client.db('test');

//     var id = db.collection('Cars').deleteMany({year:'2010'}, (err, doc) => {
//         console.log(doc)
//     });

//     client.close();
// })

// MongoClient.connect(url, (err, client) => {

//     var db = client.db('test');

//     var id = db.collection('Cars').deleteOne({model:'Chevy'}, (err, doc) => {
//         console.log(doc)
//     });

//     client.close();
// })

// MongoClient.connect(url, (err, client) => {

//     var db = client.db('test');

//     var id = db.collection('Cars').findOneAndDelete({model:'Chevy'}, (err, doc) => {
//         console.log(doc)
//     });

//     client.close();
// })

MongoClient.connect(url, (err, client) => {

    var db = client.db('test');

    var id = db.collection('Users').findOneAndUpdate(
        {
            name: 'Francis'
        },
        {
            $set: {
                lastname: 'Jones'
            },
            $inc: {
                age: +2
            }
        },
        {
            upsert: true,
            returnOriginal: true
        },
        (err,doc) => {
            console.log(doc)
        }
    )

    client.close();
})