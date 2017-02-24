myApp.factory('sessionFactory', function($http, $location){
    var factory = {}

    factory.checkUser = function(cb){
        $http.get('/checkuser').then(function(output){
            if(!output.data){
                $location.url('/login')
            }
            else{
                cb(output.data)
            }
        })
    }

    factory.login = function(user){
        $http.post('/login', user).then(function(output){
            if(output.data){
                $location.url('/dashboard')
            }
        })
    }
    factory.getUser = function(id, cb){
        $http.get('/getUser/' + id).then(function(output){
            if(output.data == false){
                alert('could not get user by id: ' + id)
            }
            else{
                cb(output.data)
            }
        })
    }

    factory.otherUsers = function(cb){
        $http.get('/otherusers').then(function(output){
            cb(output.data)
        })
    }

    return factory
})