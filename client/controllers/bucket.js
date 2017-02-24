myApp.controller('bucketController', function($scope, bucketFactory, sessionFactory, $route, $routeParams){
    $scope.bucketError = []
    $scope.addBucket =function(){
        if(!$scope.newBucket || !$scope.newBucket.title ||$scope.newBucket.title.length < 5){
            $scope.bucketError = []
            $scope.bucketError.push('Enter a title of at least 5 characters')
        }
        else if(!$scope.newBucket || !$scope.newBucket.description || $scope.newBucket.description.length < 10){
            $scope.bucketError = []
            $scope.bucketError.push('Enter a description of at least 10 characters')
        }
        else{
            $scope.bucketError = []
            bucketFactory.addBucket($scope.newBucket)
            $scope.newBucket = {}
            $route.reload();
        }
    }
    if($routeParams.id){
        sessionFactory.getUser($routeParams.id, function(data){
            $scope.thisUser = data
        })
        bucketFactory.theirBuckets($routeParams.id, function(data){
            $scope.theirBuckets = data
            $scope.theirDone = [];
            $scope.theirPending = [];
            for(var i = 0; i < $scope.theirBuckets.length; i++){
            if ($scope.theirBuckets[i].status == 'Pending'){
                $scope.theirPending.push($scope.theirBuckets[i])
            }
            else{
                $scope.theirDone.push($scope.theirBuckets[i])
            }
        }
        })
    }
    $scope.change = function(id){
        bucketFactory.change(id);
        $route.reload()
    }
})