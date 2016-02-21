angular.module("drill3")
    .controller("filterCtrl", function($scope, filterSvc) {

      $scope.contactInfo = filterSvc.getData();


    })
