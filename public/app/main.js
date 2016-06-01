/* global angular:false */

//NOTE(adam): array is dependancies
angular.module("app", ["ngRoute"])   //eslint-disable-line no-unused-vars
  .config($routeProvider => {
    $routeProvider
      .when("/", {
        template: "<a href='#/hello'>Hello</a><h1>Home Sweet Home</h1>"
      })
      .when("/hello", {
        template: `Say hello to:
          <form ng-submit="hello()">
            <input ng-model="name">
            <input type="submit"
          </form>`,
        controller: "HelloCtrl"
      })
      .when("/hello/:name", {
        template: "<a href='#/'>Home</a> <a href='#/hello/'>Back</a><h1>{{header}}</h1>",
        controller: "HelloPersonCtrl"
      })
      .otherwise("/");
  })

  .controller("HelloCtrl", function($scope, $location) {
    // $scope.hello = () => window.location.assign(`#/hello/${$scope.name}`);
    $scope.hello = () => $location.path(`/hello/${$scope.name}`);
  })

  .controller("HelloPersonCtrl", function($scope, $routeParams) {
    $scope.header = `Hello ${$routeParams.name || "Angular World"}`;
  });
