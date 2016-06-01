/* global angular:false */
angular.module("app")
  .factory("todoFactory", ($http, API_URL) => {
    //NOTE(adam): cached todos
    let todos = null;

    return {
      getTodos() {
        return $http
        .get(`${API_URL}.json`)
        .then(res => res.data)
        .then(t => todos = t);
      },

      toggleTodo(id) {
        todos[id].completed = !todos[id].completed;
        $http.patch(`${API_URL}/${id}.json`, {
          completed: todos[id].completed
        }).catch(() => todos[id].completed = !todos[id].completed);
      }
    };
  });
