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
      //NOTE(adam): optimistic update, instant update and change back if error
      $scope.todos[id].completed = !$scope.todos[id].completed;
      $http.patch(`https://angular-todo-2d89f.firebaseio.com/todo/${id}.json`, {
        completed: $scope.todos[id].completed
      }).catch(() => $scope.todos[id].completed = !$scope.todos[id].completed);
      //NOTE(adam): firebase responsds with 200 on some bad requests
    };
  });

//NOTE(adam): no http requests in controllers!
