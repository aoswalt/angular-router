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

    $scope.toggleTodo = id => {
      $http.patch(`https://angular-todo-2d89f.firebaseio.com/todo/${id}.json`, {
        completed: !$scope.todos[id].completed
      }).then(res => $scope.todos[id].completed = res.data.completed);
    };
  });

