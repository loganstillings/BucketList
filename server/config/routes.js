var session = require('../controllers/session.js')
var bucket = require('../controllers/bucket.js')
module.exports = function(app){
    app.post('/login', function(req,res){
        session.login(req,res);
    })
    app.get('/checkuser', function(req,res){
        session.checkuser(req,res);
    })
    app.get('/otherusers', function(req,res){
        session.otherusers(req,res)
    })
    app.get('/logout', function(req,res){
        session.logout(req,res)
    })
    app.post('/addbucket', function(req,res){
        bucket.addbucket(req,res)
    })
    app.post('/addwithtag', function(req,res){
        bucket.addwithtag(req,res)
    })
    app.get('/myBuckets', function(req,res){
        bucket.myBuckets(req,res)
    })
    app.get('/theirBuckets/:id', function(req,res){
        bucket.theirBuckets(req,res)
    })
    app.get('/change/:id', function(req,res){
        bucket.change(req,res)
    })
    app.get('/getUser/:id', function(req,res){
        session.getUser(req,res)
    })
}