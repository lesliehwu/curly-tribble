var mongoose=require('mongoose');
var Note=mongoose.model('Note');

module.exports={
    index:function(request,response){
        Note.find({},function(err,notes){
            response.json({'notes':notes});
        });
    },
    create:function(request,response){
        console.log("express create method");
        console.log(request.body);
        var note=new Note({
            content:request.body.content,
            created_at:new Date()
        });
        note.save(function(err){
            if(err){
                console.log("something went wrong");
                let errors=[];
                for(var x in err.errors){
                    errors.push(err.errors[x].message);
                }
                response.json({message:"Error",error:errors});
            } else{
                response.json({message:"Success",note:note});
            }
        });
    },
}
