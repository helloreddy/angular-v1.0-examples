define(['angularAMD', 'angular-route'], function (angularAMD) {
  var app = angular.module("webapp", ['ngRoute']);
  
  app.config(function ($routeProvider) {

    $routeProvider
    .when("/home", angularAMD.route({
        templateUrl: '../view/home.html', controller: 'HomeCtrl', controllerUrl: 'controller/home-controller'
    }))
    .when("/view1", angularAMD.route({
        templateUrl: '../view/view1.html', controller: 'View1Ctrl', controllerUrl: 'controller/view1-controller'
    }))
    .otherwise({redirectTo: "/home"});
  });
  
  return angularAMD.bootstrap(app);
});