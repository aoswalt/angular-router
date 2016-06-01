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
      .when("/hello/:name", {
        template: "<a href='#/'>Home</a><h1>{{header}}</h1>",
        controller: "MainCtrl"
      })
      .otherwise("/");
  })

  .controller("MainCtrl", function($scope, $routeParams) {
    const { name } = $routeParams;  //NOTE(adam): destructuring because why not
    $scope.header = `Hello ${name || "Angular World"}`;
  });
