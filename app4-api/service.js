angular.module("apiApp")
    .service("apiSvc", function($http, $q) {

      var baseUrl = "http://swapi.co/api/";

      this.getStarships = function() { //declare function
          var later = $q.defer();
          $http({ //http call
            method: "GET", //only retrieving data, not changing or inputting
            url: baseUrl + "pokemon/"
          })
            .then(function(response) {//response param to represent web response
              //and then when your done("http"), use this function to give me
              //the results
              later.resolve(response.data)
              //
              //response.data is the data retrieved from the //http request
            })
            return later.promise;
      }

    })
