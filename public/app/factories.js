/* global angular:false */
angular.module("app")
  .factory("factory_name", () => ({
    name: "adam"
  }));
  //NOTE(adam): generally factories preferred over services
