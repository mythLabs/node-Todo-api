// const Mongoclient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //De-structuring

//var obj = new ObjectID();
const DbUrl ='mongodb://localhost:27017/TodoApp';
MongoClient.connect(DbUrl,(err,db) => {
    if(err) {
       return console.log("error",err);
    }
    console.log("connected to mongodb");



// db.collection('Todo').insertOne({
//     text:'something',
//     completed:false
// },(err,result) => {
//         if(err) {
//            return console.log('unable to insert todo',err);
//         }
//         console.log(JSON.stringify(result.ops,undefined,2));

// });
// db.collection('Users').insertOne({
//     name:'Amit Bisht',
//     age:24,
//     location:'Manish Nagar,nagpur'
// },(err,result) => {
//         if(err) {
//            return console.log('unable to insert todo',err);
//         }
//         console.log(JSON.stringify(result.ops,undefined,2));

// });

db.close();
});