/* global angular */
angular.module("app")
  .filter("camelcase", () =>
    string => string.toLowerCase().replace(/\ \w/g, m => m[1].toUpperCase())
  );
