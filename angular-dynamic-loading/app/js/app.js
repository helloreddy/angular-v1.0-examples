define(['angularAMD', 'angular-route'], function (angularAMD) {
  var app = angular.module("cabinetApp", ['ngRoute']);

  app.config(function ($routeProvider) {

    $routeProvider
    .when("/home", angularAMD.route({
        templateUrl: '../view/home.html', controller: 'HomeCtrl', controllerUrl: 'modules/home.controller'
    }))
    .when("/view1", angularAMD.route({
        templateUrl: '../view/view1.html', controller: 'View1Ctrl', controllerUrl: 'modules/view1.controller'
    }))
    .otherwise({redirectTo: "/home"});
  });

  return angularAMD.bootstrap(app);
});
