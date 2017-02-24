var mongoose =require('mongoose')
var Bucket = mongoose.model('Bucket')
module.exports = function(){
    return {
        addbucket: function(req,res){
            var newBucket = new Bucket(req.body)
            newBucket._users.push(req.session.user._id)
            newBucket._creator = req.session.user.name
            newBucket.save(function(err){
                if (err){
                    res.json(false)
                }
            })
        },
        addwithtag: function(req,res){
            var newBucket = new Bucket(req.body);
            newBucket._users.push(req.session.user._id)
            newBucket._users.push(req.body.tag)
            newBucket._creator = req.session.user.name
            newBucket.save(function(err){
                if (err){
                    res.json(false)
                }
            })

        },
        myBuckets: function(req,res){
            Bucket.find({_users: req.session.user._id}, function(err, data){
                if(err){
                    res.json(false)
                }
                else{
                    res.json(data)
                }
            })
        },
        theirBuckets: function(req,res){
            Bucket.find({_users: req.params.id}, function(err, data){
                if(err){
                    res.json(false)
                }
                else{
                    res.json(data)
                }
            })
        },
        change: function(req,res){
            Bucket.findOne({_id: req.params.id}, function(err,data){
                if(err){
                    res.json(false)
                }
                else{
                    var check = false;
                    for(var i = 0; i< data._users.length; i++){
                        if(data._users[i] == req.session.user._id){ //if the logged in user is tagged or the creator of the event
                            check = true;
                            break;
                        }
                    }
                    if(check){
                        if(data.status == 'Pending'){
                            data.status = 'Done'
                        }
                        else{
                            data.status = 'Pending'
                        }
                        data.save(function(err){
                            if(err){
                                res.json(false)
                            }
                            else{
                                res.json(data)
                            }
                        })
                    }
                    else{
                        res.json(false)
                    }
                }
            })
        }
    }
}()