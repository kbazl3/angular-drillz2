angular.module("arrayApp")
    .controller("arrayController", function($scope, arrayService) {

      $scope.contactInfo = arrayService.getData();


    })
