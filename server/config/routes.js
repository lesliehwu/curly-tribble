var notes=require('../controllers/notes.js');
module.exports=function(app){
    app.get('/notes',(request,response,next)=>{
        console.log("express get route is working");
        notes.index(request,response);
    });

    app.post('/notes',(request,response,next)=>{
        console.log("node route create");
        console.log(request.body);
        notes.create(request,response);
    });
}
