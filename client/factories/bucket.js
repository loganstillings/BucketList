myApp.factory('bucketFactory', function($http, $location){
    var factory = {}
    factory.addBucket = function(item){
        if(item.tag){
            $http.post('/addwithtag', item).then(function(output){
                if(output.data == false){
                    alert('something went wrong adding the bucket item')
                }
            })
        }
        else{
            $http.post('/addbucket', item).then(function(output){
                if(output.data == false){
                    alert('something went wrong adding the bucket item')
                }
            })
        }
    }
    factory.myBuckets = function(cb){
        $http.get('/myBuckets').then(function(output){
            if(output.data != false){
                cb(output.data)
            }
        })
    }
    factory.theirBuckets = function(id, cb){
        $http.get('/theirBuckets/' + id).then(function(output){
            if(output.data != false){
                cb(output.data)
            }
            else{
                $location.url('/dashboard')
                alert('user does not exist by that id')
            }
        })
    }
    factory.change = function(id){
        $http.get('/change/' + id).then(function(output){
            if(output.data == false){
                alert('You can not change the status of an item you did not create or are tagged in')
                $route.reload()
            }
            else{
                $route.reload()
            }
        })
    }
    return factory;
})