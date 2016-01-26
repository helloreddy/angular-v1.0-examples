'use strict';

/**
* @ngdoc overview
* @name CabinetApp
* @description
*
* Main module of the application.
*/
var cabinetApp = angular.module('CabinetApp', ['ngRoute']);

cabinetApp.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
	  templateUrl: 'views/test_websocket.html',
	  controller : 'TestWebSocketCtrl'
  })
  .when('/fileupload', {
	  templateUrl: 'views/test_fileupload.html',
	  controller : 'TestFileUploadCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });

  $locationProvider.html5Mode(true);
});
