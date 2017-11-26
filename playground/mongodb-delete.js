const {MongoClient, ObjectID} = require('mongodb'); //De-structuring

const DbUrl ='mongodb://localhost:27017/TodoApp';
MongoClient.connect(DbUrl,(err,db) => {
    if(err) {
       return console.log("error",err);
    }
    console.log("connected to mongodb");


// delete Many
// db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) =>{
//     console.log(result)
//    },(err) => {
//      console.log('unable to delete');
//    });

//delete one
// db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) =>{
//     console.log(result)
//    },(err) => {
//      console.log('unable to delete');
//    });

//find one and delete
db.collection('Todo').findOneAndDelete({text:'Eat lunch'}).then((result) =>{
    console.log(result)
   },(err) => {
     console.log('unable to delete');
   });

//db.close();
});