/* global angular:false */
angular.module("app")
  .controller("HelloCtrl", function($scope, $location) {
    $scope.hello = () => $location.path(`/hello/${$scope.name}`);
  })

  .controller("HelloPersonCtrl", function($scope, $routeParams) {
    $scope.header = `Hello ${$routeParams.name || "Angular World"}`;
  })

  .controller("TodoCtrl", function($scope, $http) {
    $http.get("https://angular-todo-2d89f.firebaseio.com/todo.json")
      .then(res => $scope.todos = res.data);

    $scope.toggleTodo = todo => todo.completed = !todo.completed;
  });

