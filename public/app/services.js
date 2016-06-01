/* global angular:false */
angular.module("app")
  .service("service_name", function() {
    this.name = "adam";
  });
  //NOTE(adam): generally factories preferred over services
