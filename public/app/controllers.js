/* global angular:false */
angular.module("app")
  .controller("HelloCtrl", function($location) {
    const hello = this;
    hello.sayHello = () => $location.path(`/hello/${hello.name}`);
  })

  .controller("HelloPersonCtrl", function($routeParams) {
    const helloPerson = this;
    helloPerson.header = `Hello ${$routeParams.name || "Angular World"}`;
  })

  .controller("TodoCtrl", function(todoFactory) {
    const todo = this;
    todoFactory.getTodos().then(todos => todo.todos = todos);

    todo.toggleTodo = id => todoFactory.toggleTodo(id);
  });

//NOTE(adam): no http requests in controllers!
