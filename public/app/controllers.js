/* global angular:false */
angular.module("app")
  .controller("HelloCtrl", function($scope, $location) {
    $scope.hello = () => $location.path(`/hello/${$scope.name}`);
  })

  .controller("HelloPersonCtrl", function($scope, $routeParams) {
    $scope.header = `Hello ${$routeParams.name || "Angular World"}`;
  })

  .controller("TodoCtrl", function($scope, todoFactory) {
    todoFactory.getTodos().then(todos => $scope.todos = todos);

    $scope.toggleTodo = id => todoFactory.toggleTodo(id);
  });

//NOTE(adam): no http requests in controllers!
