/* global angular:false */

//NOTE(adam): array is dependancies
angular.module("app", ["ngRoute"])   //eslint-disable-line no-unused-vars
  .controller("MainCtrl", function($scope) {
    $scope.header = "Hello World";
  });
