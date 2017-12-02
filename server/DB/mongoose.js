const mongoose = require('mongoose');
mongoose.promise=global.Promise;
const DbUrl ='mongodb://localhost:27017/TodoApp';
mongoose.connect(DbUrl);


module.export ={
    mongoose
};