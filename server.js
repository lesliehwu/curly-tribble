var express=require('express');
var app=express();

require('./server/config/mongoose.js');

//Settings
var bodyParser=require('body-parser');
app.use(bodyParser.json());
const path=require('path');

app.use(express.static(path.join(__dirname,'/public/dist')));

//ROUTES
var routes_setter=require('./server/config/routes.js');
routes_setter(app);

app.listen(9999,function(){
    console.log('listening on port 9999');
});
