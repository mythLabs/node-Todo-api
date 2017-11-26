// const Mongoclient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //De-structuring

//var obj = new ObjectID();
const DbUrl ='mongodb://localhost:27017/TodoApp';
MongoClient.connect(DbUrl,(err,db) => {
    if(err) {
       return console.log("error",err);
    }
    console.log("connected to mongodb");


// db.collection('Todo').find({_id:new ObjectID('5a1a25e7bf49f61f9428e252')}).toArray().then((docs) =>{
//  console.log(JSON.stringify(docs,undefined,2))
// },(err) => {
//   console.log('unable to fetch');
// });
db.collection('Todo').find().count().then((count) =>{
    console.log(`count is ${count}`)
   },(err) => {
     console.log('unable to fetch');
   });
//db.close();
});