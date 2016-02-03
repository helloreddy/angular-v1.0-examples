define(['app'], function (app) {
    console.log('home.service.js - Strar home.service module..');

    app.factory('homeService', homeService);

    // Constructor
    function homeService($http, $q) {
      console.log("Get in homeService");

      var service = {
        getMessage : getMessage
      };
      return service;

      function getMessage() {
        return "Message from HomeService";
      };
    };

});
