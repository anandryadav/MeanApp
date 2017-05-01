//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();
const route= require('./routes/route');

// var options = { server: { socketOptions: { keepAlive: 1 } } };
// var connectionString = 'mongodb://admin:admin123@localhost:27017/admin';

//  mongoose.connect(connectionString, options);
//

mongoose.connect('mongodb://admin:admin123@localhost:27017/admin');
mongoose.connection.on('connected',function(){
    console.log('Connected to database mongodb @ 27017');
})
mongoose.connection.on('error',function(error){
    if(error){
        console.log('Error in database connection',error);
    }
    
})

const port =3000;//port no
app.use(cors());//adding middleware -cors

//body-parser
app.use(bodyparser.json());

//satatic files
app.use(express.static(path.join(__dirname, 'public')
))

//call routes
app.use('/api',route)

app.listen(port, function() {
  console.log('Application is listening on port 3000');
});

