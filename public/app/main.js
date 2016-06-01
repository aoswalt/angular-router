/* global angular:false */

//NOTE(adam): array is dependancies
angular.module("app", ["ngRoute"])   //eslint-disable-line no-unused-vars
  .config($routeProvider => {
    $routeProvider
      .when("/", {
        template: "<h1>{{header}}</h1>",
        controller: "MainCtrl"
      })
      .when("/hello", {
        template: "<h1>OMG No Controller</h1>"
      })
      .otherwise({});
  })

  .controller("MainCtrl", function($scope) {
    $scope.header = "Hello World";
  });
