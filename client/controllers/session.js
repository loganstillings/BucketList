myApp.controller('sessionController', function($scope, sessionFactory, bucketFactory){
    $scope.errors = []
    
    sessionFactory.checkUser(function(data){
        $scope.currentUser = data;
        sessionFactory.otherUsers(function(data){
            $scope.otherUsers = data;
        })
        bucketFactory.myBuckets(function(data){
            $scope.myBuckets = data;
        })
    });

    $scope.login = function(){
        if (!$scope.logReg || $scope.logReg.name.length < 3){
            $scope.errors = []
            $scope.errors.push('Please enter a name of at least 3 characters.')
        }else{
            sessionFactory.login($scope.logReg);
        }
    }
})