/* global angular:false */

angular.module("app", ["ngRoute"])   //eslint-disable-line no-unused-vars
  .config($routeProvider => {
    //NOTE(adam): partials are not loaded until requested, can be configured differently
    $routeProvider
      .when("/", {
        templateUrl: "/app/partials/home.html"
      })
      .when("/hello", {
        templateUrl: "/app/partials/hello.html",
        controller: "HelloCtrl"
      })
      .when("/hello/:name", {
        templateUrl: "/app/partials/hello-person.html",
        controller: "HelloPersonCtrl"
      })
      .otherwise("/");
  })

  .controller("HelloCtrl", function($scope, $location) {
    $scope.hello = () => $location.path(`/hello/${$scope.name}`);
  })

  .controller("HelloPersonCtrl", function($scope, $routeParams) {
    $scope.header = `Hello ${$routeParams.name || "Angular World"}`;
  });
