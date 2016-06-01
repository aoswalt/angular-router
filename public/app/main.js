/* global angular:false */

//NOTE(adam): array is dependancies
angular.module("app", ["ngRoute"])   //eslint-disable-line no-unused-vars
  .config($routeProvider => {
    $routeProvider
      .when("/", {
        template: "<a href='#/hello'>Hello</a><h1>Home Sweet Home</h1>"
      })
      .when("/hello", {
        template: "<a href='#/'>Home</a><h1>{{header}}</h1>",
        controller: "MainCtrl"
      })
      .otherwise("/");
  })

  .controller("MainCtrl", function($scope) {
    $scope.header = "Hello Angular World";
  });
