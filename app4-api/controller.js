angular.module("apiApp")
    .controller("apiCtrl", function($scope, apiSvc) {


      var ary = [];
      var promise = apiSvc.getStarships()
          promise.then(function(starships) {
              $scope.starships = starships;
          });




    })
