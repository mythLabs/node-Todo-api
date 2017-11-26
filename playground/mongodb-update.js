const {MongoClient, ObjectID} = require('mongodb'); //De-structuring

const DbUrl ='mongodb://localhost:27017/TodoApp';
MongoClient.connect(DbUrl,(err,db) => {
    if(err) {
       return console.log("error",err);
    }
    console.log("connected to mongodb");


//find one and delete
db.collection('Todo').findOneAndUpdate({text:'something'},{
    $set:{
        completed:true
    }
},{
    returnOriginal:false
}).then((result) =>{
    console.log(result)
   },(err) => {
     console.log('unable to update');
   });

//db.close();
});